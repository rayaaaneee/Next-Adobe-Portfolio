import DeepReadonly from "./deep-readonly";
import Language, { WithLanguage } from "./language";

export const Month: DeepReadonly<Record<string, WithLanguage<string>>> = {
    January: { en: "Jan", fr: "Jan", es: "Ene" },
    February: { en: "Feb", fr: "Fév", es: "Feb" },
    March: { en: "Mar", fr: "Mar", es: "Mar" },
    April: { en: "Apr", fr: "Avr", es: "Abr" },
    May: { en: "May", fr: "Mai", es: "May" },
    June: { en: "Jun", fr: "Juin", es: "Jun" },
    July: { en: "Jul", fr: "Juil", es: "Jul" },
    August: { en: "Aug", fr: "Août", es: "Ago" },
    September: { en: "Sep", fr: "Sep", es: "Sep" },
    October: { en: "Oct", fr: "Oct", es: "Oct" },
    November: { en: "Nov", fr: "Nov", es: "Nov" },
    December: { en: "Dec", fr: "Déc", es: "Dic" }
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

        const present: WithLanguage<string> = { en: "Present", fr: "Aujourd'hui", es: "Presente" };
        
        if (this.end) {
            return `${this.start.toString(language)} - ${this.end.toString(language)}`;
        } else {
            return `${this.start.toString(language)} - ${present[language]}`;
        }
    }
}