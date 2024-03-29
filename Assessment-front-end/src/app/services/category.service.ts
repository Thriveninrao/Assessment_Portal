import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _http: HttpClient) {}

  // Load all Categories
  public categories() {
    return this._http.get(`${baseUrl}/category/`);
  }

  // Add new Category
  public addCategory(category: any) {
    return this._http.post(`${baseUrl}/category/`, category);
  }

  // delete Category
  public deleteCategory(categoryId: any) {
    console.log(categoryId)
    return this._http.delete(`${baseUrl}/category/${categoryId}`);
  }
}
