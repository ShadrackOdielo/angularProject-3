import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit{
  name:string='';
  person:string='';
  num!:number;
  @Input() total:number=0;
  addr:string='';

  constructor (private router: Router, private cartService: CartService) {
  
   }

  ngOnInit(): void {
    
  }
 
  checkCardLength(num:number) : string|void{
    if(this.cartService.checkCardLength(num)==true){
      return 'error';
    };
  }
  onSubmit():void{
    this.router.navigate(["/confirm",{name:this.name, total:this.total}]);
  }
}
