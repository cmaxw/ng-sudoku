import { Component, OnInit} from '@angular/core';

import { Cell } from './cell';

@Component({
    selector: 'my-app',
    template: `<table>
      <tbody>
        <tr *ngFor="let row of rows">
          <td *ngFor="let cell of row">
            <div contenteditable class="{{classFor(cell)}}">
              {{cell.value}}
            </div>
          </td>
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
        padding: 0;
        margin: 0;
        text-align: center;
        vertical-align: middle;
     }

     td div{
        width: 30px;
        height: 30px;
        padding: 0;
        text-align: center;
        vertical-align: middle;
        margin: 0;
        font-size: 20px;
      }

      .thick-border-up {
        border-top: 2px solid black;
      }

      .thick-border-left {
        border-left: 2px solid black;
      }
    `]
})
export class AppComponent {
    rows: string[][];

    ngOnInit() {
        this.rows = [];
        for(var row = 0; row < 9; row++) {
            this.rows[row] = [];
            for(var col = 0; col < 9; col++) {
                this.rows[row][col] = new Cell(row, col, "");
            }
        }
    }

    classFor(cell: Cell) {
      var cls = "";
      if(cell.row == 3 || cell.row == 6) {
        cls = "thick-border-up";
      }
      if(cell.col == 3 || cell.col == 6) {
        cls = cls + " thick-border-left";
      }
      return cls;
    }
}
