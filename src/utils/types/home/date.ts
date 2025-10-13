import { DateInterface, ExperienceDateInterface } from "./experience";

export class DateClass implements DateInterface {

    month;
    year;

    constructor({month, year}: DateInterface) {
        this.month = month;
        this.year = year;
    }

    toString() {
        return `${this.month} ${this.year}`;
    }
    
}

export class ExperienceDateClass implements ExperienceDateInterface {

    start;
    end?;

    constructor({ start, end }: { start: DateInterface; end?: DateInterface }) {
        this.start = new DateClass(start);
        this.end = end ? new DateClass(end) : undefined;
    }

    toString(): string {
        if (this.end) {
            return `${this.start.toString()} - ${this.end.toString()}`;
        } else {
            return `${this.start.toString()} - Present`;
        }
    }
}