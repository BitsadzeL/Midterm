import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormsModule} from '@angular/forms';
import { NewUser } from '../new-user';




@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {
  constructor(private fb: FormBuilder) { }


  a:NewUser[]=[];


  applicantForm = this.fb.group({
    firstName: ["",Validators.min(3)],
    lastName: ["", Validators.min(3)],
    dob:[""],
    phoneNumber: ["", Validators.min(9)],
    email:["",Validators.min(8)]
  });

  



  addUser() {}


  
  
  
  
  
}
  




