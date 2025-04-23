import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  napis: string = 'Sklep TAIiB';

  zmienNapisNaUsmiech(): void {
    this.napis = 'Sklep TAIiB :)';
  }

  przywrocNapis(): void {
    this.napis = 'Sklep TAIiB';
  }
}
