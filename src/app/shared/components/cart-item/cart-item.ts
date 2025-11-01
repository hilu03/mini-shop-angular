import { Component, input } from '@angular/core';
import { CartItem } from '../../../core/types';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cart-item',
  imports: [MatIcon],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItemComponent {
  cartItem = input.required<CartItem>();
}
