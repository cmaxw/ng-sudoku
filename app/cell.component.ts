import { Component } from '@angular/core';


@Component({
    selector: 'cell',
    template: '<td>{{value}}</td>'
})
export class CellComponent {
       row: number;
       col: number;
       value: string;
}