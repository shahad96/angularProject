export class ProductsService{

    private products:{name:String , image:String}[]=[
        {name:'The book of hope' , image:'https://m.media-amazon.com/images/I/517rRKKFBDL.jpg'},
        {name:'IDEAS' , image:'https://images-na.ssl-images-amazon.com/images/I/51gSlviWoFL.jpg'},
        {name:'The BOOK' , image:'https://images-na.ssl-images-amazon.com/images/I/41p4QN6YqeL._SX329_BO1,204,203,200_.jpg'},
        {name:'Book of nights' , image:'https://images-na.ssl-images-amazon.com/images/I/91bm8DI1FgL.jpg'},
    ];

    private cart:number[]=[];

    getProducts(){
        return this.products;
    }

    getProductDetails(i:number){
        return this.products[i];
    }

    addToCart(i:number){
        this.cart.push(i);
    }

    getCart(){
        const cartProducts:{name:String , image:String}[]=[];

        for (let i = 0; i < this.cart.length; i++) {
            cartProducts.push(this.products[this.cart[i]]); 
        }

        return cartProducts;

    }
}