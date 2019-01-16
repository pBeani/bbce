var API = (function () {
    var url = 'https://www.alphavantage.co/query?';

    var getCustomUrl = {
        dailyFX: function () {
            return 'function=FX_DAILY&from_symbol=EUR&to_symbol=USD&outputsize=full&apikey=demo';
        },
        currentFX: function () {
            return 'function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo';
        }
    }

    function get(action, params, callback) {
        var customUrl = url + getCustomUrl[action](params);
        fetch(customUrl)
            .then(function (response) {
                response.json().then(function (data) {
                    callback(data);
                });
            })
            .catch(function (err) {
                console.error('Não foi possível obter os dados', err);
            });
    }

    return { get };
})();