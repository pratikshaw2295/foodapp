import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cart!:Cart;
  constructor( private cs:CartService,private fs:FoodService) { 
    // for termpary cart view
    // let food=this.fs.getAll()
    // cs.addToCart(food[0]),
    // cs.addToCart(food[3]),
    

    this.setCart();
  }

  ngOnInit(): void {
  }
  setCart(){
    this.cart=this.cs.getCart();
  };
  removeFromCart(cartItem:CartItem){
    this.cs.removeFromCart(cartItem.food.id)
    this.setCart();
    // instace laod data
 };
 changeQuantity(cartItem:CartItem,quantityInstring:string){
  const quantity=parseInt(quantityInstring)
  this.cs.changeQuantity(cartItem.food.id,quantity);
  this.setCart()

 }

}
