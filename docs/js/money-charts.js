
(function () {
    function initializeMoneyCharts() {

        console.log('entrouuuu');
        var chart = c3.generate({
            bindto: '#asdasdas',
            data: {
                columns: [
                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05'],
                    ['data1', 4.12, 3.98, 3.82, 4.0, 4.15]
                ],
                type: 'spline',
                x: 'x',
                colors: {
                    data1: '#5294e2'
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
                y: {
                    tick: {
                        values: [3.85, 4.00, 4.15],
                        outer: false,
                    },
                },
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%m/%Y',
                        values: ['2013-01-02', '2013-01-04'],
                        outer: false
                    }
                }
            }
        });
    }

    initializeMoneyCharts();
    console.log('teste');
})();

