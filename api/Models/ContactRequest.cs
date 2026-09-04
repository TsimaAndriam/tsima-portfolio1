using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class ContactRequest
{
    [Required(ErrorMessage = "Le nom est requis.")]
    [MaxLength(120)]
    public string Name { get; set; } = "";

    [Required(ErrorMessage = "L'e-mail est requis.")]
    [EmailAddress(ErrorMessage = "L'e-mail n'est pas valide.")]
    public string Email { get; set; } = "";

    [Required(ErrorMessage = "Le message est requis.")]
    [MaxLength(4000)]
    public string Message { get; set; } = "";
}