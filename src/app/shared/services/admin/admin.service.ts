import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import  {ENV} from '../../../env'

import 'rxjs';
import 'rxjs';


  const httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }
  AddCategory(data): Observable<any> {
    const url = `${ENV.mainApi}adminCategories`;
    return this.http.post<any>(url,data,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }
  getCategory(): Observable<any> {
    const url = `${ENV.mainApi}adminCategories`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }

  editCategory(data): Observable<any> {
    const url = `${ENV.mainApi}adminCategories/${data.id}`;
    delete(data.id)
    return this.http.patch<any>(url,data,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }
 deleteCategory(data): Observable<any> {
    const url = `${ENV.mainApi}adminCategories/${data.id}`;
    return this.http.delete<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }



 AddDegrees(data): Observable<any> {
    const url = `${ENV.mainApi}adminDegrees`;
    return this.http.post<any>(url,data,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }
  getDegrees(): Observable<any> {
    const url = `${ENV.mainApi}adminDegrees`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }

  editDegrees(data): Observable<any> {
    const url = `${ENV.mainApi}adminDegrees/${data.id}`;
    delete(data.id)
    return this.http.patch<any>(url,data,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }
 deleteDegrees(data): Observable<any> {
    const url = `${ENV.mainApi}adminDegrees/${data.id}`;
    return this.http.delete<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }

  AddSubCategory(data): Observable<any> {
    const url = `${ENV.mainApi}adminsubCategories`;
    return this.http.post<any>(url,data,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }
  getSubCategory(): Observable<any> {
    const url = `${ENV.mainApi}adminsubCategories`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }

  editSubCategory(data): Observable<any> {
    const url = `${ENV.mainApi}adminsubCategories/${data.id}`;
    delete(data.id)
    return this.http.patch<any>(url,data,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }
 deleteSubCategory(data): Observable<any> {
    const url = `${ENV.mainApi}adminsubCategories/${data.id}`;
    return this.http.delete<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }

  AddSpeciality(data): Observable<any> {
    const url = `${ENV.mainApi}adminSpeciality`;
    return this.http.post<any>(url,data,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }
  getSpeciality(): Observable<any> {
    const url = `${ENV.mainApi}adminSpeciality`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }

  editSpeciality(data): Observable<any> {
    const url = `${ENV.mainApi}adminSpeciality/${data.id}`;
    delete(data.id)
    return this.http.patch<any>(url,data,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }
 deleteSpeciality(data): Observable<any> {
    const url = `${ENV.mainApi}adminSpeciality/${data.id}`;
    return this.http.delete<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }


  adminCategorieswithSubcategory(): Observable<any> {
    const url = `${ENV.mainApi}adminCategorieswithSubcategory`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }


  usersChefAdmin(): Observable<any> {
    const url = `${ENV.mainApi}usersChefAdmin`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   usersChefAdmin Test`)),
          catchError(this.handleError('get   usersChefAdmin Test', []))
        
    );
  }

  usersAdmin(): Observable<any> {
    const url = `${ENV.mainApi}usersAdmin`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   usersChefAdmin Test`)),
          catchError(this.handleError('get   usersChefAdmin Test', []))
        
    );
  }

  deleteUser(data): Observable<any> {
    const url = `${ENV.mainApi}adminCategories/${data.id}`;
    return this.http.delete<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   oneditCityStatus Test`)),
          catchError(this.handleError('get   oneditCityStatus Test', []))
        
    );
  }


  getHtmlContent(type): Observable<any> {
    const url = `${ENV.mainApi}htmlContentApp/${type}`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   usersChefAdmin Test`)),
          catchError(this.handleError('get   usersChefAdmin Test', []))
        
    );
  }

  postHtmlContent(body): Observable<any> {
    const url = `${ENV.mainApi}htmlContentAdmin`;
    return this.http.post<any>(url,body,httpOptions)
          .pipe(
          tap(heroes => this.log(`get   usersChefAdmin Test`)),
          catchError(this.handleError('get   usersChefAdmin Test', []))
        
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
    console.log(message)
  }
}
