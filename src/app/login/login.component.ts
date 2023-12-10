import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]

  })


  constructor(private router: Router, private fb: FormBuilder, private ds: DataService) { }

  ngOnInit(): void {

  }

  login() {
    if (this.loginGroup.valid) {
      this.ds.loginApi(this.loginGroup.value.username, this.loginGroup.value.password).subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl('home')
        console.log(result);
        localStorage.setItem('currentuser',result.currentuser)
        localStorage.setItem('name',result.name)
        

      }, result => {
        alert(result.error.message)
      })
    } else {
      alert('invalid form')
    }


  }


}