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
var RowComponent = (function () {
    function RowComponent() {
    }
    RowComponent.prototype.ngOnInit = function () {
        this.cells = [
            { row: this.rowNum, col: 1, value: "" },
            { row: this.rowNum, col: 2, value: "" },
            { row: this.rowNum, col: 3, value: "" },
            { row: this.rowNum, col: 4, value: "" },
            { row: this.rowNum, col: 5, value: "" },
            { row: this.rowNum, col: 6, value: "" },
            { row: this.rowNum, col: 7, value: "" },
            { row: this.rowNum, col: 8, value: "" },
            { row: this.rowNum, col: 9, value: "" }
        ];
    };
    RowComponent = __decorate([
        core_1.Component({
            selector: 'tr',
            template: "\n          <td class=\"{{ (cell.col == 4 || cell.col == 7) ? 'thick-border-left' : '' }}\" contenteditable *ngFor=\"let cell of cells\">{{row}}</td>\n        ",
            styles: ["\n      td{\n        border: 1px solid black;\n        width: 30px;\n        height: 30px;\n        text-align: center;\n        vertical-align: middle;\n        font-size: 20px;\n      }\n\n      td.thick-border-up {\n        border-top: 3px solid black;\n      }\n\n      td.thick-border-left {\n        border-left: 3px solid black;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], RowComponent);
    return RowComponent;
}());
exports.RowComponent = RowComponent;
//# sourceMappingURL=row.component.js.map