import { Product } from "../types/product";
import { BaseService } from "./baseService";

export default class ProductService extends BaseService {
  //get products
  async getProducts(): Promise<Product[]> {
    const response = await this.instance.get(`products`);
    return response.data;
  }

  //create product

  async createProduct(data: Product) {
    const response = await this.instance.post("products/", data);
    return response;
  }
  //delete product
  async deleteProduct(id: string) {
    const response = await this.instance.delete(`products/${id}`);
    return response;
  }

  //fetch product by id

  async fetchProductById(id: string): Promise<Product> {
    const response = await this.instance.get(`products/${id}`);
    return response.data;
  }
}
