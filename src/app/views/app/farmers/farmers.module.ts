import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmersComponent } from './farmers.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FarmersRoutingModule } from './farmers.routing';
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { FormsModule } from '@angular/forms';
import { BioComponent } from './bio/bio.component';
import { InformationsComponent } from './informations/informations.component';
import { FarmsComponent } from './farms/farms.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    FarmersComponent,
    BioComponent,
    InformationsComponent,
    FarmsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule.forRoot(),
    ComponentsChartModule,
    LayoutContainersModule,
    FarmersRoutingModule,
    PerfectScrollbarModule,
  ],
})
export class FarmersModule {}
