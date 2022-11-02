using Claim.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Claim.Services
{
    public class ClaimService: IClaimService
    {
        HealthclaimAppContext db;
        public ClaimService(HealthclaimAppContext _db)
        {
            db = _db;
        }

        public IEnumerable<TblClaimType> GetAllClaimType()
        {
            var claimTypeList = db.TblClaimTypes.ToList();
            return claimTypeList;
        }
    }
}
