import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DetailsComponent } from './details/details.component';

const routes:Routes =[
{path:'home', component: HomeComponent
// ,pathMatch: 'full'
// ,children: [{path: ':id', component: DetailsComponent}]
}
,{path: 'details', component: DetailsComponent}
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
