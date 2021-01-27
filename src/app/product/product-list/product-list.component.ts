import { IProduct } from './../interface-products';
import { Component, OnInit } from '@angular/core';
import { ProductServices } from 'src/app/services/products.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string = '';
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  errorMessage!: string;


  constructor(private productService: ProductServices) {  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  // performFilter(filterBy: string): IProduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: IProduct) => {
  //     return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
  //   });
  // }chukwuemeka.agu@polarisdigitech.net

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onNotify(message: string): void {
    console.log(message);
    this.pageTitle = 'Product List: ' + message;
  }

  // (error as any) Or <any>error ...this's called the casting operator.
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      product => {
        this.products = product;
        this.filteredProducts = this.products;
        // this.listFilter = 'cart';
      },
    error => this.errorMessage = (error as any)
    );
  }

}
