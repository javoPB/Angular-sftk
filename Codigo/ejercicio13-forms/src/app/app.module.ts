import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewUserReactiveComponent } from './components/new-user-reactive/new-user-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewUserReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
