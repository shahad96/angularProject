import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('info') formInfo: NgForm;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(formInfo: NgForm){
    console.log(formInfo);
    this.formInfo.reset();
  }

  signUp(){
    this.router.navigate(['signup']);
  }

}
