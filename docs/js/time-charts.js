initializeTimeCharts();

function initializeTimeCharts() {

    getTimeSeries({ fullData: true }, function (data) {
        var minY = getMin(data, 'close');
        var maxY = getMax(data, 'close');
        var middle = (minY + maxY) / 2;

        var chart = c3.generate({
            bindto: '#msft',
            data: {
                json: data,
                keys: {
                    x: 'date',
                    value: ['close']
                },
                type: 'area',
                xFormat: '%Y-%m-%d %H:%M:%S',
                colors: {
                    close: '#FFC25B'
                }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        outer: false,
                        format: '%HH:%MM',
                        count: 4
                    }
                },
                y: {
                    tick: {
                        outer: false,
                        values: [(minY + 0.01).toFixed(3), ((minY + middle) / 2).toFixed(3), (middle).toFixed(3), ((maxY + middle) / 2).toFixed(3), (maxY - 0.01).toFixed(3)],
                    }
                }
            },
            area: {
                zerobased: false
            },
            size: {
                width: 620,
                height: 180
            },
            point: {
                show: false
            },
            tooltip: {
                show: false
            },
            legend: {
                hide: true,
                position: 'inset'
            },
            grid: {
                y: {
                    show: true
                }
            }
        });

        function updateChart() {
            setTimeout(function () {
                getTimeSeries({ fullData: false }, function (data) {
                    chart.flow({
                        duration: 300,
                        columns: [
                            ['date', data.date],
                            ['close', data.close]
                        ],
                        done: function () {
                            updateChart();
                        }
                    })
                })
            }, 60000);
        }

        updateChart();
    })
}

