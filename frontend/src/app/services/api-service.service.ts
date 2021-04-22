import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  api_url:string = "http://localhost:3000/books"
  constructor(private http:HttpClient) { }

  // funtion to add a book
  addBook(book:any)
  {
    return this.http.post(`${this.api_url}`,book)
  }
  // function to get all books
  getBooks(){
    return this.http.get(`${this.api_url}`)
  }
  // funtion to delete a book
  updateBook(id:string, book:any)
  {
    return this.http.put(`${this.api_url}/${id}`,book)
  }
  // function to delete a book
  deleteBook(id:string)
  {
    return this.http.delete(`${this.api_url}/${id}`)
  }
  // function to get book by id 
  getBook(id:string)
  {
    return this.http.get(`${this.api_url}/${id}`)
  }
}
