import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('cartProducts') cartProducts:[];
  @Output() inputKeyFromChild = new EventEmitter();
  cartLength;
  currentUrl;
  constructor( private route: ActivatedRoute,) { }
  ngOnChanges() {
    this.cartLength = this.cartProducts;
  }
  ngOnInit() {
    this.currentUrl = this.route.snapshot.routeConfig.path;
  }
  searchInputKey(e) {
    console.log("key",e);
    this.inputKeyFromChild.next(e);
  }
}
