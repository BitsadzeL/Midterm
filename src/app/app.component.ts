import { Component, Input } from '@angular/core';
import { ParentUser } from './parent-user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Luka-Bitsadze';

  usersarr = [
    {
      name: "luka",
      lastName: "Bitsadze",
      age: 20
    },

    {
      name: "leo",
      lastName: "Messi",
      age: 36
    },

    {
      name: "asdgdas",
      lastName: "asdgasd",
      age: 21
    },

    {
      name: "Amirna",
      lastName: "gamrkei",
      age: 18
    },


    {
      name: "Franco",
      lastName: "Armani",
      age: 20
    },

  ]




  parentuserarr:ParentUser[]=[{
    id:'1',
    firstName:"John",
    lastName:"kenedy",
    dob:"01-18-1974",
    phoneNumber:"+1813208000540",
    email:"jk@gmail.com"

  }]

  @Input() users: any;
}
