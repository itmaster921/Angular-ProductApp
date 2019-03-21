import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private hostUrl = 'http://demo3447636.mockable.io/getproducts';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    const res = this.http.get(this.hostUrl);
    /*return this.http.get(this.hostUrl).pipe(
      tap(data => {
       console.log('%c' + JSON.stringify(data['products']), 'color:green');
      }),
      catchError(this.handleError)
    );*/
    return this.http.get(this.hostUrl);
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
}
