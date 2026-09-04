/*

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();

*/

using System.ComponentModel.DataAnnotations;
using Api.Data;
using Api.Models;

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

var app = builder.Build();

app.UseCors("web");

app.MapGet("/", () => Results.Ok(new { status = "ok", service = "tsima-portfolio-api" }));

app.MapGet("/api/projects", () => Results.Ok(ProjectsData.All));



// Contact
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

app.Run();