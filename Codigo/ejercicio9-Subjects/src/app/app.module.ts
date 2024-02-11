import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './paises/agregar/agregar.component';
import { BuscarComponent } from './paises/buscar/buscar.component';
import { EditarComponent } from './paises/editar/editar.component';
import { EliminarComponent } from './paises/eliminar/eliminar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaisesRoutingModule } from './routing/paises-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PadreComponent } from './ejemploSubject/padre/padre.component';
import { HijoUnoComponent } from './ejemploSubject/hijo-uno/hijo-uno.component';
import { HijoDosComponent } from './ejemploSubject/hijo-dos/hijo-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    BuscarComponent,
    EditarComponent,
    EliminarComponent,
    PadreComponent,
    HijoUnoComponent,
    HijoDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PaisesRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
