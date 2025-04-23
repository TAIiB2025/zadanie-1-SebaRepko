import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../Product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() dodanoDoKoszyka = new EventEmitter<number>();
  czyZwiniety: boolean = false;
  dodajDoKoszyka(): void {
    this.product.liczbaSztuk++;
    this.dodanoDoKoszyka.emit(this.product.cena); 
  }
  toggleWidok(): void {
    this.czyZwiniety = !this.czyZwiniety; 
  }
}

