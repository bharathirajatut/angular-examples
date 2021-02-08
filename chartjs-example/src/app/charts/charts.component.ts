import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  type = 'line';
  data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      borderColor: 'purple', //line color
      pointRadius:4,
      pointBorderColor: 'white',
      pointBackgroundColor:'#cd486b',
      label: "Sales",
      fill:false,
      data: [65, 59, 80, 81, 56, 80, 90]
    }
  ]
};

options = {
  legend: {
    display: true
},
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{ display: true,
                gridLines: {
                    display:false
                }
            }],
    yAxes: [{
                display: true,
                gridLines: {
                    display:false
                }   
            }]
}
}
type1 = 'doughnut';
data1 = {
labels: ["Website", "SEO", "Apps"],
datasets: [
  {
     data: [25,25,50],
     backgroundColor:['#ff0266','#81c784','#29b6f6']
  }
]
};

options1 = {
legend: {
  display: true
},
responsive: true,
maintainAspectRatio: false,
scales: {
  xAxes: [{ display: false,
              gridLines: {
                  display:false
              }
          }],
  yAxes: [{
              display: false,
              gridLines: {
                  display:false
              }   
          }]
}
}
type2 = 'bar';
  data2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {     
      label: "",
      fill:'true',
      backgroundColor: '#2a5bc5',
      data: [65, 59, 80, 81, 56, 55, 90,65,100]
    }
  ]
};

options2 = {
  legend: {
    display: false
},
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{ display: false,
                gridLines: {
                    display:false
                }
            }],
    yAxes: [{
                display: false,
                gridLines: {
                    display:false
                }   
            }]
}
}
type3 = 'bar';
  data3 = {

  
    labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {     
      label: "Branch1",
      fill:'true',
      backgroundColor: '#ff0266',
      data:[10,11,12,13]
    },{
      label: "Branch2",
      fill:'true',
      backgroundColor: '#81c784',
      data:[20,21,22,23]
    },{
      label: "Branch3",
      fill:'true',
      backgroundColor: '#29b6f6',
      data:[31,32,33,34]
    }
  ]
};

options3 = {
  legend: {
    display: true
},
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{ display: true,
                gridLines: {
                    display:false
                }
            }],
    yAxes: [{
                display: true,
                gridLines: {
                    display:false
                }   
            }]
}
}

type4 = 'pie';
  data4 = {

  
    labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      fill:'true',
      backgroundColor: ['#ff0266','#81c784','#29b6f6','#8a3ab9'],
      data:[10,20,30,40]
    }
  ]
};

options4 = {
  legend: {
    display: true
},
  responsive: true,
  maintainAspectRatio: false,
 
}
  constructor() { }

  ngOnInit() {
  }
//horizontalBar Char Data
  horizontalBarData={
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#8a3ab9", "#4c68d7","#cd486b","#fbad50","#bc2a8d"],
        data: [2478,5267,734,784,433]
      }
    ]
  }
  horizontalBarDataOptions={
    legend: { display: true },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{ display: true,
                  gridLines: {
                      display:false
                  }
              }],
      yAxes: [{
                  display: true,
                  gridLines: {
                      display:false
                  }   
              }]
  }
  }


  bubbleData= {
    labels: "Africa",
    datasets: [
      {
        label: ["China"],
        backgroundColor: "#ff0266",
        borderColor: "rgba(255,221,50,1)",
        data: [{
          x: 21269017,
          y: 5.245,
          r: 15
        }]
      }, {
        label: ["Denmark"],
        backgroundColor: "#ffde03",
        borderColor: "rgba(60,186,159,1)",
        data: [{
          x: 258702,
          y: 7.526,
          r: 10
        }]
      }, {
        label: ["Germany"],
        backgroundColor: "#0336ff",
        borderColor: "#000",
        data: [{
          x: 3979083,
          y: 6.994,
          r: 15
        }]
      }, {
        label: ["Japan"],
        backgroundColor: "#8a3ab9",
        borderColor: "rgba(193,46,12,1)",
        data: [{
          x: 4931877,
          y: 5.921,
          r: 15
        }]
      }
    ]
  }
  bubbleOptions= {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }, scales: {
      yAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: "Happiness"
        }
      }],
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: "GDP (PPP)"
        }
      }]
    }
  }

  //stacked bar chart data and options

  stackedBarData = {

  
    labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {     
      label: "Branch1",
      fill:'true',
      backgroundColor: '#ff0266',
      data:[10,5,15,30]
    },{
      label: "Branch2",
      fill:'true',
      backgroundColor: '#81c784',
      data:[20,21,22,23]
    },{
      label: "Branch3",
      fill:'true',
      backgroundColor: '#29b6f6',
      data:[31,32,33,34]
    }
  ]
};
  stackedBaroptions = {
    legend: {
      display: true
  },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{ display: true,
                stacked:true,
                  gridLines: {
                      display:false
                  }
              }],
      yAxes: [{
                  display: true,
                  stacked:true,
                  gridLines: {
                      display:false
                  }   
              }]
  }
  }


  chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };

  mutiLineChartData={

    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      borderColor: this.chartColors.red,
      backgroundColor: this.chartColors.red,
      data: [10, 30, 46, 2, 8, 50, 0],
      fill: false,
    }, {
      label: 'My Second dataset',
      borderColor: this.chartColors.blue,
      backgroundColor: this.chartColors.blue,
      data: [7, 49, 46, 13, 25, 30, 22],
      fill: false,
    }]
  }
  position="bottom"
  mutiLineChartDataoptions= {
    responsive: true,
    title: {
      display: true,
      text: 'Tooltip Position: ' + this.position
    }
  }




}
