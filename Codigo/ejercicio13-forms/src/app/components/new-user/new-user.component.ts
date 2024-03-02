import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent implements OnInit {
  communicationModes: string[];
  genders: string[];


  ngOnInit(): void {
    this.communicationModes = ['Phone', 'Email', 'Whatsapp'];
    this.genders = ['Male', 'Female', 'Other'];
  }

  submit(userForm: any){
    console.log(userForm);
  }

}
