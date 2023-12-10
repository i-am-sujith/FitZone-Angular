import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  registerApi(username: any, name: any, password: any, age: any, gender: any, height: any, weight: any,) {
    const body={
      username,
      name,
      password,
      age,
      gender,
      height,
      weight
    }
    return this.http.post('http://localhost:3002/register', body)
  }

  loginApi(username:any,password:any){
    const body={
      username,
      password
    }
    return this.http.post('http://localhost:3002/login',body)
  }

  bmiApi(currentuser:any){
    return this.http.get('http://localhost:3002/bmi/'+currentuser)

  }

  updateApi(height:any,weight:any,username:any){
    const body={
      height,
      weight,
      username
    }
    return this.http.post('http://localhost:3002/update',body)
  }
   
  underweightApi(currentuser:any,bmi:any,today:any){
    const body={
      currentuser,
      bmi,
      today
    }
    return this.http.post('http://localhost:3002/underweight',body)

  }

  underweightTable(currentuser:any){
    return this.http.get('http://localhost:3002/underweightTable/'+currentuser)

  }


}
