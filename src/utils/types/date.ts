export enum Month {
    January = "Jan",
    February = "Feb",
    March = "Mar",
    April = "Apr",
    May = "May",
    June = "Jun",
    July = "Jul",
    August = "Aug",
    September = "Sep",
    October = "Oct",
    November = "Nov",
    December = "Dec"
}

export interface DateInterface {
    month: Month,
    year: number,
    toString(): string,
}

export interface IntervalDateInterface {
    start: DateInterface,
    end?: DateInterface,
    toString(): string,
}

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

export class IntervalDateClass implements IntervalDateInterface {

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