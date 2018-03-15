import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ng2-doughnut-chart',
    templateUrl: 'template.html',
})
export class Ng2DoughnutChart {
    // Doughnut
    public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData:number[] = [350, 450, 100];
    public doughnutChartType:string = 'doughnut';

    // Events
    public chartClicked(e:any):void {}

    public chartHovered(e:any):void {}
}