import get = Reflect.get;

{
    /* eslint-disable no-redeclare */
}

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    React,
}

// type Book = {
//     id: number;
//     title: string;
//     category: Category;
//     author: string;
//     available: boolean;
// }

interface Book {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    pages?: number;
    markDamaged?: damagedLogger;
    // markDamaged?: (reason: string) => void;
    // markDamaged?(reason: string): void;
}

interface damagedLogger {
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

type BookProperties = keyof Book;

function getAllBooks(): ReadonlyArray<Book> {
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

function logFirstAvailable(books: ReadonlyArray<Book> = getAllBooks()): void {
    console.log(`Number of books ${books.length}`);
    const title = books.find(({ available }) => available)?.title;
    console.log(`First available book ${title}`);
}

function getBookTitlesByCategory(categoryToFilter: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    let titles: string[] = [];
    titles = books.filter(({ category }) => category === categoryToFilter).map(({ title }) => title);
    return titles;
}

function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const { title, author } = books[index] ?? {};
    return [title, author];
}

function calcTotalPages(): bigint {
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

function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

function createCustomer(name: string, age?: number, city?: string) {
    console.log(`Customer name ${name}`);
    if (age) {
        console.log(`Customer age ${age}`);
    }
    if (city) {
        console.log(`Customer city ${city}`);
    }
}

function getBookById(bookId: Book['id']): Book | undefined {
    const books = getAllBooks();
    return books.find(({ id }) => id === bookId);
}

function checkoutBooks(customer: string, ...booksIds: number[]): string[] {
    console.log(`Customer name ${customer}`);
    return booksIds
        .map(id => getBookById(id))
        .filter(({ available }) => available)
        .map(({ title }) => title);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
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

function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join();
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

function getProperty(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

// Task 02.01
logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
console.log(getBookAuthorByIndex(0));
console.log(getBookAuthorByIndex(10));
console.log(calcTotalPages());

// Task 03.01
const myID: string = createCustomerID('Ann', 10);
console.log(myID);
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id} - ${name}`;
idGenerator = createCustomerID;
idGenerator('Ann', 10);
let idGenerator2: typeof createCustomerID;
let t = typeof createCustomerID;

// Task 03.02
createCustomer('Anna');
createCustomer('Anna', 30);
createCustomer('Anna', 30, 'Kyiv');
console.log(getBookTitlesByCategory());
logFirstAvailable();
console.log(getBookById(1));
const myBooks = checkoutBooks('Anna', 1, 2, 4);
console.log(myBooks);

// Task 03.03
getTitles('Anna');
getTitles(true);
getTitles(1, true);

// Task 03.04
console.log(bookTitleTransform('TypeScript'));
console.log(bookTitleTransform(100));

// Task 04.01
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    // year: 2015,
    // copies: 3,
    // markDamaged(reason: string) {
    //     console.log(`Damaged: ${reason}`);
    // },
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
};

printBook(myBook);
myBook.markDamaged('missing back cover');

// Task 04.02
const logDamage: damagedLogger = (reason: string) => console.log(`Damaged: ${reason}`);

// Task 04.03
const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@gmail.com',
    numBooksPublished: 3,
};

const favoriteLibrarian: Librarian = {
    name: 'Anna',
    email: 'anna@gmail.com',
    department: 'Classical Literature',
    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`CustName: ${custName}, bookTitle: ${bookTitle}`);
    },
};

// Task 04.04
const offer: any = {
    book: {
        title: 'Essential TypeScript',
        authors: [{ name: 'Anna' }],
    },
};

console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[1]?.name);

// Task 04.05
console.log(getProperty(myBook, 'title'));
console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));
