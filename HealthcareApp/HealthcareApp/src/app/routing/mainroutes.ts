import { AddmemberComponent } from '../addmember/addmember.component';
import { ClaimComponent } from '../claim/claim.component';
import { LoginComponent } from '../login/login.component';
import { MemberComponent } from '../member/member.component';
import { MemberhomeComponent } from '../memberhome/memberhome.component';
import { RegistrationComponent } from '../registration/registration.component';


export const Mainroutes = [
    { path: '', component: LoginComponent },
    { path: 'member',component: MemberComponent},
    { path: 'login', component: LoginComponent },
    { path: 'newuser', component: RegistrationComponent },
    { path: 'login/newuser',component:RegistrationComponent },
    { path: 'user/search',component: MemberComponent},
    { path: 'user/search/add',component: AddmemberComponent},
    { path: 'user/search/submitclaim/:id',component: ClaimComponent},
    { path: 'member/home/submitclaim/:id',component: ClaimComponent},
    { path: 'member/home',component: MemberhomeComponent},
];