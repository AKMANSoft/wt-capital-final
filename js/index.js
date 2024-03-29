// MEDIA RENTAL BAR CHART
    const chartRentalData = {
        labels: ['Mar 19 - 20', 'Apr 19 - 20', 'May 19 - 20', 'Jun 19 - 20', 'Jul 19 - 20'],
        datasets: [{
            label: 'Median Sale Price',
            data: [450, 351, 500, 330, 435],
            backgroundColor: '#19271F',
            borderColor: '#19271F',
            borderWidth: 1,
            barThickness: 73
        }]
    };

    const chartRentalOptions = {
        scales: {
            y: {
                min:100,
                max:550,
                ticks: {
                    stepSize: 50,
                    callback: function(value, index, values) {
                        return value.toLocaleString();
                    },
                    color: 'tarnsparent'
                },
                grid: {
                    display: true, 
                    drawBorder: false 
                }
            },
            x: {
                grid: {
                    display: false, 
                    drawBorder: false 
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: false
            },
            datalabels: {
                anchor: 'end',
                align: 'bottom',
                color: 'white',
                formatter: function(value, context) {
                    return '$' + value.toLocaleString();
                }
            }
        }
    };

    const ctxRental = document.getElementById('medianRentalPriceChart').getContext('2d');
    const medianRentalPriceChart = new Chart(ctxRental, {
        type: 'bar',
        data: chartRentalData,
        options: chartRentalOptions,
        plugins: [ChartDataLabels]
    });



// MEDIA SALE CHART
    const chartSaleData = {
        labels: ['Mar 19 - 20', 'Apr 19 - 20', 'May 19 - 20', 'Jun 19 - 20', 'Jul 19 - 20'],
        datasets: [{
            label: 'Median Sale Price',
            data: [290000, 410000, 320000, 370000, 410000],
            backgroundColor: '#19271F',
            borderColor: '#19271F',
            borderWidth: 1,
            barThickness: 73
        }]
    };

    const chartSaleOptions = {
        scales: {
            y: {
                min: 240000,
                max: 420000,
                ticks: {
                    stepSize: 20000,
                    callback: function(value, index, values) {
                        return value.toLocaleString();
                    },
                    color: 'tarnsparent'
                },
                grid: {
                    display: true, 
                    drawBorder: false 
                }
            },
            x: {
                grid: {
                    display: false, 
                    drawBorder: false 
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: true 
            },
            legend: {
                display: false 
            },
            datalabels: {
                anchor: 'end',
                align: 'bottom',
                color: 'white',
                formatter: function(value, context) {
                    return '$' + value.toLocaleString();
                }
            }
        }
    };

    const ctxSale = document.getElementById('medianSalePriceChart').getContext('2d');
    const medianSalePriceChart = new Chart(ctxSale, {
        type: 'bar',
        data: chartSaleData,
        options: chartSaleOptions,
        plugins: [ChartDataLabels]
    });



// SUPPLY CHART
const chartSupplyData = {
    labels: ['Apr 23', 'May 23', 'Jun 23', 'Jul 23', 'Aug 23', 'Sep 23', 'Oct 23', 'Nov 23', 'Dec 23', 'Jan 23', 'Feb 23'],
    datasets: [{
        label: 'Median Sale Price',
        data: [120, 200, 300, 200, 300, 400, 300, 100, 300, 200, 300],
        backgroundColor: '#19271F',
        borderColor: '#19271F',
        borderWidth: 1,
        barThickness: 40
    }]
};

const chartSupplyOptions = {
    scales: {
        y: {
            min: 0,
            max: 500,
            ticks: {
                stepSize: 100,
                callback: function(value, index, values) {
                    return value.toLocaleString();
                },
                color: 'tarnsparent'
            },
            grid: {
                display: true, 
                drawBorder: false 
            }
        },
        x: {
            grid: {
                display: false, 
                drawBorder: false 
            }
        }
    },
    plugins: {
        tooltip: {
            enabled: true
        },
        legend: {
            display: false
        },
        datalabels: {
            anchor: 'end',
            align: 'end',
            color: '#3FBE12',
            formatter: function(value, context) {
                return "+"+parseInt((value.toLocaleString()/1000)*100) +'%';
            }
        },
        labels: {
            title: {
                font: {
                    weight: 'bold'
                }
            }
        }
    }
};

const ctxSupply = document.getElementById('supplyChart').getContext('2d');
const medianSupplyPriceChart = new Chart(ctxSupply, {
    type: 'bar',
    data: chartSupplyData,
    options: chartSupplyOptions,
    plugins: [ChartDataLabels]
});


// DEMAND CHART
const chartDemandData = {
    labels: ['Apr 23', 'May 23', 'Jun 23', 'Jul 23', 'Aug 23', 'Sep 23', 'Oct 23', 'Nov 23', 'Dec 23', 'Jan 23', 'Feb 23'],
    datasets: [{
        label: 'Median Sale Price',
        data: [120, 200, 300, 200, 300, 400, 300, 100, 300, 200, 300],
        backgroundColor: '#19271F',
        borderColor: '#19271F',
        borderWidth: 1,
        barThickness: 40
    }]
};

const chartDemandOptions = {
    scales: {
        y: {
            min: 0,
            max: 500,
            ticks: {
                stepSize: 100,
                callback: function(value, index, values) {
                    return value.toLocaleString();
                },
                color: 'tarnsparent'
            },
            grid: {
                display: true, 
                drawBorder: false 
            }
        },
        x: {
            grid: {
                display: false, 
                drawBorder: false 
            }
        }
    },
    plugins: {
        tooltip: {
            enabled: true
        },
        legend: {
            display: false
        },
        datalabels: {
            anchor: 'end',
            align: 'end',
            color: '#3FBE12',
            formatter: function(value, context) {
                return "+"+parseInt((value.toLocaleString()/1000)*100) +'%';
            }
        },
        labels: {
            title: {
                font: {
                    weight: 'bold'
                }
            }
        }
    }
};

const ctxDemand = document.getElementById('demandChart').getContext('2d');
const medianDemandPriceChart = new Chart(ctxDemand, {
    type: 'bar',
    data: chartSupplyData,
    options: chartSupplyOptions,
    plugins: [ChartDataLabels]
});






// GUAGE CHART
const data = {
    labels: [6,8,6],
    datasets: [{
      label: 'Weekly Sales',
      data: [10, 6, 10],
      backgroundColor: [
        '#C4D56D',
        '#F3EE60',
        '#DD5855',
      ],
      borderColor: [
        '#C4D56D',
        '#F3EE60',
        '#DD5855',
      ],
      borderWidth: 1,
      circumference: 180,
      rotation: 270,
      cutout: '84%',
      needleValue: 13
    }]
  };

  const guageNeedle = {
    id: 'guageNeedle',
    afterDatasetsDraw(chart, args, plugins) {
        const{ ctx, data } = chart
        ctx.save()
        const xCenter = chart.getDatasetMeta(0).data[0].x
        const yCenter = chart.getDatasetMeta(0).data[0].y
        const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius
        const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius
        const widthSlice = (outerRadius - innerRadius)/2
        const radius = 25
        const angle = Math.PI / 180

        const needleValue = data.datasets[0].needleValue

        const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0)

        const circumference = ((chart.getDatasetMeta(0).data[0].circumference / Math.PI) / data.datasets[0].data[0]) * needleValue

        ctx.translate(xCenter, yCenter)
        ctx.rotate(Math.PI * (circumference + 1.5))

        ctx.beginPath()
        ctx.strokeStyle = '#020302'
        ctx.fillStyle = '#020302'
        // ctx.lineWidth = 3
        ctx.moveTo(0 - 8, 0)
        ctx.lineTo(0, 0 - innerRadius +40)
        ctx.lineTo(0 + 8, 0)
        // ctx.closePath()
        ctx.stroke()
        ctx.fill()

        
        ctx.beginPath()
        // ctx.arc(x, y, radius, angleStart, angleEnd, vfalse)
        ctx.arc(0, 0, radius, 0, angle * 360, false)
        ctx.fill()

        ctx.beginPath()
        // ctx.arc(x, y, radius, angleStart, angleEnd, vfalse)
        ctx.arc(0, 0, 12, 0, angle * 360, false)
        ctx.fillStyle = 'white'
        ctx.fill()
        
        ctx.restore()
    }
  }

  const guageFlowMeter = {
    id: 'guageFlowMeter',
    afterDatasetsDraw(chart, args, plugins) {
        const{ ctx, data } = chart

        ctx.save()
        const needleValue = data.datasets[0].needleValue
        const xCenter = chart.getDatasetMeta(0).data[0].x
        const yCenter = chart.getDatasetMeta(0).data[0].y

        const circumference = ((chart.getDatasetMeta(0).data[0].circumference / Math.PI) / data.datasets[0].data[0]) * needleValue
        const perValue = circumference * 100
        ctx.font = "43px Sculpin"
        ctx.fillStyle = '#020302'
        ctx.textAlign = 'center'
        ctx.fillText(6.91, xCenter, yCenter + 80)
    }
  }

  const guageLables = {
    id: 'guageLables',
    afterDatasetsDraw(chart, args, plugins) {
        const{ ctx, chartArea: {left, right} } = chart
        const xCenter = chart.getDatasetMeta(0).data[0].x
        const yCenter = chart.getDatasetMeta(0).data[0].y

        const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius
        const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius
        const widthSlice = (outerRadius - innerRadius)/2
        ctx.translate(xCenter, yCenter)
        ctx.font = "bold 15px sans-serif"
        ctx.fillStyle = 'grey'
        ctx.textAlign = 'left'
        ctx.fillText('5.0', 0 - outerRadius-40, 0)
        ctx.fillText('5.5', 0 - outerRadius-40, 0)
        // ctx.fillText('6.0', 0 - outerRadius+300, -480)
        // ctx.fillText('6.5', 0 - outerRadius+300, -480)
        // ctx.fillText('6.0', 0 + innerRadius + widthSlice, 0 + 20)

        ctx.restore()
    }
  }

  const config = {
    type: 'doughnut',
    data,
    options: {
        layout: {
            padding: {
                left: 50,
                right: 50,
                // top: 0,
                bottom: 20
            }
        },
      aspectRatio: 1.5,
      plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        }
      }
    },
    plugins: [guageNeedle, guageFlowMeter, guageLables]
  };

