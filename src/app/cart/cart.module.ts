import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CartRoutingModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [CartComponent]
})
export class CartModule { }
