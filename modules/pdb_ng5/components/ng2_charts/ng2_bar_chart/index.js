"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_charts_1 = require("ng2-charts");
var lazy_load_component_1 = require("helpers/lazy-load-component");
var component_1 = require("./component");
__export(require("./globals"));
var Ng2BarChartModule = (function () {
    function Ng2BarChartModule() {
    }
    Ng2BarChartModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng2_charts_1.ChartsModule,
                http_1.HttpModule
            ],
            providers: [
                { provide: lazy_load_component_1.LazyLoadComponent, useValue: component_1.Ng2BarChart }
            ],
            declarations: [
                component_1.Ng2BarChart
            ],
            entryComponents: [
                component_1.Ng2BarChart
            ]
        })
    ], Ng2BarChartModule);
    return Ng2BarChartModule;
}());
exports.Ng2BarChartModule = Ng2BarChartModule;
//# sourceMappingURL=index.js.map