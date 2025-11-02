import { Component, computed, inject } from '@angular/core';
import { CartItemComponent } from '../../shared/components/cart-item/cart-item';
import { CartSummary } from '../../shared/components/cart-summary/cart-summary';
import { CartService } from '../../core/services/cart-service';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, CartSummary],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  private cartService = inject(CartService);
  readonly cartItems = computed(() => this.cartService.items());

  get subtotal() {
    return this.cartItems().reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  discount = this.cartItems().length > 0 ? 5.0 : 0.0;
  shippingFee = this.cartItems().length > 0 ? 10.0 : 0.0;
}
