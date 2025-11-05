import { Component, computed, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { CartService } from '../../../core/services/cart/cart-service';
import { AuthService } from '../../../core/services/auth/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [MatIcon, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private cartService = inject(CartService);
  private authService = inject(AuthService);

  readonly cartItemQuantity = computed(() => this.cartService.totalQuantity);
  readonly isLoggedIn = computed(() => this.authService.isLoggedIn());
  readonly currentUser = computed(() => this.authService.currentUser());
  open = signal(false);

  toggleMenu() {
    this.open.set(!this.open());
  }

  onLogout() {
    this.authService.logout();
  }
}
