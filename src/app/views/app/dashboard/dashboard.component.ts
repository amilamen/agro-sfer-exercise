import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartService } from 'src/app/components/charts/chart.service';
import {
  barChartData,
  pieChartData,
  barChartDataFarmer,
} from 'src/app/data/charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  chartDataConfig: ChartService;

  barChartData = barChartData;
  barChartDataFarmer = barChartDataFarmer;
  pieChartData = pieChartData;

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  ngOnInit(): void {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  constructor(private chartService: ChartService) {
    this.chartDataConfig = this.chartService;
  }
}
