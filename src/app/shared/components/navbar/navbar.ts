import { Component, computed, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { CartService } from '../../../core/services/cart-service';

@Component({
  selector: 'app-navbar',
  imports: [MatIcon, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private cartService = inject(CartService);

  readonly cartItemQuantity = computed(() => this.cartService.totalQuantity);
}
