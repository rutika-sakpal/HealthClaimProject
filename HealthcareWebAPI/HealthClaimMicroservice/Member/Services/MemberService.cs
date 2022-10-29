using Member.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Member.Services
{
    public class MemberService : IMemberService
    {
        HealthclaimAppContext db;
        public MemberService(HealthclaimAppContext _db)
        {
                db=_db;
        }

        public TblMember SaveMember(TblMember member)
        {
            try
            {
                member.UserId = 1002;
                member.CreatedBy = "admin";
                member.CreatedDate = DateTime.Now;
                member.ModifiedBy = "admin";
                member.ModifiedDate = DateTime.Now;
                db.TblMembers.Add(member);
                db.SaveChanges();
                return member;
            }
            catch (Exception ex)
            {
                return member;
            }
        }
    }
}
