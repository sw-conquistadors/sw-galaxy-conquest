import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},

  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