//   const myChart = new Chart(
//     document.getElementById('guageChart'),
//     config
//   );
//   const chartVersion = document.getElementById('chartVersion');




//   GRADIENT GUAGE CHART
  function createGradient(chart) {
    const{ ctx, chartArea: {left, right} } = chart
    // const gradientSegment = ctx.createElement('canvas').getContext('2d');
    const gradient = ctx.createLinearGradient(left, 0, right, 0);
    gradient.addColorStop(0, "#F0D251");
    gradient.addColorStop(0.5, "#91CF4B");
    gradient.addColorStop(1, "#E97634");
    return gradient;
}

const gradientChartData = {
    labels: [6,8,6],
    datasets: [{
      label: 'Weekly Sales',
      data: [9, 8, 9],
      backgroundColor: (context) => {
        const chart = context.chart
        const { ctx, chartArea } = chart

        if(!chartArea) return null

        if(chartArea.dataIndex !== 0) {
            return createGradient(chart)
        }else{
            return 'black'
        }
      },
      borderWidth: 1,
      circumference: 180,
      rotation: 270,
      cutout: '84%',
      needleValue: 13
    }]
  };

  const gradientGuageNeedle = {
    id: 'gradientGuageNeedle',
    afterDatasetsDraw(chart, args, plugins) {
        const{ ctx, data } = chart
        ctx.save()
        const xCenter = chart.getDatasetMeta(0).data[0]?.x
        const yCenter = chart.getDatasetMeta(0).data[0]?.y
        const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius
        const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius
        const widthSlice = (outerRadius - innerRadius)/2
        const radius = 25
        const angle = Math.PI / 180

        const needleValue = data.datasets[0].needleValue

        const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0)

        const circumference = ((chart.getDatasetMeta(0).data[0].circumference / Math.PI) / data.datasets[0].data[0]) * needleValue

        ctx.translate(xCenter, yCenter)
        ctx.rotate(Math.PI * (circumference + 1.5))

        ctx.beginPath()
        ctx.strokeStyle = '#020302'
        ctx.fillStyle = '#020302'
        // ctx.lineWidth = 3
        ctx.moveTo(0 - 8, 0)
        ctx.lineTo(0, 0 - innerRadius +40)
        ctx.lineTo(0 + 8, 0)
        // ctx.closePath()
        ctx.stroke()
        ctx.fill()

        
        ctx.beginPath()
        // ctx.arc(x, y, radius, angleStart, angleEnd, vfalse)
        ctx.arc(0, 0, radius, 0, angle * 360, false)
        ctx.fill()

        ctx.beginPath()
        // ctx.arc(x, y, radius, angleStart, angleEnd, vfalse)
        ctx.arc(0, 0, 12, 0, angle * 360, false)
        ctx.fillStyle = 'white'
        ctx.fill()
        
        ctx.restore()
    }
  }

  const gradientGuageFlowMeter = {
    id: 'guageFlowMeter',
    afterDatasetsDraw(chart, args, plugins) {
        const{ ctx, data } = chart

        ctx.save()
        const needleValue = data.datasets[0].needleValue
        const xCenter = chart.getDatasetMeta(0).data[0].x
        const yCenter = chart.getDatasetMeta(0).data[0].y

        const circumference = ((chart.getDatasetMeta(0).data[0].circumference / Math.PI) / data.datasets[0].data[0]) * needleValue
        const perValue = circumference * 100
        ctx.font = "43px Sculpin"
        ctx.fillStyle = '#020302'
        ctx.textAlign = 'center'
        ctx.fillText("$840,000", xCenter, yCenter + 80)
    }
  }

  const gradientGuageLables = {
    id: 'guageLables',
    afterDatasetsDraw(chart, args, plugins) {
        const{ ctx, chartArea: {left, right} } = chart
        const xCenter = chart.getDatasetMeta(0).data[0].x
        const yCenter = chart.getDatasetMeta(0).data[0].y

        const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius
        const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius
        const widthSlice = (outerRadius - innerRadius)/2
        ctx.translate(xCenter, yCenter)
        ctx.font = "bold 15px sans-serif"
        ctx.fillStyle = 'grey'
        ctx.textAlign = 'left'
        ctx.fillText('5.0', 0 - outerRadius-40, 0)
        ctx.fillText('5.5', 0 - outerRadius-40, 0)
        // ctx.fillText('6.0', 0 - outerRadius+300, -480)
        // ctx.fillText('6.5', 0 - outerRadius+300, -480)
        // ctx.fillText('6.0', 0 + innerRadius + widthSlice, 0 + 20)

        ctx.restore()
    }
  }
 
  const gradientConfig = {
    type: 'doughnut',
    data: gradientChartData,
    options: {
        layout: {
            padding: {
                left: 50,
                right: 50,
                // top: 0,
                bottom: 20
            }
        },
      aspectRatio: 1.5,
      plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        }
      }
    },
    plugins: [gradientGuageNeedle, gradientGuageFlowMeter, gradientGuageLables]
  };

