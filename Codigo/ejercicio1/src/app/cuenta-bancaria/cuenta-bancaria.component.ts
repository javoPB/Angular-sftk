import { Component, OnInit } from '@angular/core';
import { CuentaBancaria } from './cuenta-bancaria';

@Component({
  selector: 'app-cuenta-bancaria',
  templateUrl: './cuenta-bancaria.component.html',
  styleUrl: './cuenta-bancaria.component.css'
})
export class CuentaBancariaComponent implements OnInit {
  ngOnInit(): void {
    let cuenta = new CuentaBancaria("Javier", 10000);
        
    cuenta.informacionCuenta();
    cuenta.depositar(200);
    cuenta.retirar(500);
    //throw new Error('Method not implemented.');
  }
}
