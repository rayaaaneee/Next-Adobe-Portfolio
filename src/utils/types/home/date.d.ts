import Month from "../month";

export interface DateInterface {
    month: Month;
    year: number;
    toString(): string;

}

export interface ExperienceDateInterface {
    start: DateInterface;
    end?: DateInterface;
    toString(): string;
}