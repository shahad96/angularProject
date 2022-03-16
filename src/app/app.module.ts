import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { HomeModule } from './home/home.module';
import { LogInModule } from './login/login.module'
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CartModule,
    HomeModule,
    LogInModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
