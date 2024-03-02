import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, EventEmitter, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  title = 'Lifecycle';
  data: string = 'Texto enviado desde app-component';

  //@Output() dataParent: EventEmitter<string>  = new EventEmitter<string>(); --> Los Output se manejan mediante un EventEmitter 
  dataParent: EventEmitter<string>  = new EventEmitter<string>();
  divStyle: string = '';

  constructor(){
    console.log(`%c AppComponent:constructor --> Ejecutando el constructor!!`, 'color:green')
  }

  ngAfterViewInit(): void {
    console.log(`%c AppComponent:ngAfterViewInit() --> Ejecutando el método ngAfterViewInit!!`, 'color:orange');
  }

  ngAfterContentChecked(): void {
    console.log(`%c AppComponent:ngAfterContentChecked() --> Ejecutando el método ngAfterContentChecked!!`, 'color: magenta');
  }

  ngAfterContentInit(): void {
    console.log(`%c AppComponent:ngAfterContentInit() --> Ejecutando el método ngAfterContentInit!!`, 'color: lime');
  }

  ngDoCheck(): void {
    console.log(`%c AppComponent:ngDoCheck() --> Ejecutando el método ngDoCheck!!`, 'color: blue');
  }

  ngOnInit(): void {
    console.log(`%c AppComponent:ngOnInit() --> Ejecutando el método ngOnInit!!`, 'color: brown');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`%c AppComponent:ngOnChanges(${changes}) --> Ejecutando el método ngOnChanges!!`, 'color: cyan');
  }


  aplicarColor(): void {
    this.divStyle = "divStyle";
    console.log('Mediante este método se debe aplicar el color al panel...');
  }

}
