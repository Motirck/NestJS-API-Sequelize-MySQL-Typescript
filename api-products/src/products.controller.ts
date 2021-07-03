import { Get, Post, Put, Delete, Param, Controller, Body } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {

    }

    @Get()
    getAll(): Product[] {
        return this.productService.getAll();
    }

    @Get(':id')
    getOne(@Param() params): Product {
        return this.productService.getOne(params.id);
    }

    @Post()
    create(@Body() product: Product) {
        this.productService.create(product);
    }

    @Put()
    update(@Body() product: Product) {
        this.productService.update(product);
    }

    @Delete(':id')
    delete(@Param() params) {
        this.productService.delete(params.id);
    }
}