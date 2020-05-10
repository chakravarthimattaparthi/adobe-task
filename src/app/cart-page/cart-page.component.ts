import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service'

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  productsList;
  totalPrice = 0;
  totalDiscount = 0;
  finalProducts;

  constructor(private service: ServiceService) { }
  
  ngOnInit() {
    this.productsList = JSON.parse(localStorage.getItem('cartProducts'));
    this.finalProducts = JSON.parse(localStorage.getItem('cartProducts'));
    this.finalProducts.forEach(element => {
      this.totalPrice = element.productPrice + this.totalPrice;
      element.discontAmount = element.productPrice * (element.productDiscount / 100);
      element.productCount = 1;
      this.totalDiscount = this.totalDiscount + (element.productPrice * (element.productDiscount / 100))
    });  
  }
  ngOnDestroy() {
    localStorage.removeItem('cartProducts')
  }
  increase(index,type) {
    if(type == "increase") {
      this.finalProducts[index].productCount = this.finalProducts[index].productCount + 1;
      this.totalPrice = this.totalPrice + this.finalProducts[index].productPrice;
      this.totalDiscount = this.totalDiscount + (this.finalProducts[index].productPrice * (this.finalProducts[index].productDiscount / 100))
    } else if(type== 'decrease'){
      if( this.finalProducts[index].productCount != 1) {
        this.finalProducts[index].productCount = this.finalProducts[index].productCount - 1;
        this.totalPrice = this.totalPrice - this.finalProducts[index].productPrice;
        this.totalDiscount = this.totalDiscount - (this.finalProducts[index].productPrice * (this.finalProducts[index].productDiscount / 100))
      }
    } else {
  
      this.totalPrice = this.totalPrice - this.finalProducts[index].productPrice * this.finalProducts[index].productCount;
      this.totalDiscount = this.totalDiscount - (this.finalProducts[index].productPrice * (this.finalProducts[index].productDiscount / 100) * this.finalProducts[index].productCount);
      this.productsList.splice(index,1);
      this.finalProducts.splice(index,1);
    }
    
  }
  getSearchKey(key) {
      if(key != "") {
        this.finalProducts = this.productsList.filter(element => element.productName.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      } else {
        this.finalProducts = this.productsList;
      }
    }
}
