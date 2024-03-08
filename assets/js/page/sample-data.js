// Function to generate random data points within a range
function generateRandomDataPoint(min, max) {
  return Math.random() * (max - min) + min;
}

// Sample data with 4 clusters
const data = {
  datasets: [{
    label: 'Cluster 1',
    data: Array.from({ length: 10 }, () => ({ x: generateRandomDataPoint(10, 50), y: generateRandomDataPoint(20, 80) })),
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }, {
    label: 'Cluster 2',
    data: Array.from({ length: 10 }, () => ({ x: generateRandomDataPoint(30, 70), y: generateRandomDataPoint(30, 90) })),
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }, {
    label: 'Cluster 3',
    data: Array.from({ length: 10 }, () => ({ x: generateRandomDataPoint(50, 90), y: generateRandomDataPoint(60, 120) })),
    backgroundColor: 'rgba(255, 206, 86, 0.5)',
    borderColor: 'rgba(255, 206, 86, 1)',
    borderWidth: 1
  }, {
    label: 'Cluster 4',
    data: Array.from({ length: 10 }, () => ({ x: generateRandomDataPoint(70, 110), y: generateRandomDataPoint(20, 80) })),
    backgroundColor: 'rgba(75, 192, 192, 0.5)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};

// Chart configuration
const config = {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        grid: {
          display: false
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        grid: {
          display: false
        }
      }
    }
  }
};

// Initialize Chart.js
var scatterplot = new Chart(
  document.getElementById('scatterplot'),
  config
);

var scatterplot2 = new Chart(
  document.getElementById('scatterplot2'),
  config
);

var scatterplot2 = new Chart(
  document.getElementById('scatterplot3'),
  config
);


var ctx = document.getElementById("totalMediaShare").getContext('2d');
var totalMediaShare = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [{
      label: 'Anies - Imin',
      data: [3200, 1800, 4305, 3022, 6310, 5120, 5880, 6154],
      borderWidth: 2,
      backgroundColor: 'rgba(63,82,227,.8)',
      borderWidth: 0,
      borderColor: 'transparent',
      pointBorderWidth: 0,
      pointRadius: 3.5,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(63,82,227,.8)',
    },
    {
      label: 'Prabowo - Gibran',
      data: [2207, 3403, 2200, 5025, 2302, 4208, 3880, 4880],
      borderWidth: 2,
      backgroundColor: 'rgba(254,86,83,.7)',
      borderWidth: 0,
      borderColor: 'transparent',
      pointBorderWidth: 0 ,
      pointRadius: 3.5,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(254,86,83,.8)',
    },
    {
      label: 'Prabowo - Gibran',
      data: [5025, 4208, 3403,2207,4880, 2200, 2302, 3880],
      borderWidth: 2,
      backgroundColor: 'rgba(254,86,83,.7)',
      borderWidth: 0,
      borderColor: 'transparent',
      pointBorderWidth: 0 ,
      pointRadius: 3.5,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(254,86,83,.8)',
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          // display: false,
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1500,
          callback: function(value, index, values) {
            return '$' + value;
          }
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          tickMarkLength: 15,
        }
      }]
    },
  }
});

