import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params }from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  id:number=0;
  product:{name:String, image:String} = {name:'', image:''};

  constructor(private route:ActivatedRoute,private productsService:ProductsService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:Params) => {
      this.id = params['id'];   
  });

  this.product = this.productsService.getProductDetails(this.id);

}
}
