import { Component, OnInit, Input} from '@angular/core';
import { Products } from 'src/app/models/productsModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
 @Input() cartProduct:Products[]=[];
  total:number=0;
  constructor(public cartService:CartService) { 

  }

  ngOnInit(): void {
    this.cartProduct=this.cartService.getCart();
    this.total=this.cartService.getTotal();
  }

  onParentTotalChange(t:number){
    this.total=t;
  }
  onisEmptyCart():void|boolean{
    if(this.cartService.isEmptyCart()==true){
      return true
    }
  }
  onItemRemoved(){
    this.cartProduct=this.cartService.getCart();
    this.total=this.cartService.getTotal();
    alert(" You have successfully removed this item");
  }

  emptyCart(){
    this.cartService.clearCart();
    alert(" You have successfully emptied your cart");
  }
  
}


