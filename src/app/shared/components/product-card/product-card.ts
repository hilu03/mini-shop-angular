import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Product } from '../../../core/types';

@Component({
  selector: 'app-product-card',
  imports: [MatIcon],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly product = input.required<Product>();
}
