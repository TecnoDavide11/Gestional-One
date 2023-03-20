import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartDataset, ChartOptions, ChartType} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { NgChartsModule } from 'ng2-charts';
import { trigger, transition, style, animate } from '@angular/animations';




@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
    animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})

export class DashComponent {

  @ViewChild('pieChart') pieChartRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const pieChartCtx:any = this.pieChartRef.nativeElement.getContext('2d');
    const pieChartData = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [{
        data: [10, 20, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    };
    const pieChartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
    new Chart(pieChartCtx, {
      type: 'pie',
      data: pieChartData,
      options: pieChartOptions
    });
  }




    // properti del grafico a barre
    public barChartOptions: ChartOptions = {
      responsive: true,
      plugins: {
        datalabels: {
          display: false
        }
      }

    };
    public barChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartData: ChartDataset[] = [
      { data: [10, 20, 30, 40], label: 'Series A' },
      { data: [20, 30, 40, 50], label: 'Series B' }
    ];



}
