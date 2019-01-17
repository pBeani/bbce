function log(message) {
    var node = document.createElement('LI');
    var text = document.createTextNode(message);
    node.appendChild(text);
    document.getElementById('error').appendChild(node);
}

function main() {
    function initializeMoneyCharts() {
        log('EXECUTOU A PRIMEIRA FUNCAO')
        function format(value) {
            return parseFloat(value).toFixed(3).replace('.', ',');
        }

        function getMin(data, target) {
            return parseFloat(data.reduce((min, p) => p[target] < min ? p[target] : min, data[0][target]));
        }

        function getMax(data, target) {
            return parseFloat(data.reduce((max, p) => p[target] > max ? p[target] : max, data[0][target]));
        }

        function Chart(id) {
            getDailyFX(id, data => {
                log('PEGOU OS DADOS DA API PARA ' + id)
                initializeCurrent(id, data[0].value)
                var minY = getMin(data, 'value');
                var maxY = getMax(data, 'value');
                this.ref = c3.generate({
                    bindto: `#${id}`,
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
                        width: 300,
                        height: 160
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
                log('MONTOU O GRAFICO')
            })
        }

        function initizeHistory() {
            log('VAI COMECAR A EXECUTAR OS GRAFIOCS');
            var usdChart = new Chart('usd');
            var eurChart = new Chart('eur');
            var arsChart = new Chart('ars');

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
            log('CARREGOU O PRIMEIRO GRAFICO(NAO CHAMA API)')
        }

        function initializeCurrent(currency, value) {
            document.querySelector(`.${currency} .currency-value`).innerHTML = format(value);
        }

        initizeHistory();
    }

    initializeMoneyCharts();
}

main();

