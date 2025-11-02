import { Component, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Product } from '../../../core/types';
import { CartService } from '../../../core/services/cart-service';

@Component({
  selector: 'app-product-card',
  imports: [MatIcon],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly product = input.required<Product>();
  private cartService = inject(CartService);
  addToCart() {
    this.cartService.addItem(this.product());
  }
}
