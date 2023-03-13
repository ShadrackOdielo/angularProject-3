import { Component, OnInit } from '@angular/core';
import { ProdListService } from 'src/app/services/prod-list.service';
import { Products } from 'src/app/models/productsModel';
// import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit{
  productlist: Products[]=[];
  // cartProduct!: Products;
  qty:number=0;
  constructor(private prodService: ProdListService) { 

  }

  ngOnInit(): void {
    this.prodService.getProducts().subscribe(data => {
      this.productlist = data;
    });
  }
}
