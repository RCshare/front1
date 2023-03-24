import { Component,OnInit,ChangeDetectorRef,ViewChild, AfterViewInit,ViewChildren, QueryList } from '@angular/core';
import { columnChartOptions } from './options/column-chart-options';
import { lineChartOptions } from './options/line-chart-options';
import { pieChartOptions } from './options/pie-chart-options';
import { ArticleCounts } from '@app/models/interface/article-counts.model';
import { PurchaseService } from '@app/services/purchase-service/purchase.service';
import { Category } from '@app/models/entity/category.entity.model';
import { Article } from '@app/models/entity/article.entity.model';
import { CanvasJSChart } from 'assets/canvasjs.angular.component';

@Component({
  selector: 'app-chart-tile',
  templateUrl: './chart-tile.component.html',
  styleUrls: ['./chart-tile.component.scss']
})
export class ChartTileComponent implements OnInit {

  columnChartOptions = columnChartOptions;
  pieChartOptions = pieChartOptions;
  lineChartOptions = lineChartOptions;

  @ViewChildren(CanvasJSChart) charts!: QueryList<CanvasJSChart>;

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.purchaseService.getPurchasedArticlesByCategory().subscribe((categories: Category[]) => {
      const columnChartDataPoints: { label: string; y: number; }[] = [];
      const pieChartDataPoints: { label: string; y: number; }[] = [];
      const lineChartDataPoints: { label: string; y: number; }[] = [];

      categories.forEach((category) => {
        const articleCount = category.articles ? category.articles.length : 0;

        // Column chart data
        const columnChartDataPoint = { label: category.name, y: articleCount };
        columnChartDataPoints.push(columnChartDataPoint);

        // Pie chart data
        const totalPrices = (category.articles ?? []).reduce((acc, article) => acc + article.price, 0);
        const pieChartDataPoint = { label: category.name, y: totalPrices };
        pieChartDataPoints.push(pieChartDataPoint);

        // Line chart data
        const lineChartDataPoint = { label: category.name, y: articleCount };
        lineChartDataPoints.push(lineChartDataPoint);
      });

      // Update chart options with the new data
      this.columnChartOptions.data[0].dataPoints = columnChartDataPoints;
      this.pieChartOptions.data[0].dataPoints = pieChartDataPoints;
      this.lineChartOptions.data[0].dataPoints = lineChartDataPoints;

      // Render charts with updated data
      this.renderCharts();
    });
  }

  renderCharts(): void {
    if (this.charts) {
      this.charts.forEach((chart) => {
        if (chart.chart) {
          chart.chart.render();
        }
      });
    }
  }
}
