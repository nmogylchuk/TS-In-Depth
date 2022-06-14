import { Author, Book, Person } from './interfaces';
import { createCustomer } from './functions';
import { Category } from './enums';

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
export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;

type TEmail = 'email';
export type AuthorWOEmail = Omit<Author, TEmail>;

export type CreateCustomerFunctionType = typeof createCustomer;

type fn = (p1: string, p2: number, p3: boolean) => symbol;
type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;
type P4 = Param3<number>;
//
// interface Book {
//     id: number;
//     title: string;
//     category: Category;
//     author: string;
//     available: boolean;
//     pages?: number;
//     markDamaged?: DamagedLogger;
//     // markDamaged?: (reason: string) => void;
//     // markDamaged?(reason: string): void;
// }

type RequiredProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop;
}[keyof T];

// RequiredProps<Book> // id, title, author, category, available
type RequiredFields = RequiredProps<Book>;

type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never;
}[keyof T];

// OptionalProps<Book> // pages | markDamaged
type OptionalFields = OptionalProps<Book>;
// type OptionalFields = OptionalProps<number>;

type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};

type BookRequiredPropsType = RemoveProps<Book, RequiredFields>;
type BookOptionalPropsType = RemoveProps<Book, OptionalFields>;
