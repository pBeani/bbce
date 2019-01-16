
(function () {
    function initializeMoneyCharts() {

        function Chart(id) {
            getDailyFX(
                {

                },
                function (data) {
                    this.ref = c3.generate({
                        bindto: id,
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
                            height: 140
                        },
                        legend: {
                            hide: true,
                            position: 'inset'
                        },
                        axis: {
                        //     y: {
                        //         max: 4.2,
                        //         min: 3.8,
                        //         tick: {
                        //             values: [3.8, 4.00, 4.2],
                        //             outer: false,
                        //         },
                        //     },
                            x: {
                                type: 'timeseries',
                                tick: {
                                    count: 3
                                }
                            },
                            y: {
                                tick: {
                                    count: 4
                                }
                            }
                        //         type: 'timeseries',
                        //         tick: {
                        //             format: '%m/%Y',
                        //             values: ['2013-01-02', '2013-01-06'],
                        //             outer: false
                        //         },

                        //     },
                        },
                        grid: {
                            y: {
                                show: true
                            }
                        }
                    });
                })
        }

        var usdChart = new Chart('#usd');
        var eurChart = new Chart('#eur');
        var arsChart = new Chart('#ars');
    }

    initializeMoneyCharts();
})();

