import { Component, Input } from '@angular/core';
import { ParentUser } from '../parent-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    @Input() parentusers: any;
    message = 'Array from parent component';
  

}
