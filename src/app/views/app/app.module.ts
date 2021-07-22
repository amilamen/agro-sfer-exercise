import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import {
  BsDatepickerModule,
} from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    ComponentsChartModule,
    LayoutContainersModule,
  ],
})
export class AppModule {}
