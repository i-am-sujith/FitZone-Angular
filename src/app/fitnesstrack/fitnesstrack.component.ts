import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fitnesstrack',
  templateUrl: './fitnesstrack.component.html',
  styleUrls: ['./fitnesstrack.component.css']
})
export class FitnesstrackComponent implements OnInit {
  currentuser: any
  today: any
  bmi: any
  calorieBurned: any
  calorieIntake: any
  workoutType: any
  fitness: any
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {


    this.today = new Date().toLocaleDateString()
    this.currentuser = localStorage.getItem('currentuser')
    console.log(this.currentuser);
    
    this.ds.underweightTable(this.currentuser).subscribe((result: any) => {
      this.fitness = result.message
      console.log(result.message);
  
  
    })
  
  


  }
  



  date() {
    this.today = new Date().toLocaleDateString()

    console.log(this.today)
  }








}



