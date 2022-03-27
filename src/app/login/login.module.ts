import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { LogInRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    LogInRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LogInModule { }
