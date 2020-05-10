import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  someRange= [ 0, 1000 ];
  startPrice = 0;
  endPrice = 1000;
  innerWidth;
  showSort :boolean = false;
  @Output() priceRange = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  rangeChanged(event:any){
    console.log(event);
    }
    onChange(e) {
      console.log(e)
      this.startPrice = e[0];
      this.endPrice = e[1];
    }
    apply() {
      this.priceRange.next([this.startPrice,this.endPrice])
    }
    showPopup() {
      this.showSort = true;
    }
    hidepopup() {
      this.showSort = false;
    }
    applyFilter() {
      this.priceRange.next([this.startPrice,this.endPrice])
      this.showSort = false;
    }
}
