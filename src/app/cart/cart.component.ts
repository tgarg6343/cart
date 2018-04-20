import { Component, OnInit } from '@angular/core';

import { Http ,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private items = [
      {
        productId: "kkdProd1001",
        imageUrl: "https://fhjghd/djhkd/hf",
        quantity: 5,
        price: 20,
        productName: "Tomato",
        productDesc: "fresh tomatoes"
      },
      {
        productId: "kkdProd103",
        imageUrl: "https://fhjghd/djhkd/hf",
        quantity: 78,
        price: 45,
        productName: "Potato",
        productDesc: "fresh Potato"
      }
    ];

    pushItems=[
      {
          kkkdFarmID: "kkd009",
          farmerName: "Ram",
          productId: "12",
          productName: "bhindi",
          productPrice: 20,
          avgRating: 4.5,
          quantity: 2
      },
      {
          kkkdFarmID: "kkd0044769",
          farmerName: "Ram222",
          productId: "122",
          roductName: "bhind334i",
          productPrice: 20,
          avgRating: 4.5,
          quantity: 2
      },
      {
          kkkdFarmID: "kkd00449",
          farmerName: "Ram222At",
          productId: "12e2",
          productName: "bhind3ddffr34i",
          productPrice: 20,
          avgRating: 4.5,
          quantity: 2
      }
  ];

    x: number;
    constructor(
      private dataService: DataService,
      private cartService: CartServiceService
    ) {}

    //this.x=this.items.reduce(function(sum,cartItem){ return sum+cartItem.price*cartItem.quantity},0);

    ngOnInit() {
      //this.dataService.fetchData();
      this.cartService.fetchOrder().subscribe(data => {
        console.log(data);
      });
    }

    delete(i: number) {
      console.log(i);
      this.items.splice(i, 1);
      this.x = this.items.reduce(function(sum, cartItem) {
        return sum + cartItem.price * cartItem.quantity;
      }, 0);
    }

    checkout() {
      this.pushItems.map(order =>
        this.cartService.addOrder(order).subscribe(data =>
          console.log(order),
          error=> console.log(error)
        )
      );
      addOrder(order){
      return this.http.post("http://10.151.61.130:8019/customer/user/add/cartItem",order,{headers:this.headers}).
      map(data => data.json(),
      error=> error.json());
    }
}
