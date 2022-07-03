import { Product } from "../types/product";
import { BaseService } from "./baseService";

interface Pages {
  headers: string;
  data: Product[];
}

export default class ProductService extends BaseService {
  //get products

  async getProducts(
    page: number,
    rpp: number,
    sort: string,
    sortDirection?: string
  ): Promise<Pages> {
    const response = await this.instance.get(
      `products?_sort=${sort}&_order=${sortDirection}&_page=${page}&_limit=${rpp}`
    );
    return { headers: response.headers["x-total-count"], data: response.data };
  }

  //create product

  async createProduct(data: Product) {
    const response = await this.instance.post("products/", data);
    return response;
  }

  //delete product

  async deleteProduct(productId: string) {
    const response = await this.instance.delete(`products/${productId}`);
    return response;
  }

  //fetch product by id

  async fetchProductById(productId: string): Promise<Product> {
    const response = await this.instance.get(`products/${productId}`);
    return response.data;
  }

  //update product

  async updateProduct(data: Product, productId: string) {
    const response = await this.instance.put(`products/${productId}`, data);
    return response;
  }
}
