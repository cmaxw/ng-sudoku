export class Cell {
    row: number;
    col: number;
    value: string;

    constructor(rw: number, cl: number, val: string) {
        this.row = rw;
        this.col = cl;
        this.value = val;
    }
}