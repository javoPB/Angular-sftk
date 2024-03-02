import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent implements OnInit {
  empleadoReactiveForm: FormGroup;

  ngOnInit(): void {
      this.empleadoReactiveForm = new FormGroup({
        id: new FormControl('id'),
        name: new FormControl('name', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
        username: new FormControl('username'),
        email: new FormControl('email'),
        phone: new FormControl('phone'),
        website: new FormControl('website'),
        address: new FormGroup({
            street: new FormControl('street'),
            suite: new FormControl('suite'),
            city: new FormControl('city'),
            zipcode: new FormControl('zipcode'),
            geo: new FormGroup({
                lat: new FormControl('lat'),
                lng: new FormControl('lng')
            })
        }),
        company: new FormGroup({
            name: new FormControl('name'),
            chatphrase: new FormControl('chatphrase'),
            bs: new FormControl('bs'),
        })
      });

      console.log(this.empleadoReactiveForm);
  }

  submit(){

  }

}
