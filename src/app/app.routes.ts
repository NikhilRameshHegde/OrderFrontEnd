import { Routes } from '@angular/router';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderCreateComponent } from './components/orders/order-create/order-create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/create', component: OrderCreateComponent },
];