import { ReferenceItem, UL, RefBook } from './classes';
import { Librarian, Logger, A } from './interfaces';
import { printRefBook } from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// console.log(getBookAuthorByIndex(10));
// console.log(calcTotalPages());

// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id} - ${name}`;
// idGenerator = createCustomerID;
// idGenerator('Ann', 10);
// let idGenerator2: typeof createCustomerID;
// let t = typeof createCustomerID;

// Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookById(1));
// const myBooks = checkoutBooks('Anna', 1, 2, 4);
// console.log(myBooks);

// Task 03.03
// getTitles('Anna');
// getTitles(true);
// getTitles(1, true);

// Task 03.04
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(100));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     // year: 2015,
//     // copies: 3,
//     // markDamaged(reason: string) {
//     //     console.log(`Damaged: ${reason}`);
//     // },
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     numBooksPublished: 3,
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     department: 'Classical Literature',
//     assistCustomer(custName: string, bookTitle: string): void {
//         console.log(`CustName: ${custName}, bookTitle: ${bookTitle}`);
//     },
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//         authors: [{ name: 'Anna' }],
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[1]?.name);

// Task 04.05
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'Typescript', 2022);
// ref.printItem();
// console.log(ref);
// // @ts-ignore
// ref.publisher = 'abc print';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02
// const refBook = new RefBook(1, 'Typescript', 2022, 2);
// refBook.printItem();
// console.log(refBook);

// Task 05.03
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian | A = new UL.UniversityLibrarian();
// const favoriteLibrarian: Librarian & A = new UL.UniversityLibrarian();
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');

// Task 05.05
// const pb: PersonBook = {
//     author: 'Nataliia',
//     available: false,
//     category: Category.JavaScript,
//     email: 'nataliia_mogylchuk@epam.com',
//     id: 1,
//     name: 'Nataliia',
//     title: 'Unknown',
//     markDamaged: null,
//     pages: 1000,
// };
// console.log(pb);

// const o: TOptions = { duration: 0 };
// console.log(setDefaultConfig(o));

// Task 06.03
// const refBook = new RefBook(1, 'Typescript', 2022, 2);
// printRefBook(refBook);
// const favoriteLibrarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);
