import { Get, Post, Put, Delete, Param, Controller, Body } from "@nestjs/common";
import { Product } from "./product.model";

@Controller('products')
export class ProductsController {

    products: Product[] = [
        new Product('LIV01', 'Typescript Fundations', 29.95),
        new Product('LIV02', 'Javascript Fundations', 39.05),
        new Product('LIV03', 'Flutter Fundations', 59.14)
    ];

    @Get()
    getAll(): Product[] {
        return this.products;
    }

    @Get(':id')
    getOne(@Param() params): Product {
        return this.products[0];
    }

    @Post()
    create(@Body() product: Product) {
        product.id = 100;
        this.products.push(product);
    }

    @Put()
    update(@Body() product:Product) {
        return product;
    }

    @Delete(':id')
    delete(@Param() params) {
        this.products.pop();
    }
}