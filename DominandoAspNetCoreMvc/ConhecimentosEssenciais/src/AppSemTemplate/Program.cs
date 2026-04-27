using AppSemTemplate.Configuration;
using AppSemTemplate.Data;
using AppSemTemplate.Extensions;
using AppSemTemplate.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.AddMvcConfiguration()
       .AddIdentityConfiguration()
       .AddDependencyInjectionConfiguration();


var app = builder.Build();

app.UserMvcConfiguration();

app.Run();
