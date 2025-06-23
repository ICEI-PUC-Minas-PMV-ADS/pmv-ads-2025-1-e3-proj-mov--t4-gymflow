using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System.Data.SqlClient; // Só conectar no Azure SQL Database
using System.Threading.Tasks; // OP. Assincrona 

namespace GymFlowApp.Controllers
{
    [ApiController]
    [Route("[controller]")] 
    public class TreinosController : ControllerBase
    {
        private readonly IConfiguration _configuration; 

        public TreinosController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Authorize] // Exige autenticação
        public async Task<IActionResult> GetTreinos()
        {
            // 1. Obter o token do cabeçalho
            string authorizationHeader = Request.Headers["Authorization"];
            if (string.IsNullOrEmpty(authorizationHeader) || !authorizationHeader.StartsWith("Bearer "))
            {
                return Unauthorized("Token inválido.");
            }
            string token = authorizationHeader.Substring("Bearer ".Length).Trim();

            // 2. Conectar ao banco de dados Azure
            string connectionString = _configuration.GetConnectionString("AzureDB"); // Obter a string de conexão do appsettings.json
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();
                // 4. Buscar os dados (exemplo: selecionar todos os treinos)
                string sql = "SELECT * FROM Treinos";
                using (SqlCommand command = new SqlCommand(sql, connection))
                using (SqlDataReader reader = await command.ExecuteReaderAsync())
                {
                    List<object> treinos = new List<object>(); //
                    while (await reader.ReadAsync())
                    {
                        // 5. Ler os dados e criar objetos
                        var treino = new
                        {
                            Id = reader.GetInt32(0),
                            Nome = reader.GetString(1),
                            Descricao = reader.GetString(2),
                            ImagemUrl = reader.GetString(3)
                            // Adicione outros campos
                        };
                        treinos.Add(treino);
                    }
                    // 6. Retornar os dados em JSON
                    return Ok(treinos);
                }
            }
        }
    }
}