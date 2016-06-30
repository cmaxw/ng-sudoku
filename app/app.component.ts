import { Component } from '@angular/core';

import { Cell } from 'cell';

@Component({
    selector: 'my-app',
    template: `<table>
      <tbody>
        <tr>
          <td class="{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}" contenteditable *ngFor="let cell of row1">1</td>
        </tr>
        <tr>
          <td class="{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}" contenteditable *ngFor="let cell of row2"></td>
        </tr>
        <tr>
          <td class="{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}" contenteditable *ngFor="let cell of row3"></td>
        </tr>
        <tr>
          <td class="thick-border-up {{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}" contenteditable *ngFor="let cell of row4"></td>
        </tr>
        <tr>
          <td class="{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}" contenteditable *ngFor="let cell of row5"></td>
        </tr>
        <tr>
          <td class="{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}" contenteditable *ngFor="let cell of row6"></td>
        </tr>
        <tr>
          <td class="thick-border-up {{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}" contenteditable *ngFor="let cell of row7"></td>
        </tr>
        <tr>
          <td class="{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}" contenteditable *ngFor="let cell of row8"></td>
        </tr>
        <tr>
          <td class="{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}" contenteditable *ngFor="let cell of row9"></td>
        </tr>
      </tbody>
    </table>`,
    styles: [`
      table {
        border: 3px solid black;
        border-collapse: collapse;
      }

      td{
        border: 1px solid black;
        width: 30px;
        height: 30px;
        text-align: center;
        vertical-align: middle;
        font-size: 20px;
      }

      td.thick-border-up {
        border-top: 3px solid black;
      }

      td.thick-border-left {
        border-left: 3px solid black;
      }
    `]
})
export class AppComponent {
       public row1 = ROW1;
       public row2 = ROW2;
       public row3 = ROW3;
       public row4 = ROW4;
       public row5 = ROW5;
       public row6 = ROW6;
       public row7 = ROW7;
       public row8 = ROW8;
       public row9 = ROW9;
}

const ROW1: Cell[] = [
      {row: 1, col: 1, value: ""},
      {row: 1, col: 2, value: ""},
      {row: 1, col: 3, value: ""},
      {row: 1, col: 4, value: ""},
      {row: 1, col: 5, value: ""},
      {row: 1, col: 6, value: ""},
      {row: 1, col: 7, value: ""},
      {row: 1, col: 8, value: ""},
      {row: 1, col: 9, value: ""},
]

const ROW2: Cell[] = [
      {row: 2, col: 1, value: ""},
      {row: 2, col: 2, value: ""},
      {row: 2, col: 3, value: ""},
      {row: 2, col: 4, value: ""},
      {row: 2, col: 5, value: ""},
      {row: 2, col: 6, value: ""},
      {row: 2, col: 7, value: ""},
      {row: 2, col: 8, value: ""},
      {row: 2, col: 9, value: ""},
]

const ROW3: Cell[] = [
      {row: 3, col: 1, value: ""},
      {row: 3, col: 2, value: ""},
      {row: 3, col: 3, value: ""},
      {row: 3, col: 4, value: ""},
      {row: 3, col: 5, value: ""},
      {row: 3, col: 6, value: ""},
      {row: 3, col: 7, value: ""},
      {row: 3, col: 8, value: ""},
      {row: 3, col: 9, value: ""},
]

const ROW4: Cell[] = [
      {row: 4, col: 1, value: ""},
      {row: 4, col: 2, value: ""},
      {row: 4, col: 3, value: ""},
      {row: 4, col: 4, value: ""},
      {row: 4, col: 5, value: ""},
      {row: 4, col: 6, value: ""},
      {row: 4, col: 7, value: ""},
      {row: 4, col: 8, value: ""},
      {row: 4, col: 9, value: ""},
]

const ROW5: Cell[] = [
      {row: 5, col: 1, value: ""},
      {row: 5, col: 2, value: ""},
      {row: 5, col: 3, value: ""},
      {row: 5, col: 4, value: ""},
      {row: 5, col: 5, value: ""},
      {row: 5, col: 6, value: ""},
      {row: 5, col: 7, value: ""},
      {row: 5, col: 8, value: ""},
      {row: 5, col: 9, value: ""},
]

const ROW6: Cell[] = [
      {row: 6, col: 1, value: ""},
      {row: 6, col: 2, value: ""},
      {row: 6, col: 3, value: ""},
      {row: 6, col: 4, value: ""},
      {row: 6, col: 5, value: ""},
      {row: 6, col: 6, value: ""},
      {row: 6, col: 7, value: ""},
      {row: 6, col: 8, value: ""},
      {row: 6, col: 9, value: ""},
]

const ROW7: Cell[] = [
      {row: 7, col: 1, value: ""},
      {row: 7, col: 2, value: ""},
      {row: 7, col: 3, value: ""},
      {row: 7, col: 4, value: ""},
      {row: 7, col: 5, value: ""},
      {row: 7, col: 6, value: ""},
      {row: 7, col: 7, value: ""},
      {row: 7, col: 8, value: ""},
      {row: 7, col: 9, value: ""},
]

const ROW8: Cell[] = [
      {row: 8, col: 1, value: ""},
      {row: 8, col: 2, value: ""},
      {row: 8, col: 3, value: ""},
      {row: 8, col: 4, value: ""},
      {row: 8, col: 5, value: ""},
      {row: 8, col: 6, value: ""},
      {row: 8, col: 7, value: ""},
      {row: 8, col: 8, value: ""},
      {row: 8, col: 9, value: ""},
]

const ROW9: Cell[] = [
      {row: 9, col: 1, value: ""},
      {row: 9, col: 2, value: ""},
      {row: 9, col: 3, value: ""},
      {row: 9, col: 4, value: ""},
      {row: 9, col: 5, value: ""},
      {row: 9, col: 6, value: ""},
      {row: 9, col: 7, value: ""},
      {row: 9, col: 8, value: ""},
      {row: 9, col: 9, value: ""},
]