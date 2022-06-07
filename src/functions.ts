/* eslint-disable no-redeclare */

import { Category } from './enums';
import { Book, TOptions } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/encyclopedia';

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 60;
    return options;
}

export function getAllBooks(): ReadonlyArray<Book> {
    const books: readonly Book[] = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.JavaScript,
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.JavaScript,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];

    return books;
}

export function logFirstAvailable(books: ReadonlyArray<Book> = getAllBooks()): void {
    console.log(`Number of books ${books.length}`);
    const title = books.find(({ available }) => available)?.title;
    console.log(`First available book ${title}`);
}

export function getBookTitlesByCategory(categoryToFilter: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    let titles: string[] = [];
    titles = books.filter(({ category }) => category === categoryToFilter).map(({ title }) => title);
    return titles;
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const { title, author } = books[index] ?? {};
    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    const result = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    return result;
}

export function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string) {
    console.log(`Customer name ${name}`);
    if (age) {
        console.log(`Customer age ${age}`);
    }
    if (city) {
        console.log(`Customer city ${city}`);
    }
}

export function getBookById(bookId: Book['id']): BookOrUndefined {
    const books = getAllBooks();
    return books.find(({ id }) => id === bookId);
}

export function checkoutBooks(customer: string, ...booksIds: number[]): string[] {
    console.log(`Customer name ${customer}`);
    return booksIds
        .map(id => getBookById(id))
        .filter(({ available }) => available)
        .map(({ title }) => title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join();
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];
    return typeof value === 'function' ? value.name : value;
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}
