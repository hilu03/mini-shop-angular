import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Cart } from './features/cart/cart';
import { NotFound } from './not-found/not-found';
import { MainLayout } from './shared/layouts/main-layout/main-layout';
import { EmptyLayout } from './shared/layouts/empty-layout/empty-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      // thêm các route khác ở đây, ví dụ:
      // { path: 'products', component: ProductListComponent },
      { path: 'cart', component: Cart },
    ],
  },
  {
    path: '',
    component: EmptyLayout,
    children: [
      { path: '**', component: NotFound },
    ],
  },
];
