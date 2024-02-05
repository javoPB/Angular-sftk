import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {

  constructor(){
  }


}


function suma(dato1: number, dato2: number) {
  return dato1+dato2;
}

let resultadoSuma = function (dato1: number, dato2: number){
  return dato1+dato2;
}

function saludar1(msg1: string, msg2?: string): void {
  console.log(msg1+" "+msg2);
}

function saludar2(msg1: string, msg2: string = ""): void {
  console.log(msg1+" "+msg2);
}

function saludar(...msgs: string[]): void {
  console.log(msgs);
}


let sum = (dato1: number, dato2: number) => dato1+dato2;

suma(12, 18);
resultadoSuma(2,16);


