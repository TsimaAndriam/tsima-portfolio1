using Api.Models;

namespace Api.Data;

public static class ProjectsData
{
    // Pour l'instant, la liste vit ici en dur. Elle mirroir exactement
    // les données statiques côté Next.js (src/lib/data.ts).
    public static readonly List<Project> All = new()
    {
        new Project
        {
            Slug = "comptassistance",
            Name = "Comptassistance",
            Description = "Cabinet comptable malgache — mises à jour back-end.",
            Tag = "Depuis juin 2017",
            Status = "live",
            Url = "https://www.comptassistance.com",
            Art = "t1",
        },
        new Project
        {
            Slug = "comptassistance-refonte",
            Name = "Comptassistance — refonte",
            Description = "Nouvelle version en Figma Design & Figma Sites, page unique à défilement.",
            Tag = "En cours dans Figma",
            Status = "progress",
            Art = "t4",
        },
        new Project
        {
            Slug = "nocomment",
            Name = "NO COMMENT®",
            Description = "Site du groupe — back-end et fiches partenaires.",
            Tag = "2015 – 2023",
            Status = "live",
            Url = "https://www.nocomment.mg",
            Art = "t2",
        },
        new Project
        {
            Slug = "rli",
            Name = "RLI",
            Description = "Second site du groupe NO COMMENT — back-end.",
            Tag = "2015 – 2023",
            Status = "live",
            Url = "https://www.rli.mg",
            Art = "t3",
        },
    };
}