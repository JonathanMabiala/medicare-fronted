import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(theCartItem: CartItem) {

    // Check if we already have
    let alreadyExistInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItems.length > 0) {
    // find the item in the cart

    existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id);
      

    // Check if we found it
    alreadyExistInCart = (existingCartItem != undefined);
    }



   

    if (alreadyExistInCart) {
      // increment the quantity
      existingCartItem.quantity++;
    } else {
      // Just add the item
      this.cartItems.push(theCartItem);
    }

    // compute price and quantity
    this.computeCartTotals();
  }

  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;
    
    if(theCartItem.quantity === 0){
      this.remove(theCartItem);

    }else{
      this.computeCartTotals();
    }
  }
  remove(theCartItem: CartItem) {
   // get index of item in the array 

   const itemIndex = this.cartItems.findIndex( 
     tempCartItem => tempCartItem.id === theCartItem.id);

   //

   if (itemIndex > -1){
     this.cartItems.splice(itemIndex, 1 );

     this.computeCartTotals();
   }


  }


  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }
    //publish the new values 

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    //Log cart data just for debugging purposes
    this.logCatData(totalPriceValue, totalQuantityValue);
  }
  logCatData(totalPriceValue: number, totalQuantityValue: number) {
    console.log('contents');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.price;
      console.log(`name: ${tempCartItem.name}, 
     quantity=${tempCartItem.quantity}, 
     unitprice=${tempCartItem.price}, 
     subtotalPrice=${subTotalPrice}`);

      console.log(`totalPrice: ${totalPriceValue.toFixed(2)},
     totalQuantity: ${totalQuantityValue}`);
      console.log('------------------------------------')
    }
  }
}
