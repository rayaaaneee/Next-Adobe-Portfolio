import type DeepReadonly from "./deep-readonly";
import Language, { type WithLanguage } from "./language";

export type StringDate = `${number}-${number}-${number}`; // YYYY-MM-DD (enforced)

export const Month: DeepReadonly<Record<string, WithLanguage<string>>> = {
    January: { [Language.EN]: "Jan", [Language.FR]: "Jan", [Language.ES]: "Ene" },
    February: { [Language.EN]: "Feb", [Language.FR]: "Fév", [Language.ES]: "Feb" },
    March: { [Language.EN]: "Mar", [Language.FR]: "Mar", [Language.ES]: "Mar" },
    April: { [Language.EN]: "Apr", [Language.FR]: "Avr", [Language.ES]: "Abr" },
    May: { [Language.EN]: "May", [Language.FR]: "Mai", [Language.ES]: "May" },
    June: { [Language.EN]: "Jun", [Language.FR]: "Juin", [Language.ES]: "Jun" },
    July: { [Language.EN]: "Jul", [Language.FR]: "Juil", [Language.ES]: "Jul" },
    August: { [Language.EN]: "Aug", [Language.FR]: "Août", [Language.ES]: "Ago" },
    September: { [Language.EN]: "Sep", [Language.FR]: "Sep", [Language.ES]: "Sep" },
    October: { [Language.EN]: "Oct", [Language.FR]: "Oct", [Language.ES]: "Oct" },
    November: { [Language.EN]: "Nov", [Language.FR]: "Nov", [Language.ES]: "Nov" },
    December: { [Language.EN]: "Dec", [Language.FR]: "Déc", [Language.ES]: "Dic" }
} as const;

export type MonthKey = typeof Month[keyof typeof Month];

export interface DateInterface {
    month: MonthKey;
    year: number;
    toString(language: Language): string;
}

export interface IntervalDateInterface {
    start: DateInterface;
    end?: DateInterface;
    toString(language: Language): string;
}

export class DateClass implements DateInterface {

    month: MonthKey;
    year: number;

    constructor({month, year}: DateInterface) {
        this.month = month;
        this.year = year;
    }

    toString(language: Language): string {
        return `${this.month[language]} ${this.year}`;
    }
    
}

export class IntervalDateClass implements IntervalDateInterface {

    start: DateInterface;
    end?: DateInterface;

    constructor({ start, end }: { start: DateInterface; end?: DateInterface }) {
        this.start = new DateClass(start);
        this.end = end ? new DateClass(end) : undefined;
    }

    toString(language: Language = Language.EN): string {

        const present: WithLanguage<string> = { [Language.EN]: "Present", [Language.FR]: "Aujourd'hui", [Language.ES]: "Presente" };
        
        if (this.end) {
            return `${this.start.toString(language)} - ${this.end.toString(language)}`;
        } else {
            return `${this.start.toString(language)} - ${present[language]}`;
        }
    }
}