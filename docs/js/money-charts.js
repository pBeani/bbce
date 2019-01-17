function initializeMoneyCharts() {
    function initializeCurrent(currency, value) {
        document.querySelector('.' + currency + ' .currency-value').innerHTML = format(value);
    }

    function Chart(id) {
        getDailyFX(id, function (data) {
            initializeCurrent(id, data[0].value);
            var minY = getMin(data, 'value');
            var maxY = getMax(data, 'value');
            this.ref = c3.generate({
                bindto: '#' + id,
                data: {
                    json: data,
                    keys: {
                        x: 'date',
                        value: ['value']
                    },
                    type: 'spline',
                    colors: {
                        value: '#5294e2'
                    }
                },
                point: {
                    show: false
                },
                tooltip: {
                    show: false
                },
                size: {
                    width: 180,
                    height: 90
                },
                legend: {
                    hide: true,
                    position: 'inset'
                },
                axis: {
                    x: {
                        type: 'timeseries',
                        tick: {
                            outer: false,
                            values: [data[13].date, data[2].date],
                            format: '%d/%m'
                        }
                    },
                    y: {
                        tick: {
                            outer: false,
                            values: [(minY + 0.001).toFixed(3), ((minY + maxY) / 2).toFixed(3), (maxY - 0.001).toFixed(3)],
                        }
                    }
                },
                grid: {
                    y: {
                        show: true
                    }
                }
            });
        });
    }

    var usdChart = new Chart('usd');
    var eurChart = new Chart('eur');
    var arsChart = new Chart('ars');
}

initializeMoneyCharts();
