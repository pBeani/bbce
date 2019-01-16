var API = (function () {
    var url = 'https://www.alphavantage.co/query?';
    var key = 'QPE19VY9SFP1X29B';
    var key2 = 'MKJI4VYH0ORRBDJR';
    var getCustomUrl = {
        dailyFX: function (params) {
            var from = params.toUpperCase();
            return `function=FX_DAILY&from_symbol=${from}&to_symbol=BRL&outputsize=full&apikey=${key2}`;
        },
        currentFX: function (params) {
            var from = params.toUpperCase(); 
            return `function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=BRL&apikey=${key}`;
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