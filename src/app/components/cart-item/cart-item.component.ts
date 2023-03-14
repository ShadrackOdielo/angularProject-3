import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/models/productsModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{
  @Input() cartItem:Products;
  cartProduct:Products[]=[];
  total:number=0;
  @Output() tots = new EventEmitter();
  @Output() itemRemoved = new EventEmitter();

  
  constructor(private cartService:CartService) { 
    this.cartItem={
      id:1,
      name:' ',
      price:0,
      url:'',
      description:' ',
      qty:0
    }
  }
 
 // ngOnInit(): void {
  //}
  ngOnInit(): void {
    if (!this.cartItem.qty) {
      this.cartItem.qty = 1; // default value set to 1
    }
  }
  
  updateQuantity(){
    this.cartProduct=this.cartService.getCart();
    this.cartService.updateQty(this.cartItem.id,this.cartItem.qty);
    this.total=this.cartService.getTotal();
    return this.total;
  }

  onTotalChange(){
    this.tots.emit(this.updateQuantity);
  }

  onRemoveItem(id:number){
    this.cartService.removeFromCart(id);
    this.itemRemoved.emit();
  }
}
