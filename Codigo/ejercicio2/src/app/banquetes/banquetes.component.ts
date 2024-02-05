import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Banquete, Menu, TipoBanquete } from './banquete';
import { Evento, Ubicacion } from './evento';
import { Pago } from './pago';

@Component({
  selector: 'app-banquetes',
  templateUrl: './banquetes.component.html',
  styleUrl: './banquetes.component.css'
})
export class BanquetesComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    let ubicacion: Ubicacion = {
      calle: "Calle Pino",
      numero: "8",
      colonia: "Bosques del sur",
      ciudad: "Madera",
      referencias: "Junto a Pino de navidad"      
    }

    let cliente = new Cliente("Javier", true, true);
    let banquete = new Banquete(TipoBanquete.COMIDA, Menu.INFORMA);
    let evento = new Evento("31/01/2024 15:00:00", 4, ubicacion);
    let pago = new Pago(4000, 50, 2000);
    

    cliente.mostrarInformacion();
    banquete.mostrarInformacion();
    evento.mostrarInformacion();
    pago.mostrarInformacion();
    console.log("El área calculada es: " + this.calcularArea(2));
  }

  calcularArea = (lado: number): number => lado * lado;

}
