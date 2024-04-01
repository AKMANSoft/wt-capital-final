// MEDIA RENTAL BAR CHART
    const chartRentalData = {
        labels: ['Mar 19 - Feb 20', 'Mar 20 - Feb 21', 'Mar 21 - Feb 22', 'Mar 22 - Feb 23', 'Mar 23 - Feb 24'],
        datasets: [{
            label: 'Median Sale Price',
            data: [450, 351, 330, 435, 500],
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
                },
                ticks: {
                    font: {
                        family: 'Sculpin',
                    }
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
                },
                font: {
                    family: 'Sculpin',
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

    function beforePrintHandler () {
        for (let id in Chart.instances) {
            Chart.instances[id].resize();
        }
    }

    window.addEventListener('beforeprint', () => {
        myChart.resize(600, 600);
      });
      window.addEventListener('afterprint', () => {
        myChart.resize();
      });



// MEDIA SALE BAR CHART
    const chartSaleData = {
        labels: ['Mar 19 - Feb 20', 'Mar 20 - Feb 21', 'Mar 21 - Feb 22', 'Mar 22 - Feb 23', 'Mar 23 - Feb 24'],
        datasets: [{
            label: 'Median Sale Price',
            data: [403750, 410000, 371500, 390000, 380000],
            backgroundColor: '#19271F',
            borderColor: '#19271F',
            borderWidth: 1,
            barThickness: 73
        }]
    };
    const chartSaleOptions = {
        // layout: {
        //     padding: {
        //         left: 30
        //     },
        // },
        scales: {
            y: {
                min: 240000,
                max: 420000,
                ticks: {
                    stepSize: 20000,
                    callback: function(value, index, values) {
                        return value.toLocaleString();
                    },
                    // color: 'tarnsparent',
                    font: {
                        // family: 'Sculpin',
                        // size: 8
                    },
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
                },
                ticks: {
                    font: {
                        family: 'Sculpin',
                        size: 12
                    }
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
                },
                font: {
                    family: 'Sculpin',
                }
            }
        },
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
            },
            ticks: {
                font: {
                    family: 'Sculpin',
                }
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
            formatter: function(value, context) {
                let diff = (value - referenceValue) / referenceValue * 100;
                diff = parseFloat(diff.toFixed(2));
                console.log("diff = " + typeof(diff));
                const prefix = diff >= 0 ? "+" : "";
                const color = diff >= 0 ? '#3FBE12' : '#DD5855';
                col = color
                console.log("color is ", color)
                return prefix + diff + '%';
            },
            color: function(context) {
                const diff = (context.dataset.data[context.dataIndex] - referenceValue) / referenceValue * 100;
                return diff >= 0 ? '#3FBE12' : '#DD5855';
            },
            font: {
                family: 'Sculpin',
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
        data: [1025, 2000, 3002, 2000, 3000, 4000, 3000, 1000, 3000, 2000, 3000],
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
            max: 6000,
            ticks: {
                stepSize: 1000,
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
            },
            ticks: {
                font: {
                    family: 'Sculpin',
                }
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
            formatter: function(value, context) {
                let diff = (value - 3000) / 3000 * 100;
                diff = parseFloat(diff.toFixed(2));
                console.log("diff = " + typeof(diff));
                const prefix = diff >= 0 ? "+" : "";
                const color = diff >= 0 ? '#3FBE12' : '#DD5855';
                console.log("color is ", color)
                // context.dataset.datalabels. = color;
                // context.ChartDataLabels.backgroundColor = color
                return prefix + diff + '%';
                // return prefix + diff + '%'
            },
            color: function(context) {
                const diff = (context.dataset.data[context.dataIndex] - 3000) / 3000 * 100;
                return diff >= 0 ? '#3FBE12' : '#DD5855';
            },
            font: {
                family: 'Sculpin',
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
    data: chartDemandData,
    options: chartDemandOptions,
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
        height: scrnWidth > 1024 ? '67%' : '81%',
        marginLeft: 50,
        fontFamily: 'Sculpin',
        marginRight: 50,
        marginTop: scrnWidth > 1200 ? -80 : scrnWidth > 1024 ? -50 : 0,
        marginBottom: scrnWidth > 1200 ? 0 : scrnWidth > 1024 ? -50 : 50
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
                fontSize: scrnWidth > 1330 ? '25px' : '20px',
                fontFamily: 'Sculpin',
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 5.0,
            to: 6.0,
            color: '#C4D56D', // green
            thickness: 75
        }, {
            from: 6.0,
            to: 6.5,
            color: '#F3EE60', // yellow
            thickness: 75
        }, {
            from: 6.5,
            to: 7.5,
            color: '#DD5855', // red
            thickness: 75
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
            radius: scrnWidth > 1190 ? '80%' : '70%',
            backgroundColor: 'black',
            baseWidth: 21,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'white',
            borderWidth: 14,
            borderColor: 'black',
            radius: 20
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
        height: scrnWidth > 1024 ? '67%' : '81%',
        events: {
            beforePrint: function() {
            this.setSize("80%", "50%");
            },
            afterPrint: function() {
            this.setSize('100%', '81%',false);
            this.redraw();
            }
        },
        marginLeft: 50,
        fontFamily: 'Sculpin',
        marginRight: 50,
        marginTop: scrnWidth > 1200 ? -80 : scrnWidth > 1024 ? -50 : 0,
        marginBottom: scrnWidth > 1200 ? 0 : scrnWidth > 1024 ? -50 : 50
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
                fontSize: '25px',
                fontFamily: 'Sculpin',
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 830000,
            to: 850000,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                    [0.0398, '#F0D251'],
                    [0.4953, '#91CF4B'],
                    [0.9716, '#E97634'] 
                ]
            },
            thickness: 75
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
            radius: scrnWidth > 1190 ? '80%' : '70%',
            backgroundColor: 'black',
            baseWidth: 21,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'white',
            borderWidth: 14,
            borderColor: 'black',
            radius: 20
        }

    }]

});



