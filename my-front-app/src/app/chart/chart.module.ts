import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as CanvasJSAngularChart from '../../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [CanvasJSChart],
  imports: [CommonModule,MatTabsModule],
  exports: [CanvasJSChart,MatTabsModule]
})
export class ChartModule { }
