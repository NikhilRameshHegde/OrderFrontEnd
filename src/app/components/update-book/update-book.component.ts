import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent {
  bookId: number | null = null;  // Correctly typed as 'number | null'
  bookTitle: string = '';
  bookAuthor: string = '';
  bookPrice: number = 0;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private bookService = inject(BookService);

  ngOnInit(): void {
    // Get book ID from URL and safely convert it to a number
    const bookIdFromRoute = this.route.snapshot.paramMap.get('id'); // This is a string or null

    // Convert to number, handle null, and ensure it's a valid number
    if (bookIdFromRoute) {
      this.bookId = +bookIdFromRoute;  // Convert the string to a number using the unary + operator
    }
    
    // If the bookId is available (not null), load the book details
    if (this.bookId) {
      this.loadBookDetails(this.bookId);
    }
  }

  loadBookDetails(id: number): void {
    // Fetch book details using bookId from backend
    this.bookService.getBookById(id).subscribe(
      (book) => {
        this.bookTitle = book.title;
        this.bookAuthor = book.author;
        this.bookPrice = book.price;
      },
      (error) => {
        console.error('Error fetching book details:', error);
      }
    );
  }

  updateBook(): void {
    if (this.bookId !== null) {  // Ensure bookId is a valid number
      const updatedBook = {
        id: this.bookId,  // Already a number
        title: this.bookTitle,
        author: this.bookAuthor,
        price: this.bookPrice
      };

      // Call the update book service method
      this.bookService.updateBook(this.bookId, updatedBook).subscribe(
        (response) => {
          console.log('Book updated successfully:', response);
          this.router.navigate(['/books']); // Navigate to the book list
        },
        (error) => {
          console.error('Error updating book:', error);
        }
      );
    }
  }
}