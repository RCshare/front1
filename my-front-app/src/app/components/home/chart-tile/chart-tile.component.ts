import { Component,OnInit } from '@angular/core';
import { UserFavoriteEntity } from '@app/models/entity/user-favorite.entity.model';
import { UserFavoriteService } from '@app/services/user-favorite-service/user-favorite.service';
import { columnChartOptions } from './options/column-chart-options';
import { lineChartOptions } from './options/line-chart-options';
import { pieChartOptions } from './options/pie-chart-options';
import { ArticleCounts } from '@app/models/interface/article-counts.model';

@Component({
  selector: 'app-chart-tile',
  templateUrl: './chart-tile.component.html',
  styleUrls: ['./chart-tile.component.scss']
})
export class ChartTileComponent implements OnInit  {

        
  columnChartOptions = columnChartOptions;
  pieChartOptions = pieChartOptions;
  lineChartOptions = lineChartOptions;

  constructor(private userFavoriteService: UserFavoriteService) { }

  ngOnInit(): void {
    this.userFavoriteService.getUserFavoritesByIdUser(1)
    .subscribe((userFavorites: UserFavoriteEntity[]) => {
      // Calculer le nombre total de chaque article dans la liste des favoris de l'utilisateur
      const articleCounts: ArticleCounts = userFavorites.reduce((accumulator: ArticleCounts, favorite) => {
        const articleName = favorite.article.name;
        accumulator[articleName] = accumulator[articleName] ? accumulator[articleName] + 1 : 1;
        return accumulator;
      }, {});

      // Mettre à jour les données des graphiques avec les données calculées
      this.columnChartOptions.data[0].dataPoints = Object.entries(articleCounts).map(([articleName, count]) => {
        return { label: articleName, y: count };
      });
      this.pieChartOptions.data[0].dataPoints = Object.entries(articleCounts).map(([articleName, count]) => {
        return { label: articleName, y: count };
      });
      this.lineChartOptions.data[0].dataPoints = Object.entries(articleCounts).map(([articleName, count]) => {
        return { label: articleName, y: count };
      });
    });
}
}
