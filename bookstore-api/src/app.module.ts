import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book/book.model';
import { BooksController } from './book/books.controller';
import { BooksService } from './book/books.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql', // Database dialect
      host: 'localhost', // Database server address
      port: 3306, // Database port. The default port is 3306, but you can choose any port
      username: process.env.DATABASE_USER, // MySQL user
      password: process.env.PASSWORD_DATABASE, // MySQL user password
      database: process.env.DATABASE, // database name
      autoLoadModels: true, // Automatically maps the models
      synchronize: true, // If there isn't Book table, it will created
    }),
    SequelizeModule.forFeature([Book])
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule { }