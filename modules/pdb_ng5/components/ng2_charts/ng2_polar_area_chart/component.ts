import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ng2-polar-area-chart',
    templateUrl: 'template.html',
})
export class Ng2PolarAreaChart {
    // PolarArea
    public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend:boolean = true;

    public polarAreaChartType:string = 'polarArea';

    // Events
    public chartClicked(e:any):void {}

    public chartHovered(e:any):void {}
}