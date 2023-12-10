import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  iname: any
  user: any
  myWeight: any
  myHeight: any
  myAge: any
  bmi: any
  fitnessGoal: any
  username: any
  fitness: any
  year: any
  month: any
  day: any
  currentuser:any
  today:any
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.iname = localStorage.getItem('name') //to display name

    if (!localStorage.getItem('name')) {   //logout if username is not found in localstorage
      this.router.navigateByUrl('')
    }

    this.getbmi()  //to work bmi calculation automatically when page open

  }


  logout() {
    localStorage.removeItem('name')
    localStorage.removeItem('currentuser')   //logout function
    this.router.navigateByUrl('')
  }




  getbmi() {  //function to calculate bmi and suggest workout
    this.user = localStorage.getItem('currentuser')
    let today=new Date()

    this.ds.bmiApi(this.user).subscribe((result: any) => {
      this.myWeight = result.weight
      this.myHeight = result.height
      this.myAge =   result.age
      this.bmi = (this.myWeight / ((this.myHeight / 100) * (this.myHeight / 100))).toFixed(1)

      if (this.bmi <= 18.5) {
        this.fitnessGoal = 'under weight'
      }
      else if (this.bmi < 25 && this.bmi > 18.5) {
        this.fitnessGoal = 'healthy weight'

      } else if (this.bmi < 29.9 && this.bmi >= 25) {
        this.fitnessGoal = 'over weight'

      }
      else if (this.bmi > 29.9) {
        this.fitnessGoal = 'obese'

      } return this.fitnessGoal


    })

  }

  dataUpdateForm = this.fb.group({
    height: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    weight: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })


  updateData() {                  // function to update height and weight
    if (this.dataUpdateForm.valid) {
      this.username = localStorage.getItem('currentuser')
      this.ds.updateApi(this.dataUpdateForm.value.height, this.dataUpdateForm.value.weight, this.username).subscribe((result: any) => {
        console.log(result);

        this.myHeight = result.height
        this.myWeight = result.weight
      })

    }
  }

 

  underweight(){
     this.today = new Date().toLocaleDateString()
     this.currentuser = localStorage.getItem('currentuser')
    this.ds.underweightApi(this.currentuser,this.bmi,this.today).subscribe((result:any)=>{
    console.log(result);
    
    })

  }


}
