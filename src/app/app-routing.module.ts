import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ChildServiceComponent } from './child-service/child-service.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
   children:[{path:'costcenter',component:ServicesComponent,
    children:[{path:'chil-service',component:ChildServiceComponent}]
  },
  {path:'businessunit',component:ContactComponent},
  {path:'designation',component:AboutComponent},
  
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
