import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   products:{name:String , image:String}[]=[];

  constructor(private productsService:ProductsService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.products = this.productsService.getProducts();    
  }

  details(i:number){
    this.router.navigate(['/details'],{queryParams: {id : i}});
    // {relativeTo: this.route}
    // console.log(i); 
  }

  addToCart(i:number){
    this.productsService.addToCart(i);
  }

}
