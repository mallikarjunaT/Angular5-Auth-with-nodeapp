import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../login/loginservice.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  designationlist :any;
  constructor(private loginserve:LoginserviceService) { }

  ngOnInit() {
    this.loginserve.get_designation().subscribe(response=>{
      this.designationlist=response.json().result;
     console.log(this.designationlist);
    })
  }

}
