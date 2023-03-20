import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(private router: Router) {}


  columnChartOptions = {
    animationEnabled: true,
    title: {
      fontFamily: "Arial", // Ajoutez la famille de police souhaitée ici, par exemple : "Arial", "Verdana", "Tahoma", etc.
      fontColor: "white",
      text: 'Angular Column Chart in Material UI Tabs',
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: 'column',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Pour correspondre à la couleur de fond de votre application
    margin: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
    axisX: {
      labelFontFamily: "Open Sans", // La police utilisée dans votre application
      labelFontSize: 12, // La taille de la police
      labelFontColor: "#ffffff", // La couleur de la police
    },
    axisY: {
      labelFontFamily: "Open Sans",
      labelFontSize: 12,
      labelFontColor: "#ffffff",
    },
  };

  pieChartOptions = {
    animationEnabled: true,
    title: {
      fontFamily: "Arial", // Ajoutez la famille de police souhaitée ici, par exemple : "Arial", "Verdana", "Tahoma", etc.
      fontColor: "white",
      text: 'Angular Pie Chart in Material UI Tabs',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
      {
        type: 'pie',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Pour correspondre à la couleur de fond de votre application
    margin: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
    axisX: {
      labelFontFamily: "Open Sans", // La police utilisée dans votre application
      labelFontSize: 12, // La taille de la police
      labelFontColor: "#ffffff", // La couleur de la police
    },
    axisY: {
      labelFontFamily: "Open Sans",
      labelFontSize: 12,
      labelFontColor: "#ffffff",
    },
  };

  lineChartOptions = {
    animationEnabled: true,
    title: {
      fontFamily: "Arial", // Ajoutez la famille de police souhaitée ici, par exemple : "Arial", "Verdana", "Tahoma", etc.
      fontColor: "white",
      text: 'Angular Line Chart in Material UI Tabs',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
      {
        type: 'line',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Pour correspondre à la couleur de fond de votre application
    margin: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
    axisX: {
      labelFontFamily: "Open Sans", // La police utilisée dans votre application
      labelFontSize: 12, // La taille de la police
      labelFontColor: "#ffffff", // La couleur de la police
    },
    axisY: {
      labelFontFamily: "Open Sans",
      labelFontSize: 12,
      labelFontColor: "#ffffff",
    },
  };


  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
