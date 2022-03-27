import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { ImageBrightness } from '../image-directive';
import { SecoundPipe } from '../secound.pips';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ImageBrightness,
    SecoundPipe
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
