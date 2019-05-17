import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   phoneNumber: string;
//   email: string;
// }

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

  openDialog() {
    this.popUpForm = true
    this.addNewContactButton = false
  }

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

  search(){

    for(let x = 0; x < this.addressArray.length; x ++){
      if(this.searchBar === this.addressArray[x].name){
        console.log(this.addressArray[x])

      }
    }
  }


}


// import { Component, OnInit } from '@angular/core';
// import { Contacts } from '../contacts';

// @Component({
//   selector: 'app-contacts-page',
//   templateUrl: './contacts-page.component.html',
//   styleUrls: ['./contacts-page.component.css']
// })
// export class ContactsPageComponent implements OnInit {
//   name = ""
//   phoneNumber = ""
//   email = ""
//   searchBar = ""

//   addressArray: any = [
//     { phoneNumber: "0806217654", name: "Amin", email: "aminBalo@getMaxListeners.com" },
//     { phoneNumber: "08097654387", name: "Emeka", email: "emekanwa@gmail.com" },
//     { phoneNumber: "0986432568", name: "Ifeoma", email: "ifygbeke@gmail.com" },
//     { phoneNumber: "0986432568", name: "christy", email: "christyilo@gmail.com" }

//   ]

//   constructor() { }

//   ngOnInit() {
//   }

//   
// 
