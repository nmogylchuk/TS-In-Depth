import { ReferenceItem } from './reference-item';

export default class Encyclopedia extends ReferenceItem {
    constructor(id: number, title: string, year: number, public edition: number) {
        console.log('Creating a new Encyclopedia...');
        super(id, title, year);
    }
    overrideprintItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}