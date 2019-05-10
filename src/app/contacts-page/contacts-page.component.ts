import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {
  name = ""
  phoneNumber = ""
  email = ""
  searchBar = ""

  addressArray: any = [
    { phoneNumber: "0806217654", name: "Amin", email: "aminBalo@getMaxListeners.com" },
    { phoneNumber: "08097654387", name: "Emeka", email: "emekanwa@gmail.com" },
    { phoneNumber: "0986432568", name: "Ifeoma", email: "ifygbeke@gmail.com" },
    { phoneNumber: "0986432568", name: "christy", email: "christyilo@gmail.com" }

  ]

  constructor() { }

  ngOnInit() {
  }

  addNewContact() {
    let address = {phoneNumber: this.phoneNumber, name: this.name, email: this.email}
    this.addressArray.push(address)
  }
}
