import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  departments

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDepartments()
  }

  responseMethod = (data) => {
    this.departments = data.result
    console.log(data)
  }

  errorMethod = (error) => {
    console.log(error)
  }

  getDepartments() {
    this.http.get('https://smart-clinic.smartapps.com.ng/v1/department').subscribe(
      this.responseMethod,
      this.errorMethod
      )
  }

}
