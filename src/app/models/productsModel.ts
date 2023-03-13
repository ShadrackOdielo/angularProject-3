export class Products{
    id: number;
    name: string;
    price:number;
    url:string;
    description:string;
    qty:number;
    
    constructor() {
      this.qty=0
        this.id=1;
        this.name=' ';
        this.url='';
        this.price=0;
        this.description=' ';
      }
}