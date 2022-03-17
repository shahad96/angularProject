import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { ImageBrightness } from '../image-directive';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ImageBrightness
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
