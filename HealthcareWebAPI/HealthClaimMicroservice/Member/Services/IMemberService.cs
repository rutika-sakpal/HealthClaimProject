using Member.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Member.Services
{
    public interface IMemberService
    {
        TblMember SaveMember(TblMember member);
       // string SearchMember(TblMember member);
    }
}
