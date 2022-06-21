import { getBookByCategory, getBooksByCategoryPromise, logCategorySearch, logSearchResult } from './functions';
import { Category } from './enums';
import { Unpromisify } from './types';

// showHello('greeting', 'TypeScript');
//
// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = `Hello from ${name}`;
// }

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

// Task 06.05
// const flag = true;
//
// if (flag) {
//     const obj = await import('./classes');
//     const reader = new obj.Reader();
//     reader.name = 'Anna';
//     console.log(reader);
// }
//
// if (flag) {
//     import('./classes').then(obj => {
//         const reader = new obj.Reader();
//         reader.name = 'Anna';
//         console.log(reader);
//     });
// }

// Task 06.06
// let lib: Library = {
//     id: 1,
//     address: 'unknown',
//     name: 'Anna',
// };

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];

// const books = purge<Book>(inventory);
// console.log(books);
// const result = purge([1, 2, 3, 4]);
// console.log(result);

// Task 07.02
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Task 07.03
// magazineShelf.printTitles();
// magazineShelf.find('Five Points');
// new Shelf<id: number>();

// console.log(getObjectProperty(magazines[0], 'title')); // 'title' | 'publisher'
// console.log(getObjectProperty(magazines[0], 'id'));

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: true,
//     category: Category.React,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn React',
// };
//
// const updatedBook: UpdatedBook = {};
//
// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// Task 08.01
// const u = new UL.UniversityLibrarian();
// UL.UniversityLibrarian['a'] = 1;
// u['m'] = function () {};
// console.log(u);
// const proto = Object.getPrototypeOf(u);
// console.log(proto);
// proto['m'] = function () {};

// Task 08.02
// const u = new UL.UniversityLibrarian();
// console.log(u);
// u.name = 'Anna';
// u['printLibrarian']();
// console.log(u.a);

// Task 08.03
// const u = new UL.UniversityLibrarian();
// console.log(u);
// u.assistFaculty = null;
// u.teachCommunity = null;

// Task 08.04
// const refBook = new RefBook(1, 'Typescript', 2022, 2);
// refBook.printItem();

// Task 08.05, 08.06
// const u = new UL.UniversityLibrarian();
// u.name = 'Anna';
// u.assistCustomer('Boris', getAllBooks()[0].title);
// console.log(u);

// Task 08.07
// const refBook = new RefBook(1, 'Typescript', 2022, 2);
// refBook.copies = 10;
// console.log(refBook);

// Task 09.01
console.log('Begin');
getBookByCategory(Category.JavaScript, logCategorySearch);
getBookByCategory(Category.Software, logCategorySearch);
console.log('End');

// Task 09.02
console.log('Begin');
getBooksByCategoryPromise(Category.JavaScript)
    .then((titles: Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>) => {
        console.log(titles);
        return Promise.resolve(titles.length);
    })
    .then(n => console.log(`n: ${n}`))
    .catch(err => console.log(err));
getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(err => console.log(err));
console.log('End');

// Task 09.03
console.log('Begin');
logSearchResult(Category.JavaScript);
logSearchResult(Category.Software).catch(err => console.log(err));
console.log('End');
