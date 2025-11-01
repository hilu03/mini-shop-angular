import { Component } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  products = [
    {
      id: 1,
      name: 'Wireless Mouse',
      description: 'Smooth and responsive mouse',
      price: 25,
      image: 'https://picsum.photos/640/480',
    },
    {
      id: 2,
      name: 'Keyboard',
      description: 'Compact mechanical keyboard',
      price: 45,
      image: 'https://picsum.photos/640/480',
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling headphones',
      price: 60,
      image: 'https://picsum.photos/640/480',
    },
  ];
}
