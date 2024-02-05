import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  @Input() dataParent: string='';

  constructor(){
    console.log(`AppComponent:constructor --> Ejecutando el constructor!!`)
  }

  ngAfterViewInit(): void {
    console.log(`ChildComponent:ngAfterViewInit() --> Ejecutando el método ngAfterViewInit!!`);
  }

  ngAfterContentChecked(): void {
    console.log(`ChildComponent:ngAfterContentChecked() --> Ejecutando el método ngAfterContentChecked!!`);
  }

  ngAfterContentInit(): void {
    console.log(`ChildComponent:ngAfterContentInit() --> Ejecutando el método ngAfterContentInit!!`);
  }

  ngDoCheck(): void {
    console.log(`ChildComponent:ngDoCheck() --> Ejecutando el método ngDoCheck!!`);
  }

  ngOnInit(): void {
    console.log(`ChildComponent:ngOnInit() --> Ejecutando el método ngOnInit!!`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ChildComponent:ngOnChanges(${changes}) --> Ejecutando el método ngOnChanges!!`);
  }
}
