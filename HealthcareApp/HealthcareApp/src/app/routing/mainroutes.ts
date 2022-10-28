import { AddmemberComponent } from '../addmember/addmember.component';
import { LoginComponent } from '../login/login.component';
import { MemberComponent } from '../member/member.component';
import { RegistrationComponent } from '../registration/registration.component';


export const Mainroutes = [
    { path: '', component: LoginComponent },
    { path: 'member',component: MemberComponent},
    { path: 'claim', loadChildren:() => import('../claim/claim.module').then (m => m.ClaimModule)},
    { path: 'login', component: LoginComponent },
    { path: 'newuser', component: RegistrationComponent },
    { path: 'login/newuser',component:RegistrationComponent },
    { path: 'user/search',component: MemberComponent},
    
];