//   const gradientChart = new Chart(
//     document.getElementById('guageChartGradient'),
//     gradientConfig
//   );
//   const gradientChartVersion = document.getElementById('chartVersion');






const scrnWidth = window.innerWidth

Highcharts.chart('container', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '81%',
        // width: '60%'
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ['50%', '75%'],
        size: '115%',
    },

    // the value axis
    yAxis: {
        min: 5,
        max: 7.5,
        tickPixelInterval: scrnWidth > 1330 ? 250 : scrnWidth > 1155 ? 200 : scrnWidth > 945 ? 150 : 100,
        tickPosition: 'outside',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 1,
        minorTickInterval: null,
        labels: {
            distance: scrnWidth > 1330 ? 30 : 25,
            style: {
                fontSize: scrnWidth > 1330 ? '25px' : scrnWidth > 1155 ? '20px' : '15px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 5.0,
            to: 6.0,
            color: '#C4D56D', // green
            thickness: 55
        }, {
            from: 6.0,
            to: 6.5,
            color: '#F3EE60', // yellow
            thickness: 55
        }, {
            from: 6.5,
            to: 7.5,
            color: '#DD5855', // red
            thickness: 55
        }]
    },

    series: [{
        name: 'Speed',
        data: [6.91],
        tooltip: {
            valueSuffix: ''
        },
        dataLabels: {
            format: '{y}',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '43px',
                fontFamily: 'Sculpin'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'black',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'black',
            radius: 25
        }

    }]

});


