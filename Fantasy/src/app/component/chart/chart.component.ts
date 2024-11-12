import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataset, ChartOptions, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.less'
})
export class ChartComponent implements OnInit {
  myChart: any;

  ngOnInit() {
    console.log("initialise");
    const areaChartLabels = ['GW 1', 'GW 2', 'GW 3', 'GW 4'];
    const areaChartType: ChartType = 'line';
    const areaChartLegend = false;

    Chart.register(...registerables);

    const areaChartData: ChartDataset[] = [
      {
        data: [10, 8, 12, 5],
        label: 'Your points',
        fill: true,
        borderColor: '#f5075b',
        backgroundColor: 'rgba(245, 7, 91, 0.05)',
        tension: 0.4
      },
      {
        data: [5, 10, 10, 8],
        label: 'Avg. points',
        fill: true,
        borderColor: '#6f7071',
        backgroundColor: 'rgba(111, 112, 113, 0.2)',
        borderWidth: 2,
        tension: 0.4
      }
    ];

    this.myChart = new Chart("MyChart", {
      type: areaChartType,
      data: {
        labels: areaChartLabels,
        datasets: areaChartData
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: areaChartLegend
          }
        },
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
            display: false
          }
        }
      }
    });
  }

}
