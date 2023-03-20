export const pieChartOptions = {
    animationEnabled: true,
    title: {
      fontFamily: "Arial",
      fontColor: "white",
      text: 'Angular Pie Chart in Material UI Tabs',
    },
    theme: 'light2',
    legend: {
      fontFamily: "Open Sans",
      fontColor: "white",
      horizontalAlign: "center",
      verticalAlign: "bottom",
      maxWidth: 400,
      itemWrap: true
    },
    data: [
      {
        type: 'pie',
        indexLabelPlacement: "inside",
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    margin: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
    axisX: {
      labelFontFamily: "Open Sans",
      labelFontSize: 12,
      labelFontColor: "#ffffff",
    },
    axisY: {
      labelFontFamily: "Open Sans",
      labelFontSize: 12,
      labelFontColor: "#ffffff",
    },
  };
  