import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null,Validators.required),
      'checkbox' : new FormControl(false),
    })

  }

  Submit(){
    console.log(this.form);
    this.form.reset();
  }
}
