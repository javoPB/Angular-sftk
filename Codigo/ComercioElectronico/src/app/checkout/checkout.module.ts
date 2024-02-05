import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';



@NgModule({
  declarations: [
    AddressComponent,
    PaymentComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
