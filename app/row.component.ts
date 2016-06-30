import { Component, OnInit } from '@angular/core';

import { Cell } from './cell';

@Component({
    selector: 'tr',
    template: `
          <td class="{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}" contenteditable *ngFor="let cell of cells">{{row}}</td>
        `,
    styles: [`
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
export class RowComponent implements OnInit {
       cells: Cell[];

       ngOnInit() {
         this.cells = [
           {row: this.rowNum, col: 1, value: ""},
           {row: this.rowNum, col: 2, value: ""},
           {row: this.rowNum, col: 3, value: ""},
           {row: this.rowNum, col: 4, value: ""},
           {row: this.rowNum, col: 5, value: ""},
           {row: this.rowNum, col: 6, value: ""},
           {row: this.rowNum, col: 7, value: ""},
           {row: this.rowNum, col: 8, value: ""},
           {row: this.rowNum, col: 9, value: ""}
         ]
       }
}