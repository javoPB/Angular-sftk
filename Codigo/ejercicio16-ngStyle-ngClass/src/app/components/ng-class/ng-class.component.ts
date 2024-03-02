import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent implements OnInit {
  alerta: string = 'alert alert-danger';
  loading: boolean = false;

  propiedades: Propiedades = {
    danger: false,
  }

  constructor(){}

  ngOnInit(): void {
    
  }

  ejecutar(){
    this.loading = true;

    setTimeout(() => this.loading = false, 3000);
  }


}


interface Propiedades {
  danger: boolean;
}