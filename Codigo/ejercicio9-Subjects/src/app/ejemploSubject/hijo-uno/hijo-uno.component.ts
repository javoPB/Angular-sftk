import { Component, OnInit } from '@angular/core';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-hijo-uno',
  templateUrl: './hijo-uno.component.html',
  styleUrl: './hijo-uno.component.css'
})
export class HijoUnoComponent implements OnInit {
  valor: string; 

  constructor(private paisService: PaisServiceService){
  }
  
  ngOnInit(): void {
    this.paisService.cambiosMiValor.subscribe(result => {
      this.valor = result;
    });
  }

  cambiarValorUno(){
    this.paisService.valor = "miValorUno";
  }

}
