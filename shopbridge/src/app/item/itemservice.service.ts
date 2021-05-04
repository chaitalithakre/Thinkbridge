import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  url = "http://localhost:3000/items";

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.url);
  }

  saveItem(data: any) {
    return this.http.post(this.url, data);
  }

  deleteItem(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentItem(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateItem(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
