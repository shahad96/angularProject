import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

const routes:Routes =[
{path:'login', component: LoginComponent},
{path:'signup', component: SignUpComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports:[RouterModule]
})
export class LogInRoutingModule { }
