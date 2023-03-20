export const lineChartOptions = {
    animationEnabled: true,
    title: {
      fontFamily: "Arial",
      fontColor: "white",
      text: 'Angular Line Chart in Material UI Tabs',
    },
    theme: 'light2',
    data: [{
      type: 'line',
      dataPoints: [
        { label: 'apple', y: 10 },
        { label: 'orange', y: 15 },
        { label: 'banana', y: 25 },
        { label: 'mango', y: 30 },
        { label: 'grape', y: 28 },
      ],
    }],
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    margin: { left: 10, right: 10, top: 10, bottom: 10 },
    axisX: {
      label: { fontFamily: "Open Sans", fontSize: 12, fontColor: "#ffffff" },
    },
    axisY: {
      label: { fontFamily: "Open Sans", fontSize: 12, fontColor: "#ffffff" },
    },
  };
  