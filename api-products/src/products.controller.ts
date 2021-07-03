import { Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Controller } from "@nestjs/common";

@Controller('products')
export class ProductsController {

    @Get()
    getAll(): string {
        return 'List all products';
    }

    @Get(':id')
    getOne(@Param() params): string {
        return `Return data of product ${params.id}`;
    }

    @Post()
    create(@Body() product): string {
        console.log(product);
        return 'Created product';
    }

    @Put()
    update(@Body() product): string {
        return 'Updated product';
    }

    @Delete(':id')
    delete(@Param() params): string {
        return `Product ${params.id} deleted`;
    }
}