export class ComboGroup {
    title: string;
    value: string | number;
    group: string;

    constructor({ title, value, group }: any) {
        this.title = title;
        this.value = value;
        this.group = group;
    }
}