import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:8081/books';

  constructor(private http: HttpClient) { }

  // Get all books
  getBooks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Get a book by ID
  getBookById(bookId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${bookId}`);
  }

  // Create a new book
  createBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  // Update a book
  updateBook(bookId: number, book: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${bookId}`, book);
  }

  // Delete a book
  deleteBook(bookId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${bookId}`);
  }
}