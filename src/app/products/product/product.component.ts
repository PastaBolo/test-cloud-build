import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
    <p>
      Product ID = {{ productId }}
    </p>
  `,
  styles: []
})
export class ProductComponent {

  public productId = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute) { }
}