import { Component, OnInit ,Output} from '@angular/core';
import {EventEmitter} from '@angular/core'


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  innerWidth;
  showSort :boolean = false;
  @Output() savedChanges = new EventEmitter(); 
  sortType = 'high';
  inputValue;
  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  showPopup() {
    this.showSort = true;
  }
  hidepopup() {
    this.showSort = false;
  }
  sort(sortType) {
    this.sortType = sortType;
    this.savedChanges.next(sortType)
  }
  getValue(e) {
    console.log(e.target.value)
    this.inputValue = e.target.value;
  
  }
  applySort() {
    if(this.inputValue == 1) {
      this.sort("high")
    } else if(this.inputValue == 2) {
      this.sort("low")
    } else if(this.inputValue == 3) {
      this.sort("discount")
    }
    this.showSort = false;
  }
}
