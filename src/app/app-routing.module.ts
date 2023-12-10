import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PersonalworkoutComponent } from './personalworkout/personalworkout.component';
import { NutritionplanComponent } from './nutritionplan/nutritionplan.component';
import { FitnesstrackComponent } from './fitnesstrack/fitnesstrack.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'personalworkout', component: PersonalworkoutComponent },
  { path: 'nutritionplan', component: NutritionplanComponent },
  { path: 'fitnesstrack', component: FitnesstrackComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
