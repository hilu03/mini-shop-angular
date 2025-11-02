import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss',
})
export class CartSummary {
  onCheckout() {
    alert('Checkout functionality is not implemented yet.');
  }
  readonly subtotal = input.required<number>();
  readonly discount = input<number>(0);
  readonly shippingFee = input<number>(0);

  get total(): number {
    return this.subtotal() - this.discount() + this.shippingFee();
  }
}
