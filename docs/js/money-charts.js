function main() {
    initializeMoneyCharts();
}

main();

function format(value) {
    return parseFloat(value).toFixed(3).replace('.', ',');
}

function getMin(data, target) {
    return parseFloat(data.reduce(function (min, p) { return p[target] < min ? p[target] : min }, data[0][target]));
}

function getMax(data, target) {
    return parseFloat(data.reduce(function (max, p) { return p[target] > max ? p[target] : max }, data[0][target]));
}

function initializeMoneyCharts() {
    //function format(value) {
    //    return parseFloat(value).toFixed(3).replace('.', ',');
    //}
    //function getMin(data, target) {
    //    return parseFloat(data.reduce((min, p) => p[target] < min ? p[target] : min, data[0][target]));
    //}
    //function getMax(data, target) {
    //    return parseFloat(data.reduce((max, p) => p[target] > max ? p[target] : max, data[0][target]));
    //}
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
                    width: 190,
                    height: 130
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
                            values: [data[13].date, data[1].date],
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

    function initizeHistory() {
        // TESTE REMOVER
        var chart = c3.generate({
            bindto: '#TESTE',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ]
            }
        });
        var usdChart = new Chart('usd');
        var eurChart = new Chart('eur');
        var arsChart = new Chart('ars');
    }

    function initializeCurrent(currency, value) {
        document.querySelector('.' + currency + ' .currency-value').innerHTML = format(value);
    }

    initizeHistory();
}