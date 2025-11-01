import { Component } from '@angular/core';
import { CartItemComponent } from '../../shared/components/cart-item/cart-item';
import { CartItem, Product } from '../../core/types';
import { CartSummary } from '../../shared/components/cart-summary/cart-summary';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, CartSummary],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartItems: CartItem[] = [
    {
      product: {
        id: 1,
        name: 'Angular T-Shirt',
        price: 25,
        image: 'https://picsum.photos/640/480',
      } as Product,
      quantity: 2,
    },
    {
      product: {
        id: 2,
        name: 'Reactive Mug',
        price: 15,
        image: 'https://picsum.photos/640/480',
      } as Product,
      quantity: 1,
    },
  ];

  get subtotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  discount = 5;
  shippingFee = 4.99;


}
