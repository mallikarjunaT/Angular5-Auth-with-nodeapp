import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import { FormControl, } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginserviceService]
})
export class LoginComponent implements OnInit { 
  model: any = {};
  loading = false;
  details:any={}; 
  constructor(private router:Router,
              private loginservice:LoginserviceService) { }
  loginfun(){
    debugger;
    this.loading = true;
    const userdetails='username='+this.model.username+'&password='+this.model.password;
    this.loginservice.login(userdetails).subscribe(res=>{
    this.details = res.json();
    console.log(this.details);
    alert('login successfully')
    this.router.navigateByUrl('dashboard');
    })     
  }
  
  ngOnInit() {
  }
}