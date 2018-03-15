"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Ng2DoughnutChart = (function () {
    function Ng2DoughnutChart() {
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
    }
    Ng2DoughnutChart.prototype.chartClicked = function (e) { };
    Ng2DoughnutChart.prototype.chartHovered = function (e) { };
    Ng2DoughnutChart = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng2-doughnut-chart',
            templateUrl: 'template.html',
        })
    ], Ng2DoughnutChart);
    return Ng2DoughnutChart;
}());
exports.Ng2DoughnutChart = Ng2DoughnutChart;
//# sourceMappingURL=component.js.map