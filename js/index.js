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
