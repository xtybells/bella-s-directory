import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})

export class ContactsPageComponent {
  displayedColumns: string[] = ['position', 'name', 'phoneNumber', 'email'];
  phoneNumber = ""
  name = ""
  email = ""
  popUpForm = false
  addNewContactButton = true
  save = true
  searchBar: any 
  

  addressArray = [
    { name: 'Christy', phoneNumber: "08062190101", email: 'christyilo@gmail.com' },
    { name: 'Amin', phoneNumber: "080876543245", email: 'aminbalo@gmail.com' },
    { name: 'Ifeoma', phoneNumber: "08076543289", email: 'ifeomamazi@gmail.com' },
    { name: 'Emeka', phoneNumber: "090987654376", email: 'mazicode@gmail.com' },
  ];

    //saveButton
  openDialog() {
    this.popUpForm = true
    this.addNewContactButton = false
  }

    //addContactButton
  addNewContact() {
    let address = { name: this.name, phoneNumber: this.phoneNumber, email: this.email }
    this.addressArray.push(address)
    this.addressArray = JSON.parse(JSON.stringify(this.addressArray))
    console.log(this.addressArray)
    this.save = false
    this.popUpForm = false
    this.name = ""
    this.phoneNumber = ""
    this.email = ""
    this.save = true
    this.addNewContactButton = true
  }

    //searchBar
  search(){

    for(let x = 0; x < this.addressArray.length; x ++){
      if(this.searchBar === this.addressArray[x].name){
        console.log(this.addressArray[x])
        this.addressArray = [this.addressArray[x]]
      }
    }
  }


}
