import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:{name:String , image:String}[]=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getCart()
    console.log(this.products);
  }
  

}
