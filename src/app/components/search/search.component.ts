import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  showSearchInput:boolean = false;
  @Output() searchInputKey = new EventEmitter();
  search = "Search";
  searchValue;
  
  constructor() { }

  ngOnInit() {
  }
  showInput() {
    this.showSearchInput = !this.showSearchInput
  }
  getInputValue(e) {
    this.searchValue = e.target.value;
    this.searchInputKey.next(this.searchValue);
  } 
}
