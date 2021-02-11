import HttpClient from './http-client';
import { Order } from '../model';

const baseURL = process.env.VUE_APP_API_PARTNERS || '';

class OrderService extends HttpClient {
  private static classInstance?: OrderService;

  private constructor() {
    super(baseURL);
  }

  public static getInstance() {
    if (!this.classInstance) this.classInstance = new OrderService();
    return this.classInstance;
  }

  public getOrdersInProcess = () =>
    this.instance.get<Order[]>('/orders/filter/in_process');

  public updateStateOrder = (uuid: string, path: string) => {
    return this.instance.put<Order>(`/orders/${uuid}/${path}`);
  };
}

export default OrderService;
