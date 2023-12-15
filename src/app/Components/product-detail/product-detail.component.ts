import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  eno: number = 0;
  prod: Products = new Products();

  constructor(private productService: ProductsService, private router: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.eno = this.router.snapshot.params['id'];
    this.productService.GetProductDetail(this.eno).subscribe(
      data => {
        this.prod = data;
      }
    )
  }

}
