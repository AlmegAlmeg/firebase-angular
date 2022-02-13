import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f', { static: false }) signup: NgForm
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.signup.form.status == "VALID"){
      this.authService.signup(this.signup.value.email, this.signup.value.password).subscribe((data:any)=>{
        console.log(data)
      })
    }
  }
}
