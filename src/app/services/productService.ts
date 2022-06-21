import { Product } from "../types/product";
import { BaseService } from "./baseService";

export default class ProductService extends BaseService {
  //get products
  async getProducts(): Promise<Product[]> {
    const response = await this.instance.get(`products`);
    return response.data;
  }
}
