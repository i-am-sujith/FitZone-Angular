import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordCheck: any = false

  constructor(private router:Router, private fb: FormBuilder, private ds: DataService,) { 
    const today = new Date();

  }

  registerForm = this.fb.group({    //data binding and validating register form
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    confirmpassword: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    age: ['', [Validators.required,Validators.pattern('[0-9]+')]],
    gender: [''],
    height: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    weight: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.valid) {
      if (this.registerForm.value.password == this.registerForm.value.confirmpassword) {
        this.ds.registerApi(
          this.registerForm.value.username,
          this.registerForm.value.name,
          this.registerForm.value.password,
          this.registerForm.value.age,
          this.registerForm.value.gender,
          this.registerForm.value.height,
          this.registerForm.value.weight).subscribe((result: any) => {
            alert(result.message);
            this.router.navigateByUrl('')

          }, result => {
            alert(result.error.message)
          }
          )

      }
      else {
        this.passwordCheck = true
      }
    }
    else {
      alert('invalid form')
    }
  


  }
}