using MyMiniBank_API.Models;
using MyMiniBank_API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policyBuilder => policyBuilder.AllowAnyOrigin()
                                      .AllowAnyMethod()
                                      .AllowAnyHeader());
});

// Configure Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register the AccountService
builder.Services.AddSingleton<IAccountService, AccountService>();
// Register the AccountService
builder.Services.AddSingleton<IAccountService, AccountService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Apply the CORS policy
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
