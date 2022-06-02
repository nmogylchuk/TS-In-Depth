import { Book, Person } from './interfaces';

// export type Book = {
//     id: number;
//     title: string;
//     category: Category;
//     author: string;
//     available: boolean;
// }

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;
