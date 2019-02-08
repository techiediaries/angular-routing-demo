import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product(-1,'No Product');

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getProduct(1).subscribe((product: Product) =>{
      this.product = product;
    })
  }

}
