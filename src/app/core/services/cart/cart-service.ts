import { Injectable, signal } from '@angular/core';
import { CartItem, Product } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly items = signal<CartItem[]>([]);

  get totalQuantity() {
    return this.items().reduce((sum, item) => sum + item.quantity, 0);
  }

  addItem(product: Product) {
    const current = this.items();
    const existing = current.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      current.push({ product, quantity: 1 });
    }
    this.items.set([...current]); // trigger update
  }

  updateItemQuantity(productId: number, quantity: number) {
    const current = this.items();
    const item = current.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        // Remove item if quantity is zero or less
        this.removeItem(productId);
        return;
      }
      this.items.set([...current]); // trigger update
    }
  }

  removeItem(productId: number) {
    this.items.set(this.items().filter(i => i.product.id !== productId));
  }

  clear() {
    this.items.set([]);
  }
}
