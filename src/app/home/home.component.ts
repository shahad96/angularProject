import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    name:string = 'book';

   products:{name:String , image:String}[]=[];

  constructor(private productsService:ProductsService,
    private router:Router, private route:ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {

    // this.http.get('http://localhost:8080/users').subscribe(product => {
    //   console.log(product);
    // });

    // this.http.post('http://localhost:8080/users',
    // { username: "userName",
    //   password: "password",
    //   role:"student"
    // }).subscribe(product => {
    //   console.log(product);
    // });

    this.http.post('http://localhost:8080/products',
    { name: "shahad",
      image: "shasd"
    }).subscribe(product => {
      console.log(product);
    });

    this.products = this.productsService.getProducts();    
  }

  details(i:number){
    this.router.navigate(['/details'],{queryParams: {id : i}});
    // {relativeTo: this.route}
    // console.log(i); 
  }

  addToCart(i:number){
    this.productsService.addToCart(i);

    this.showPopUp(i)
    // this.http.delete(`http://localhost:8080/products/${i}`).subscribe(product => {
    //   console.log(product);
    // });
  
  }
  private  showPopUp(i:number){

  }

}
