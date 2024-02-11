import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisesModule } from './paises/paises.module';
import { PaisesRoutingModule } from './routing/paises-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaisService } from './servicios/pais.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaisesModule,
    PaisesRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [PaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
