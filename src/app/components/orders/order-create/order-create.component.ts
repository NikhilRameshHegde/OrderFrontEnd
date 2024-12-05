import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-order-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
})
export class OrderCreateComponent {
  bookIds: string = '';

  constructor(private orderService: OrderService) {}

  createOrder(): void {
    const bookIdArray = this.bookIds.split(',').map((id) => parseInt(id.trim(), 10));
    this.orderService.createOrder(bookIdArray).subscribe((order) => {
      alert(`Order created with ID: ${order.id}`);
    });
  }
}