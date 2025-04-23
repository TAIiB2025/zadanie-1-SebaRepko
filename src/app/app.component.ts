import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './Product.model';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  produkty: Product[] = [
    new Product('Produkt 1', 20.0, new Date(2001, 8, 30), false),
    new Product('Produkt 2', 35.5, new Date(2020, 1, 15), true),
    new Product('Produkt 3', 10.0, new Date(2018, 5, 20), false),
    new Product('Produkt 4', 50.0, new Date(2023, 3, 10), true),
    new Product('Produkt 5', 15.0, new Date(2019, 10, 5), false),
  ];
}
