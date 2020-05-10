import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { ServiceService } from "../../services/service.service";
import { element } from 'protractor';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  productsList :any = [];
  finalProducts : any = [];
  cartProducts: any = [];
  startingPrice;
  endingPrice;


  @Input() sortType;
  @Input() priceRange;
  @Input() searchInputKey;
  @Output() addToCartList = new EventEmitter(); 

  constructor(private productService: ServiceService) { }
  ngOnChanges() {
    if(this.sortType) {

      this.sortProducts(this.sortType);
    }
    
    if(this.priceRange) {
      this.filterProducts();
    }
    if(this.searchInputKey) {
      this.search()
    }
   
  }
  ngOnInit() {
    this.productService.getProductdetails().subscribe((data) => {
      this.productsList = data;
      this.finalProducts = data;
      this.sortProducts("high");
    }) 
  }

  addToCart(product) {
    this.cartProducts.push(product);
    this.addToCartList.next(this.cartProducts);
  }

  filterProducts() {
    this.startingPrice = this.priceRange[0];
    this.endingPrice = this.priceRange[1];
    console.log("Price",this.startingPrice,this.endingPrice)
    this.finalProducts = this.productsList.filter(element =>  {
      if(element.productPrice <= this.endingPrice && element.productPrice >= this.startingPrice){
        return element;
      }
    });
  }
  searchProducts() {
    let res = this.productsList.filter(o=>Object.values(o.productName).includes(this.searchInputKey))
    console.log("res",res)
  }
  search(){
    if(this.searchInputKey != "") {
      this.finalProducts = this.productsList.filter(element => element.productName.toLowerCase().indexOf(this.searchInputKey.toLowerCase()) !== -1)
    } else {
      this.finalProducts = this.productsList;
    }
  }
  sortProducts(sortOrder) {
      this.finalProducts = this.productsList.sort((a,b)=> {
        if(sortOrder == 'high') {
          return b.productPrice-a.productPrice;
        } else if(sortOrder == 'low') {
          return a.productPrice-b.productPrice;
        }if(sortOrder == 'dicount') {
          return a.productDiscount-b.productDiscount;
        }
       
      })
  }
  
}
