import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.css']
})
export class CheckoutOrderComponent implements OnInit{

  checkoutName: string='';
  checkoutTotal!:number;
  constructor (private route: ActivatedRoute) {
  
  }

 ngOnInit(): void {
   this.checkoutName=this.route.snapshot.params['name'];
   this.checkoutTotal=this.route.snapshot.params['total'];
 }

}
