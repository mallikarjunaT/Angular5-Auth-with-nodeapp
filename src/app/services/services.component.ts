import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  list:any;
  listofcostcntr:any;
  nameOfTheCostCenter:any;
  constructor(private loginservice:LoginserviceService) { }
 
  ngOnInit() {
    this.loginservice.constcenter().subscribe(res=>{
      this.list = res.json().result;
      console.log(this.list);
    });
    
  }

  update(id)
  {
    debugger;
    this.loginservice.getbyidcostcenter(id).subscribe(Response=>{
      this.listofcostcntr=Response.json().result;
      this.nameOfTheCostCenter=this.listofcostcntr.nameOfTheCostCenter;
    })
  }

}
