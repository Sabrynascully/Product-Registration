import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../../model/product.model';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = { 
   name: 'Produto de teste',
   price: 125.90

  }

  constructor(private productService:  ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  createProduct(): void {
   this.productService.create(this.product).subscribe(() =>{
     this.productService.showMessage('Produto Criado!')
     this.router.navigate(['/products'])

   })

    this.productService.showMessage('Operação executada com sucesso');
 
  }
  cancel(){
    this.router.navigate(['/products'])
  }

}
