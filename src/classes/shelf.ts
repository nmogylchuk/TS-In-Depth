import { Book, Magazine, ShelfItem } from '../interfaces';

export default class Shelf<T extends ShelfItem> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}

// type A1 = Book[] | Magazine[];
// type A2 = Book & Magazine;
// type A3 = Book | Magazine;
//
// export default class Shelf<T> {
//     private items: A1 = [];
//
//     add(item: A2): void {
//         this.items.push(item);
//     }
//
//     getFirst(): A3 {
//         return this.items[0];
//     }
// }
