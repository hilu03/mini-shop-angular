import { Injectable, signal } from '@angular/core';
import { AuthUser } from '../../types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<AuthUser | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    // try load from localStorage on start
    const raw = localStorage.getItem('mini-shop-auth');
    if (raw) {
      this.currentUser.set(JSON.parse(raw));
    }
  }

  login(email: string, password: string): Promise<AuthUser> {
    // simple mock: accept any non-empty password for demo
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !password) {
          reject(new Error('Invalid credentials'));
          return;
        }
        const user: AuthUser = {
          email,
          name: email.split('@')[0],
          token: 'mock-jwt-token-' + Date.now()
        };
        this.currentUser.set(user);
        localStorage.setItem('mini-shop-auth', JSON.stringify(user));
        resolve(user);
      }, 700); // fake delay
    });
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('mini-shop-auth');
  }

  isLoggedIn() {
    return !!this.currentUser();
  }
}
