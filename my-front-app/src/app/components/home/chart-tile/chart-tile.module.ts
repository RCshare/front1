import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as CanvasJSAngularChart from '../../../../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { MatTabsModule } from '@angular/material/tabs';
import { ChartTileComponent } from '@components/home/chart-tile/chart-tile.component';


@NgModule({
  declarations: [CanvasJSChart,ChartTileComponent],
  imports: [CommonModule,MatTabsModule],
  exports: [CanvasJSChart,MatTabsModule,ChartTileComponent]
})
export class ChartModule { }