// ON PRINTING OUT PDF MAKING THE IMAGE BEFORE PRINT AND AFTER PRINT REVERT TO ORIGINAL CHART
window.onbeforeprint = (ev) => {
    for (var id in Chart.instances) {
        let instance = Chart.instances[id];
        let b64 = instance.toBase64Image();
        let i = new Image();

        i.style.maxWidth = "80vw";
        i.src = b64;
        let parent = instance.canvas.parentNode;
        instance.tempImage = i;
        instance.oldDisplay = instance.canvas.style.display;
        instance.canvas.style.display = "none";
        parent.appendChild(i);
    }
};
window.onafterprint = (ev) => {
    for (var id in Chart.instances) {
        let instance = Chart.instances[id];
        if (instance.tempImage) {
            let parent = instance.canvas.parentNode;
            parent.removeChild(instance.tempImage);
            instance.canvas.style.display = instance.oldDisplay;
            delete instance.oldDisplay;
            delete instance.tempImage;
        }
    }
};

// ON PRINTING OUT PDF MAKING THE HIGHLIGHT CHARTS RESPONSIVE
document.addEventListener("DOMContentLoaded", function() {
    Highcharts.setOptions({ // Apply to all charts
        chart: {
            events: {
                beforePrint: function () {
                    this.oldhasUserSize = this.hasUserSize;
                    this.resetParams = [this.chartWidth, this.chartHeight, false];
                    this.setSize('100%', '67%', false);
                },
                afterPrint: function () {
                    this.setSize.apply(this, this.resetParams);
                    this.hasUserSize = this.oldhasUserSize;
                }
            }
        }
    });

    var printUpdate = function () {
        Highcharts.charts.forEach(function(chart) {
            if (chart) {
                chart.reflow();
            }
        });
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function (mql) {
            printUpdate();
        });
    }
});