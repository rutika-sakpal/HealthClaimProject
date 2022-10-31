﻿using Member.Models;
using System;
using System.Collections;
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
            db = _db;
        }

        public TblMember SaveMember(TblMember member)
        {
            Random rnd = new Random();
            try
            {
                member.PhysicianId = rnd.Next(1, 10);
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


        public IEnumerable GetAllMember()
        {
            try
            {
                var memberList = (from m in db.TblMembers
                                  join py in db.TblPhysicians on m.PhysicianId equals py.PhysicianId
                                  //join c in db.TblClaims on m.MenberId equals c.MemberId into claims
                                  //from x in claims.DefaultIfEmpty()
                                  //join c in db.TblClaims on m.MenberId equals c.MemberId

                                  select new
                                  {
                                      firstName = m.FirstName,
                                      lastName = m.LastName,
                                      physicianName = py.PhysicianName,
                                      //claimId = x.ClaimId==0 ?0: x.ClaimId

                                  }).ToList();
                return memberList;
            }
            catch (Exception ex)
            {
                return (IEnumerable<TblMember>)ex;
            }
        }
        public IEnumerable<TblPhysician> GetAllPhysician()
        {
            var physicianList = db.TblPhysicians.ToList();
            return physicianList;


        }
        public IEnumerable SearchMember(SearchDataModel searchDataModel)
        {
            try
            {
                int PhysicianId = 0;
                PhysicianId = Convert.ToInt32(searchDataModel?.PhysicianId);
                dynamic getdata = (from m in db.TblMembers
                                   join py in db.TblPhysicians
                                   on m.PhysicianId equals py.PhysicianId
                                   where ((m.PhysicianId == PhysicianId || m.FirstName == searchDataModel.FirstName || m.LastName == searchDataModel.LastName
                                    || m.MemberId==Convert.ToInt32( searchDataModel.MemberId) ))
                                   select new
                                   {   
                                       memberId=m.MemberId,
                                       firstName=m.FirstName,
                                       lastName=m.LastName,
                                       physicianName = py.PhysicianName

                                   }).ToList();

                return getdata;
            }
            catch (Exception ex)
            {
                dynamic result = ex;
                return result;
            }
        }
    }
}
