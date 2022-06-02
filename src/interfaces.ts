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

export { Book, DamagedLogger as Logger, Person, Author, Librarian, TOptions, A };
