import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {
  constructor() { }

  noPerez(control: FormControl): ErrorValidate | null {
    if( control.value?.toLowerCase() === 'perez' ){
      return {
        noPerez: true
      }
    }

    return null;
  }


  passwordIguales(pass1Name: string, pass2Name: string){
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if( pass1Control.value === pass2Control.value ){
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({noEsIgual: true});
      }
    }
  }

  existeUsuario(control: FormControl): Promise<ErrorValidate | null> | Observable<ErrorValidate | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'strider'){
          resolve({existe: true});
        }else{
          resolve(null);
        }
      }, 3500);
    });
  }

}


interface ErrorValidate {
  [s: string]: boolean;
} 