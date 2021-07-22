import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SeriesChartComponent } from './series-chart/series-chart.component';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    BarChartComponent,
    PieChartComponent,
    SeriesChartComponent,
  ],
  imports: [CommonModule, NgApexchartsModule],
  providers: [],
  exports: [
    BarChartComponent,
    PieChartComponent,
    SeriesChartComponent,
  ],
})
export class ComponentsChartModule {}
