/*

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();

*/

using System.ComponentModel.DataAnnotations;
using Api.Data;
using Api.Models;
using System.Net.Http.Json;

var builder = WebApplication.CreateBuilder(args);

// Autorise le front Next.js (localhost:3000 en dev) à appeler cette API.
// Sans ça, le navigateur bloque la requête par sécurité (règle CORS).
var allowedOrigins = (Environment.GetEnvironmentVariable("ALLOWED_ORIGINS")
        ?? "http://localhost:3000")
    .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);

builder.Services.AddCors(options =>
{
    options.AddPolicy("web", policy =>
    {
        policy.WithOrigins(allowedOrigins)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddHttpClient("brevo", client =>
{
    client.BaseAddress = new Uri("https://api.brevo.com/");
});

var app = builder.Build();

app.UseCors("web");

app.MapGet("/", () => Results.Ok(new { status = "ok", service = "tsima-portfolio-api" }));

app.MapGet("/api/projects", () => Results.Ok(ProjectsData.All));



// Contact
/*
app.MapPost("/api/contact", (ContactRequest request, ILogger<Program> logger) =>
{
    var validationResults = new List<ValidationResult>();
    var context = new ValidationContext(request);
    if (!Validator.TryValidateObject(request, context, validationResults, validateAllProperties: true))
    {
        var errors = validationResults.Select(r => r.ErrorMessage).ToArray();
        return Results.ValidationProblem(new Dictionary<string, string[]>
        {
            ["request"] = errors!,
        });
    }

    // TODO : brancher un vrai envoi d'e-mail ici (Resend, Brevo, SMTP...)
    // Pour l'instant, le message est simplement journalisé côté serveur.
    logger.LogInformation(
        "Nouveau message de contact — {Name} <{Email}>: {Message}",
        request.Name, request.Email, request.Message);

    return Results.Ok(new { received = true });
});
*/

app.MapPost("/api/contact", async (ContactRequest request, IHttpClientFactory httpClientFactory, ILogger<Program> logger) =>
{
    var validationResults = new List<ValidationResult>();
    var context = new ValidationContext(request);
    if (!Validator.TryValidateObject(request, context, validationResults, validateAllProperties: true))
    {
        var errors = validationResults.Select(r => r.ErrorMessage).ToArray();
        return Results.ValidationProblem(new Dictionary<string, string[]>
        {
            ["request"] = errors!,
        });
    }

    var brevoApiKey = Environment.GetEnvironmentVariable("BREVO_API_KEY");
    var contactEmail = Environment.GetEnvironmentVariable("CONTACT_EMAIL")
        ?? "tsimaandriamampianina@yahoo.fr";

    // Si la clé n'est pas configurée (ex. en local sans l'avoir réglée),
    // on retombe sur le simple log plutôt que de planter.
    if (string.IsNullOrEmpty(brevoApiKey))
    {
        logger.LogWarning("BREVO_API_KEY absente — message journalisé uniquement, pas d'e-mail envoyé.");
        logger.LogInformation(
            "Nouveau message de contact — {Name} <{Email}>: {Message}",
            request.Name, request.Email, request.Message);
        return Results.Ok(new { received = true, emailed = false });
    }

    var safeName = System.Net.WebUtility.HtmlEncode(request.Name);
    var safeEmail = System.Net.WebUtility.HtmlEncode(request.Email);
    var safeMessage = System.Net.WebUtility.HtmlEncode(request.Message);

    var payload = new
    {
        sender = new { name = "Portfolio Tsima", email = contactEmail },
        to = new[] { new { email = contactEmail, name = "Tsima" } },
        replyTo = new { email = request.Email, name = request.Name },
        subject = $"Nouveau message depuis le portfolio — {request.Name}",
        htmlContent = $"<p><strong>Nom :</strong> {safeName}</p>" +
                      $"<p><strong>Email :</strong> {safeEmail}</p>" +
                      $"<p><strong>Message :</strong><br>{safeMessage}</p>",
    };

    var client = httpClientFactory.CreateClient("brevo");
    client.DefaultRequestHeaders.Add("api-key", brevoApiKey);
    client.DefaultRequestHeaders.Add("accept", "application/json");

    var response = await client.PostAsJsonAsync("v3/smtp/email", payload);

    if (!response.IsSuccessStatusCode)
    {
        var error = await response.Content.ReadAsStringAsync();
        logger.LogError("Échec de l'envoi via Brevo ({Status}): {Error}", response.StatusCode, error);
        return Results.Problem("L'envoi de l'e-mail a échoué.", statusCode: 502);
    }

    logger.LogInformation("Message de contact envoyé par e-mail à {ContactEmail} (de la part de {Name})", contactEmail, request.Name);
    return Results.Ok(new { received = true, emailed = true });
});

app.Run();