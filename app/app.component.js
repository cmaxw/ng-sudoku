"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.row1 = ROW1;
        this.row2 = ROW2;
        this.row3 = ROW3;
        this.row4 = ROW4;
        this.row5 = ROW5;
        this.row6 = ROW6;
        this.row7 = ROW7;
        this.row8 = ROW8;
        this.row9 = ROW9;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<table>\n      <tbody>\n        <tr>\n          <td class=\"{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}\" contenteditable *ngFor=\"let cell of row1\">1</td>\n        </tr>\n        <tr>\n          <td class=\"{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}\" contenteditable *ngFor=\"let cell of row2\"></td>\n        </tr>\n        <tr>\n          <td class=\"{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}\" contenteditable *ngFor=\"let cell of row3\"></td>\n        </tr>\n        <tr>\n          <td class=\"thick-border-up {{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}\" contenteditable *ngFor=\"let cell of row4\"></td>\n        </tr>\n        <tr>\n          <td class=\"{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}\" contenteditable *ngFor=\"let cell of row5\"></td>\n        </tr>\n        <tr>\n          <td class=\"{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}\" contenteditable *ngFor=\"let cell of row6\"></td>\n        </tr>\n        <tr>\n          <td class=\"thick-border-up {{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}\" contenteditable *ngFor=\"let cell of row7\"></td>\n        </tr>\n        <tr>\n          <td class=\"{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}\" contenteditable *ngFor=\"let cell of row8\"></td>\n        </tr>\n        <tr>\n          <td class=\"{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}\" contenteditable *ngFor=\"let cell of row9\"></td>\n        </tr>\n      </tbody>\n    </table>",
            styles: ["\n      table {\n        border: 3px solid black;\n        border-collapse: collapse;\n      }\n\n      td{\n        border: 1px solid black;\n        width: 30px;\n        height: 30px;\n        text-align: center;\n        vertical-align: middle;\n        font-size: 20px;\n      }\n\n      td.thick-border-up {\n        border-top: 3px solid black;\n      }\n\n      td.thick-border-left {\n        border-left: 3px solid black;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var ROW1 = [
    { row: 1, col: 1, value: "" },
    { row: 1, col: 2, value: "" },
    { row: 1, col: 3, value: "" },
    { row: 1, col: 4, value: "" },
    { row: 1, col: 5, value: "" },
    { row: 1, col: 6, value: "" },
    { row: 1, col: 7, value: "" },
    { row: 1, col: 8, value: "" },
    { row: 1, col: 9, value: "" },
];
var ROW2 = [
    { row: 2, col: 1, value: "" },
    { row: 2, col: 2, value: "" },
    { row: 2, col: 3, value: "" },
    { row: 2, col: 4, value: "" },
    { row: 2, col: 5, value: "" },
    { row: 2, col: 6, value: "" },
    { row: 2, col: 7, value: "" },
    { row: 2, col: 8, value: "" },
    { row: 2, col: 9, value: "" },
];
var ROW3 = [
    { row: 3, col: 1, value: "" },
    { row: 3, col: 2, value: "" },
    { row: 3, col: 3, value: "" },
    { row: 3, col: 4, value: "" },
    { row: 3, col: 5, value: "" },
    { row: 3, col: 6, value: "" },
    { row: 3, col: 7, value: "" },
    { row: 3, col: 8, value: "" },
    { row: 3, col: 9, value: "" },
];
var ROW4 = [
    { row: 4, col: 1, value: "" },
    { row: 4, col: 2, value: "" },
    { row: 4, col: 3, value: "" },
    { row: 4, col: 4, value: "" },
    { row: 4, col: 5, value: "" },
    { row: 4, col: 6, value: "" },
    { row: 4, col: 7, value: "" },
    { row: 4, col: 8, value: "" },
    { row: 4, col: 9, value: "" },
];
var ROW5 = [
    { row: 5, col: 1, value: "" },
    { row: 5, col: 2, value: "" },
    { row: 5, col: 3, value: "" },
    { row: 5, col: 4, value: "" },
    { row: 5, col: 5, value: "" },
    { row: 5, col: 6, value: "" },
    { row: 5, col: 7, value: "" },
    { row: 5, col: 8, value: "" },
    { row: 5, col: 9, value: "" },
];
var ROW6 = [
    { row: 6, col: 1, value: "" },
    { row: 6, col: 2, value: "" },
    { row: 6, col: 3, value: "" },
    { row: 6, col: 4, value: "" },
    { row: 6, col: 5, value: "" },
    { row: 6, col: 6, value: "" },
    { row: 6, col: 7, value: "" },
    { row: 6, col: 8, value: "" },
    { row: 6, col: 9, value: "" },
];
var ROW7 = [
    { row: 7, col: 1, value: "" },
    { row: 7, col: 2, value: "" },
    { row: 7, col: 3, value: "" },
    { row: 7, col: 4, value: "" },
    { row: 7, col: 5, value: "" },
    { row: 7, col: 6, value: "" },
    { row: 7, col: 7, value: "" },
    { row: 7, col: 8, value: "" },
    { row: 7, col: 9, value: "" },
];
var ROW8 = [
    { row: 8, col: 1, value: "" },
    { row: 8, col: 2, value: "" },
    { row: 8, col: 3, value: "" },
    { row: 8, col: 4, value: "" },
    { row: 8, col: 5, value: "" },
    { row: 8, col: 6, value: "" },
    { row: 8, col: 7, value: "" },
    { row: 8, col: 8, value: "" },
    { row: 8, col: 9, value: "" },
];
var ROW9 = [
    { row: 9, col: 1, value: "" },
    { row: 9, col: 2, value: "" },
    { row: 9, col: 3, value: "" },
    { row: 9, col: 4, value: "" },
    { row: 9, col: 5, value: "" },
    { row: 9, col: 6, value: "" },
    { row: 9, col: 7, value: "" },
    { row: 9, col: 8, value: "" },
    { row: 9, col: 9, value: "" },
];
//# sourceMappingURL=app.component.js.map