import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'ejercicio11-Directivas';
  elementHover: string = "";
  style: string = "colorTest";
  classStyle: string = "";

  @ViewChild("appElementHover") appElementHover: ElementRef;
  @ViewChild("myDiv") myDiv: ElementRef;

  ngOnInit(): void {
    console.log('Mensaje...');
  }

  onClick(){
    console.log('Activando el evento onClick()');
  }

  ngAfterViewInit(){
    if(this.appElementHover){
      this.appElementHover.nativeElement.innerHTML += " - Change the background-color";
    }

    if( this.myDiv ){
      this.myDiv.nativeElement.innerHTML = "Nuevo contenido del div";
    }
  }

  defineClassStyle(num: number){
    
    if( num % 2 == 0){
      this.classStyle = this.style;
      if(this.appElementHover){
        this.appElementHover.nativeElement.innerHTML += " - Change the background-color";
      }

      if( this.myDiv ){
        this.myDiv.nativeElement.innerHTML = "Nuevo contenido del div al activar - mouseover";
      }
    }else{
      this.classStyle = "";
      this.myDiv.nativeElement.innerHTML = "Nuevo contenido del div";
    }

    console.log(`El valor del hijo es ${num}`);

  }

}
