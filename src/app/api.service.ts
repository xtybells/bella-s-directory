import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://bashed.herokuapp.com/router/'
  smartUrl = 'https://smart-clinic.smartapps.com.ng/v1/'

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get(this.baseUrl + url)
  }

  postData(url: string, data: any){
    return this.http.post(this.baseUrl + url, data)
  }

  getSmartData(url: string){
    return this.http.get(this.smartUrl + url)
  }
}