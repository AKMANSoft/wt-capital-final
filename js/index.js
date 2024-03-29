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
                    // color: 'black',
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
                anchor: 'start',
                align: 'start',
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



// MEDIA SALE BAR CHART
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
                anchor: 'start',
                align: 'start',
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



// SUPPLY BAR CHART
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
const referenceValue = 300;
let col = '#3FBE12'
const chartSupplyOptions = {
    scales: {
        y: {
            min: 0,
            max: 500,
            ticks: {
                stepSize: 100,
                callback: function(value, index, values) {
                    return Math.abs(value).toLocaleString();
                },
                // color: 'transparent'
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
            anchor: 'start',
            align: 'end',
            color: col,
            formatter: function(value, context) {
                let diff = (value - referenceValue) / referenceValue * 100;
                diff = parseFloat(diff.toFixed(2));
                console.log("diff = " + typeof(diff));
                const prefix = diff >= 0 ? "+" : "";
                const color = diff >= 0 ? '#3FBE12' : 'red';
                console.log("color is ", color)
                // context.dataset.datalabels. = color;
                // context.ChartDataLabels.backgroundColor = color
                return prefix + diff + '%';
                // return prefix + diff + '%'
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


// DEMAND BAR CHART
const chartDemandData = {
    labels: ['Apr 23', 'May 23', 'Jun 23', 'Jul 23', 'Aug 23', 'Sep 23', 'Oct 23', 'Nov 23', 'Dec 23', 'Jan 23', 'Feb 23'],
    datasets: [{
        label: 'Median Sale Price',
        data: [125, 200, 302, 200, 300, 400, 300, 100, 300, 200, 300],
        backgroundColor: '#19271F',
        borderColor: '#19271F',
        borderWidth: 1,
        barThickness: 40
    }]
};

const chartDemandOptions = {
    scales: {
        y: {
            min: -500,
            max: 500,
            ticks: {
                stepSize: 100,
                callback: function(value, index, values) {
                    return Math.abs(value).toLocaleString();
                },
                color: 'transparent'
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
            anchor: 'start',
            align: 'end',
            // color: '#3FBE12',
            formatter: function(value, context) {
                let diff = (value - referenceValue) / referenceValue * 100;
                diff = parseFloat(diff.toFixed(2));
                const prefix = diff >= 0 ? "+" : "";
                const color = diff >= 0 ? '#3FBE12' : 'red';
                // context.dataset.datalabels. = color;
                context.dataLabels.anchor = color
                return prefix + diff + '%';
                // return prefix + diff + '%'
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


// GUAGE CHARTS
const scrnWidth = window.innerWidth
Highcharts.chart('container', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '81%',
        marginLeft: 50,
        marginRight: 50,
        marginBottom: scrnWidth > 1050 ? 0 : 50
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
        tickInterval: 0.5,
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
            thickness: 65
        }, {
            from: 6.0,
            to: 6.5,
            color: '#F3EE60', // yellow
            thickness: 65
        }, {
            from: 6.5,
            to: 7.5,
            color: '#DD5855', // red
            thickness: 65
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
            },
            verticalAlign: 'bottom',
            y: 120,
            x: -12
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
        marginLeft: 50,
        marginRight: 50,
        marginBottom: scrnWidth > 1050 ? 0 : 50
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
        tickInterval: 5000,
        tickPixelInterval: scrnWidth > 1330 ? 300 : scrnWidth > 1155 ? 200 : scrnWidth > 945 ? 150 : 100,
        tickPosition: 'outside',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 1,
        minorTickInterval: null,
        labels: {
            distance: 20, 
            rotation: 'auto', 
            formatter: function() {
                return this.value.toLocaleString(); 
            },
            style: {
                fontSize: '25px'
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
            thickness: 65
        }]
    },

    series: [{
        name: 'Speed',
        data: [840000],
        tooltip: {
            valueSuffix: ''
        },
        dataLabels: {
            format: '${y}',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '43px',
                fontFamily: 'Sculpin',
                fontWeight: '400'
            },
            verticalAlign: 'bottom',
            y: 120,
            x: -30
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