Highcharts.chart('container2', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '81%',
        // width: '60%'
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ['50%', '75%'],
        size: '115%',
    },

    // the value axis
    yAxis: {
        min: 830000,
        max: 850000,
        tickPixelInterval: scrnWidth > 1330 ? 300 : scrnWidth > 1155 ? 200 : scrnWidth > 945 ? 150 : 100,
        tickPosition: 'outside',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 1,
        minorTickInterval: null,
        labels: {
            distance: scrnWidth > 1330 ? 30 : 25,
            style: {
                fontSize: scrnWidth > 1330 ? '25px' : scrnWidth > 1155 ? '20px' : '15px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 830000,
            to: 850000,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                    [0.0398, '#F0D251'], // 3.98%
                    [0.4953, '#91CF4B'], // 49.53%
                    [0.9716, '#E97634']  // 97.16%
                ]
            },
            thickness: 55
        }]
        // plotBands: [{
        //     from: 5.0,
        //     to: 6.0,
        //     color: '#C4D56D', // green
        //     thickness: 55
        // }, {
        //     from: 6.0,
        //     to: 6.5,
        //     color: '#F3EE60', // yellow
        //     thickness: 55
        // }, {
        //     from: 6.5,
        //     to: 7.5,
        //     color: '#DD5855', // red
        //     thickness: 55
        // }]
    },

    series: [{
        name: 'Speed',
        data: [6.91],
        tooltip: {
            valueSuffix: ''
        },
        dataLabels: {
            format: '{y}',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '43px',
                fontFamily: 'Sculpin'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'black',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'black',
            radius: 25
        }

    }]

});