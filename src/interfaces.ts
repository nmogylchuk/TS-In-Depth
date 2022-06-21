import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    pages?: number;
    markDamaged?: DamagedLogger;
    // markDamaged?: (reason: string) => void;
    // markDamaged?(reason: string): void;
}

// interface Book {
//     id: number;
// }

interface DamagedLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

interface A {
    name: string;
    a: number;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMrgCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export {
    Book,
    DamagedLogger as Logger,
    Person,
    Author,
    Librarian,
    TOptions,
    A,
    Magazine,
    ShelfItem,
    LibMrgCallback,
    Callback,
};
