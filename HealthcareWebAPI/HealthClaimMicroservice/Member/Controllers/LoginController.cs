using Member.Models;
using Member.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Member.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        HealthclaimAppContext db;
        private IConfiguration _config;
        ILoginService loginService;

        public LoginController(ILoginService _loginService)
        {
              loginService = _loginService;
        }

        [HttpPost]
        [Route("login-user")]
        public async Task<IActionResult> Login(TblLogin user)
        {
            try
            {
                IActionResult response = Unauthorized();
                var userdata = await loginService.Login(user, false);
                if (user != null)
                {
                    response = Ok(new { token = userdata });
                }
                return response;
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }

        }
        [HttpPost]
        [Route("register-user")]
        public async Task<IActionResult> Register([FromBody] TblLogin user)
        {
            try
            {
                IActionResult response = Unauthorized();
                var userdata = await loginService.Register(user, true);
                if (user != null)
                {
                    response = Ok(new { token = userdata });
                }
                return response;
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }

        }

    }
}
