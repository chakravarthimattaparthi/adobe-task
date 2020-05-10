import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from '../../services/service.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartCount;
  count;
  constructor(private router: Router,private service: ServiceService) { }
  ngOnChanges() {
    this.count = this.cartCount.length;
  }
  ngOnInit() {
  }
  goToCart() {
    this.router.navigate(['/cart'])
  }
  ngOnDestroy() {
    localStorage.setItem("cartProducts",JSON.stringify(this.cartCount))
  }
}
