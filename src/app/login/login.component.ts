import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthService]
})
export class LoginComponent {
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router ){}
  ngOnInit(): void {
    this.loginForm =  this.fb.group({
      email:['' ,  [Validators.required, Validators.email]],
      password:['' , [Validators.required ,  Validators.minLength(6)]]
    })
  }
  onSubmit(){
    const{email, password} = this.loginForm.value;
    if(this.loginForm.valid)
    {
        let res = this.auth.login(email , password);
        if(res==200)
        {
          alert('Login Successfully..')
          this.router.navigate(['/header'])
        }
        else
        {
          alert('Not Registered..')
        }
    }
  }
  
}
