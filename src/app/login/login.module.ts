import { NgModule } from '@angular/core';


import { LogInRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LogInRoutingModule
    
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LogInModule { }
