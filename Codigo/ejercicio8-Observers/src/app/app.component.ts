import { Component, OnInit } from '@angular/core';
import { filter, map, of, reduce, toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ejercicio8-Observers';

  constructor(){}

  ngOnInit(): void {
    console.log("Programación Funcional - Arreglos");
    let data = [1,2,3,4,5,6,7,8,9,10];
    console.log(data.map(x => x*10));
    console.log(data.map(x => x*10).filter(x => x>50));
    console.log(data.map(x => x*10).filter(x => x>50).reduce((acc, x) => acc+x, 0));

    console.log("Programación Funcional -Observers");
    let dataObservers = of(1,2,3,4,5,6,7,8,9,10);
    //Nos suscribimos al Observer y consumimos la información con forme fue llegando al Observer
    dataObservers.subscribe(x => console.log(`dataObservers: ${x}`));
    //Mediante pipe obtenemos un Observer de tipo Array (Pipe a partir de un Observer obtiene otro Observer)
    dataObservers.pipe(toArray()).subscribe(result => console.log(`dataObservers-toArray(): ${result}`));
    //Mediante el primer pipe obtenemos un Observer de tipo map
    dataObservers.pipe( map(x => x*10)).subscribe(element => console.log(`dataObservers-map(): ${element}`));
    //Mediante el primer pipe obtenemos un Observer de tipo map, en el segundo pipe obtenemos un observer con valores mayores a 50
    dataObservers.pipe( map(x => x*10)).pipe(filter(x => x > 50)).subscribe(element => console.log(`dataObservers-map()-filter(): ${element}`));
    //Mediante el primer pipe obtenemos un Observer de tipo map, en el segundo pipe obtenemos un observer con valores mayores a 50, con el tercer pipe obtenemos un Observer en el que se acumula el resultado de los valores mayores a 50
    dataObservers.pipe( map(x => x*10)).pipe(filter(x => x > 50)).pipe(reduce((acc, value) => acc+value, 0)).subscribe(element => console.log(`dataObservers-map()-filter()-recude(): ${element}`));


  
  }
  
}
