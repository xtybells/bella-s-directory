import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { nextContext } from '@angular/core/src/render3';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  departments
  chats
  newMessage = {
    avatar: "im4.jpg",
    msg: "welcome to my chat group",
    nickname: "baloxty",
    sender_id: "59ad58b9a0f6cf030ddea4f2"
  }
  page = 0
  limit = 3

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDepartments()
    this.getChats()
  }

  responseMethod = (data) => {
    this.departments = data.result
    // console.log(data)
  }

  chatMethod = (chat) => {
  this.chats = chat
  console.log(chat)
  }

  errorMethod = (error) => {
    console.log(error)
  }

  getDepartments() {
    this.http.get(`https://smart-clinic.smartapps.com.ng/v1/department?page=${this.page}&limit=${this.limit}`).subscribe(
      this.responseMethod,
      this.errorMethod
    );
  }

  nextPage(){
    this.page = this.page + 1
    this.getDepartments()
  }


  getChats() {
    this.http.get('https://bashed.herokuapp.com/router/messages').subscribe(
      this.chatMethod,
      this.errorMethod
    )
  }

  postNewMessage(){
    this.http.post('https://bashed.herokuapp.com/router/postmsg', this.newMessage).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
