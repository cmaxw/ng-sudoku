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
var cell_1 = require('./cell');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.rows = [];
        for (var row = 0; row < 9; row++) {
            this.rows[row] = [];
            for (var col = 0; col < 9; col++) {
                this.rows[row][col] = new cell_1.Cell(row, col, "");
            }
        }
    };
    AppComponent.prototype.classFor = function (cell) {
        var cls = "";
        if (cell.row == 3 || cell.row == 6) {
            cls = "thick-border-up";
        }
        if (cell.col == 3 || cell.col == 6) {
            cls = cls + " thick-border-left";
        }
        return cls;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<table>\n      <tbody>\n        <tr *ngFor=\"let row of rows\">\n          <td *ngFor=\"let cell of row\">\n            <div contenteditable class=\"{{classFor(cell)}}\">\n              {{cell.value}}\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>",
            styles: ["\n      table {\n        border: 3px solid black;\n        border-collapse: collapse;\n      }\n\n      td{\n        border: 1px solid black;\n        width: 30px;\n        height: 30px;\n        padding: 0;\n        margin: 0;\n        text-align: center;\n        vertical-align: middle;\n     }\n\n     td div{\n        width: 30px;\n        height: 30px;\n        padding: 0;\n        text-align: center;\n        vertical-align: middle;\n        margin: 0;\n        font-size: 20px;\n      }\n\n      .thick-border-up {\n        border-top: 2px solid black;\n      }\n\n      .thick-border-left {\n        border-left: 2px solid black;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map