using Microsoft.AspNetCore.Mvc;
using PrimeiraApp.Models;

namespace PrimeiraApp.ViewComponents;

public class SaudacaoAlunoViewComponent : ViewComponent
{
    public async Task<IViewComponentResult> InvokeAsync()
    {
        // Pegar o aluno na base de dados
        // Pegar o dado (nome) do aluno que está logado
        var aluno = new Aluno() { Nome = "Eduardo" };

        return View(aluno);
    }
}