import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  prod: Products = new Products();
  constructor(private productsService: ProductsService, private router: Router) { }
  
  saveProduct(): void{
    this.productsService.AddProduct(this.prod).subscribe(
      data => {
        this.router.navigate(['Index']);
      }
    )
  }
}
