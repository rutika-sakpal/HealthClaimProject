using Member.Models;
using Member.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Member.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        IMemberService memberService;
        public MemberController(IMemberService _memberService)
        {
            memberService = _memberService;
        }

        [HttpGet]
        public string Get()
        {
            return "Hi";
        }

        [HttpPost]
        [Route("add-member")]
        public IActionResult SaveMember([FromBody] TblMember member)
        {
            try
            {
                var data =  memberService.SaveMember(member);
                return Ok(data);

            }
            catch (Exception ex)
            {
                return Ok(ex);

            }

        }
    }
}
