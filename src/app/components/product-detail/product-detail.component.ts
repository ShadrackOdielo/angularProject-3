import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdListService } from 'src/app/services/prod-list.service';
import { Products } from 'src/app/models/productsModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  id!:number;
  prodList:Products[]=[];
  product!: Products;
  quantity:number=0;
  constructor( private route: ActivatedRoute, private prodService: ProdListService, private cartService: CartService ) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })

    this.prodService.getProducts().subscribe(data => {
      this.prodList = data;
      this.prodService.getProductsById().subscribe(() => {
       this.product=this.prodList.filter((item) => item.id === this.id)[0];
      });
    });

  }

  addProdToCart(prod:Products): void {
    this.product.qty=this.quantity;
    this.cartService.addToCart(this.product);
    alert('Item Added to Cart!')
  }
}

