export interface Order {
    id: number;
    bookIds: number[];
    totalPrice: number;
    createdDate: string;
}