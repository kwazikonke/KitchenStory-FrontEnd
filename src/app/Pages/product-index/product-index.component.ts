import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit{

  prodInfo: Products[] = [];

  constructor(private productsService: ProductsService, private router: Router) { }
  
  ngOnInit(): void {
    this.prodInfo;
  }
  getAllProducts():void {
    this.productsService.getAllProducts().subscribe(
      data => {
        this.prodInfo = data;
      });
  }
  getProductDetail(id: number) {
    this.router.navigate(['product-detail', id]);
  }
  deleteProduct(id: number) {
    if (confirm("Are u sure, you want to delete ?") == true)
    {
      this.productsService.DeleteProduct(id).subscribe(
        data => {
          this.getAllProducts();
        });
    }
  }
  getUpdateProduct(id: number) {
    this.router.navigate(['update-product', id]);
  }
}
