import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() wartoscKoszyka: number = 0;
  @Output() resetKoszyk = new EventEmitter<void>();
  resetujKoszyk(): void {
    this.wartoscKoszyka = 0; 
    this.resetKoszyk.emit(); 
  }
}
