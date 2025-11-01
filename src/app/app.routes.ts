import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Cart } from './features/cart/cart';
import { NotFound } from './features/not-found/not-found';
import { MainLayout } from './shared/layouts/main-layout/main-layout';
import { EmptyLayout } from './shared/layouts/empty-layout/empty-layout';
import { Login } from './features/login/login';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'cart', component: Cart },
    ],
  },
  {
    path: '',
    component: EmptyLayout,
    children: [
      { path: 'login', component: Login },
      { path: '**', component: NotFound },
    ],
  },
];
