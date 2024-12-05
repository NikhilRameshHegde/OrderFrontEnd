import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order } from '../../../models/order.model';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  orders: Order[] = [];
  searchOrderId: number | null = null; // Input for searching an order
  searchedOrder: Order | null = null; // Fetched order

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  // Fetch order by ID
  getOrderById(): void {
    if (this.searchOrderId) {
      this.orderService.getOrderById(this.searchOrderId).subscribe(
        (order) => {
          this.searchedOrder = order;
        },
        (error) => {
          alert('Order not found.');
          this.searchedOrder = null;
        }
      );
    } else {
      alert('Please enter a valid Order ID.');
    }
  }
}