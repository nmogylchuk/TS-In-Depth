abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    // @ts-ignore
    private _publisher: string;

    #id: number;

    static department: string = 'Classical Literature';

    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }

    // @ts-ignore
    set _publisher(newPublisher: string) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
        Object.getPrototypeOf(this).constructor.department;
    }
}

export { ReferenceItem };