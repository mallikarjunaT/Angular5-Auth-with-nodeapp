import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../login/loginservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  businesslist:any;
  businesslst:any;
  nameOfBusinessUnit:any;
  result:any;
  id:any;
  bunit:any;
  list:any;
  nameOfTheCostCenter:any; 
  constructor(private loginservice:LoginserviceService,private router:Router) {

    router.events.subscribe((val) => {
      this.businesscost();
      })
   }
  businesscost()
  { this.loginservice.get_businessunit().subscribe(response=>{
    this.businesslist=response.json().result;

     
  });

  this.loginservice.constcenter().subscribe(res=>{
    this.list = res.json().result;
  });
}

  ngOnInit() {
    this.businesscost();

   }    
    update(id){
     localStorage.setItem('sid',id)
      this.loginservice.edit_businessunit(id).subscribe(response=>{
        this.businesslst=response.json();
        console.log(this.businesslst)
        debugger;
        this.nameOfBusinessUnit=this.businesslst.result.nameOfBusinessUnit;    
       this.nameOfTheCostCenter=this.businesslst.result.costCenterId.nameOfTheCostCenter;
      })
    }
    Save()
    {
      debugger;
      this.bunit={
        "id":this.id,
        "nameOfBusinessUnit":this.nameOfBusinessUnit,
      }
      debugger;
      this.id=localStorage.getItem('sid')
      this.loginservice.update_businessunit(this.id,this.bunit).subscribe(response=>{
        this.result=response.json().result;
      })
    }
  }


