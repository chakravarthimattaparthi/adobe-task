import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {
  sortType;
  priceRangeInput;
  cartProducts: any = [];
  searchInputKey;
  ngOnChanges() {
    this.cartProducts;
  }
  constructor(private changeDet: ChangeDetectorRef) { }

  ngOnInit() {
  }
  getSort(e) {
    this.sortType = e;
  }
  priceRange(e) {
    this.priceRangeInput = e;
  }
  getCartList(e) {
    let productLIst = e;
    this.cartProducts = [];
    productLIst.forEach(element => {
      this.cartProducts.push(element)
    });
    productLIst = [];
    console.log(this.cartProducts)
  }
  getSearchKey(e) {
    console.log("SEarchdkfsd",e)
    this.searchInputKey = e;
  }
}
