import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    products: Product[] = [
        new Product('LIV01', 'Typescript Fundations', 29.95),
        new Product('LIV02', 'Javascript Fundations', 39.05),
        new Product('LIV03', 'Flutter Fundations', 59.14)
    ];

    getAll(): Product[] {
        return this.products;
    }

    getOne(id: Number): Product {
        return this.products[0];
    }

    create(product: Product) {
        this.products.push(product);
    }

    update(product: Product): Product {
        return product;
    }

    delete(id: Number) {
        this.products.pop();
    }
}