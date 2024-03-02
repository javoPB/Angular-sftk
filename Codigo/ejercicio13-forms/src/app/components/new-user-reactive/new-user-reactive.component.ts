import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidations } from '../../clases/custom-validations';

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrl: './new-user-reactive.component.css'
})
export class NewUserReactiveComponent implements OnInit {
  userFormReactive: FormGroup;
  hobbies: FormArray;


  ngOnInit(): void {
    this.userFormReactive = new FormGroup({
      name: new FormControl('name', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      email: new FormControl('email', CustomValidations.unique),
      address: new FormGroup({
        street: new FormControl('street'),
        city: new FormControl('city'),
        zipcode: new FormControl('zipcode'), 
      }),
      hobbies: new FormArray([this.createHobby()])
    });

    console.log(this.userFormReactive);
  }

  addHobby(){
    this.hobbies = this.userFormReactive.get('hobbies') as FormArray;
    this.hobbies.push(this.createHobby());
  }

  createHobby(): FormGroup {
    return new FormGroup({
      name: new FormControl(), 
    });
  }

  get userFormReactiveGetHobbies () {
    return this.userFormReactive.get('hobbies') as FormArray;
  }
  
  submit(){
    console.log(this.userFormReactive);
  }

  resetForm(){
    this.userFormReactive.reset();
  }
}
