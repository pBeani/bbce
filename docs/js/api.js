log('API_ARCHIVE');

var url = 'https://www.alphavantage.co/query?';
var key = 'QPE19VY9SFP1X29B';
var key2 = 'MKJI4VYH0ORRBDJR';

var getCustomUrl = {
    dailyFX: function (params) {
        var from = params.toUpperCase();
        return ('function=FX_DAILY&from_symbol=' + from + '&to_symbol=BRL&outputsize=compact&apikey=' + key2);
    },
    currentFX: function (params) {
        var from = params.toUpperCase();
        return ('function=CURRENCY_EXCHANGE_RATE&from_currency=' + from + '&to_currency=BRL&apikey=' + key);
    }
}

var API = {
    get: function (action, params, callback) {
        log('VAI CONSULTAR AS URL');
        var customUrl = url + getCustomUrl[action](params);
        log('VOU PEDIR OS DADOS ' + customUrl);
        fetch(customUrl)
            .then(function (response) {
                log('API RESPONDEU');
                response.json().then(function (data) {
                    log('FUNCAO DELICADA QUE CONVERTE RESPOSTA');
                    callback(data);
                });
            })
            .catch(function (err) {
                console.log('Não foi possível obter os dados', err);
            });
    }
}