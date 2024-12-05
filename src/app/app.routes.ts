import { Routes } from '@angular/router';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderCreateComponent } from './components/orders/order-create/order-create.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';

export const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/create', component: OrderCreateComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/create', component: CreateBookComponent },
  { path: 'books/update/:id', component: UpdateBookComponent },
];