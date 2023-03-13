import { Injectable } from '@angular/core';
import { Products } from '../models/productsModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  CartProdList:Products[]=[];
  myStorage = window.localStorage;
  constructor() { }

  getCart(){
    const getProduct = this.myStorage.getItem('cart')
    return getProduct? JSON.parse(getProduct): [];
  }
  
  removeFromCart(id:number){
    let prodIndex=this.CartProdList.findIndex(prod=>prod.id==id);
    this.CartProdList.splice(prodIndex,1);
    this.myStorage.setItem('cart', JSON.stringify(this.CartProdList));
  }

  getTotal(): number {
    let sum = 0;
    this.CartProdList=this.getCart();
    sum=this.CartProdList.reduce((acc,item)=>acc+(item.qty*item.price),0)
    return sum;
  }

  addToCart(product:Products){
  let prodItem:Products|undefined;

  prodItem=this.CartProdList.find(prod=>prod.id==product.id);
  if(prodItem){
  let prodIndex=this.CartProdList.findIndex(prod=>prod.id==product.id);
  this.CartProdList[prodIndex].qty+=product.qty;
  }else{
  this.CartProdList.push(product);
  }
  this.myStorage.setItem('cart', JSON.stringify(this.CartProdList));
  }

  updateQty(prodId:number,qty:number) {
  let prodIndex=this.CartProdList.findIndex(prod=>prod.id==prodId);
    let prodItem=this.CartProdList.find(prod=>prod.id==prodId);
    if(prodItem){
      prodItem.qty=qty;
      this.CartProdList[prodIndex].qty=prodItem.qty;
    }
  this.myStorage.setItem('cart', JSON.stringify(this.CartProdList));
  }

  clearCart(): void{
    this.myStorage.clear();
  }
  isEmptyCart(): boolean {
    if(this.myStorage.length ==0){
      return true
    }else{
      return false
    }
  }
 
  checkCardLength(num:number) : boolean|void{
    const card=num.toString();
    if(card.length<16){
      return true
    }
  }
}
