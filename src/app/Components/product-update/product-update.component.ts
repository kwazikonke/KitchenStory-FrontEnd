import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{

  eno: number = 0;
  prod: Products = new Products();

  constructor(private productService: ProductsService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.eno = this.route.snapshot.params['id'];
    this.productService.GetProductDetail(this.eno).subscribe(
      data => {
        this.prod = data;
      });
  }

  updateProduct(): void{
    this.productService.UpdateProductDetail(this.eno, this.prod).subscribe(
      data => {
        this.router.navigate(['Index']);
      }
    );
}
}
