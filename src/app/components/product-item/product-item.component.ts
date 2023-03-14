import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { Products } from 'src/app/models/productsModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() prod:Products;
  @Output() addCart:EventEmitter<Products>=new EventEmitter; 
  quantity:number=1;
  qty!:number;

  constructor (private cartService: CartService) {
    this.prod={
      id:1,
      name:' ',
      price:0,
      url:'',
      description:' ',
      qty:0
    }
   }
   setQty(e: Event): void {
    this.quantity= parseInt( (e.target as HTMLInputElement).value );
  }

  ngOnInit(): void {
    
  }
  addProdToCart(prod:Products): void {
    this.prod.qty=this.quantity;
    this.cartService.addToCart(this.prod);
    alert('Item Added to Cart!')
  }
}
