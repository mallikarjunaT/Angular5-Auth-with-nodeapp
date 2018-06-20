import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  constructor(private http:Http) { }
  login(userdetails) {
    debugger;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://192.168.1.255:8080/hrms/rest/user/authenticate', userdetails, { headers: headers });
    }

    constcenter(){
      return this.http.get('http://192.168.1.255:8080/hrms/rest/costcenter/findAll');
    }

    get_businessunit()
    {
      return this.http.get('http://192.168.1.255:8080/hrms/rest/businessUnit/findAll')
    }
    get_designation()
    {
      return this.http.get('http://192.168.1.255:8080/hrms/rest/Designation/findAllDesignation')
    }
    edit_businessunit(id)
    {
      return this.http.get('http://192.168.1.255:8080/hrms/rest/businessUnit/findByPrimaryKey/' +id)
    }
    getbyidcostcenter(id)
    {
      return this.http.get('http://192.168.1.255:8080/hrms/rest/costcenter/findById/' +id)
    }
    update_businessunit(bid,bunit)
    {
      debugger;
      return this.http.put('http://192.168.1.255:8080/hrms/rest/businessUnit/update/' +bid,bunit)
    }

}
