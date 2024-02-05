import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteDeEjemploComponent } from './componente-de-ejemplo/componente-de-ejemplo.component';
import { DirectivaDeEjemploDirective } from './directiva-de-ejemplo.directive';
import { PipeDeEjemploPipe } from './pipe-de-ejemplo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteDeEjemploComponent,
    DirectivaDeEjemploDirective,
    PipeDeEjemploPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
