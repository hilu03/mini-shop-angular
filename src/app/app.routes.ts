import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Cart } from './features/cart/cart';
import { NotFound } from './features/not-found/not-found';
import { MainLayout } from './shared/layouts/main-layout/main-layout';
import { EmptyLayout } from './shared/layouts/empty-layout/empty-layout';
import { Login } from './features/login/login';
import { authGuard } from './core/guards/auth/auth-guard';
import { guestGuard } from './core/guards/guest/guest-guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'cart', component: Cart, canActivate: [authGuard] },
    ],
  },
  {
    path: '',
    component: EmptyLayout,
    children: [
      { path: 'login', component: Login, canActivate: [guestGuard] },
      { path: '**', component: NotFound },
    ],
  },
];
