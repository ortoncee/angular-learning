import { Injectable } from '@angular/core';
import { IProduct } from '../product/interface-products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {

  // private productUrl = 'http://www.agusmart-ortonchukwuemeka.com';
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All:' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof ErrorEvent) {
      errMsg = `An error occurred: ${err.error.message}`;
    } else {
      errMsg = `Server returned code: ${err.status}, error message is is ${err.message}`;
    }
    console.error(errMsg);
    return throwError(errMsg);
  }
}
