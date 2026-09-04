namespace Api.Models;

public class Project
{
    public string Slug { get; set; } = "";
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public string Tag { get; set; } = "";

    // "live" ou "progress" — reflète le statut affiché côté Next.js
    public string Status { get; set; } = "live";
    public string? Url { get; set; }

    // Nom du dégradé CSS utilisé côté front (t1, t2, t3, t4)
    public string Art { get; set; } = "t1";
}