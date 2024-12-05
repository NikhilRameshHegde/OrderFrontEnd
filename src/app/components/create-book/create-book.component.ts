import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent {
  book = { title: '', author: '', price: 0 , stock: 0};

  constructor(private bookService: BookService, private router: Router) {}

  createBook(): void {
    this.bookService.createBook(this.book).subscribe(
      (response) => {
        console.log('Book created successfully', response);
        this.router.navigate(['/books']);
      },
      (error) => {
        console.error('Error creating book', error);
      }
    );
  }
}