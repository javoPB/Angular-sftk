import { Component, OnInit } from '@angular/core';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-hijo-dos',
  templateUrl: './hijo-dos.component.html',
  styleUrl: './hijo-dos.component.css'
})
export class HijoDosComponent implements OnInit {
  valor: string; 

  constructor(private paisService: PaisServiceService){
  }
  
  ngOnInit(): void {
    this.paisService.cambiosMiValor.subscribe(result => {
      this.valor = result;
    });
  }

  cambiarValorDos(){
    this.paisService.valor = "miValorDos";
  }
}
