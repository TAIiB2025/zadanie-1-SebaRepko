import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './Product.model';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, CommonModule, CartComponent, HeaderComponent],
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
  wartoscKoszyka: number = 0;

  dodajDoKoszyka(cena: number): void {
    this.wartoscKoszyka += cena;
  }
  pokazProdukty: boolean = true;

  toggleProdukty(): void {
    this.pokazProdukty = !this.pokazProdukty;
  }

  resetujKoszyk(): void {
    this.wartoscKoszyka = 0; 
    this.produkty.forEach(produkt => {
      produkt.liczbaSztuk = 0; 
    });
  }
}
