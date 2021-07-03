import { Injectable } from "@nestjs/common";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
    books: Book[] = [
        new Book('LIV01', 'Typescript Fundations', 29.95),
        new Book('LIV02', 'Javascript Fundations', 39.05),
        new Book('LIV03', 'Flutter Fundations', 59.14)
    ];

    getAll(): Book[] {
        return this.books;
    }

    getOne(id: number): Book {
        return this.books[0];
    }

    create(book: Book) {
        this.books.push(book);
    }

    update(book: Book): Book {
        return book;
    }

    delete(id: number) {
        this.books.pop();
    }
}