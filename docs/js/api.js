function log(message) {
    var node = document.createElement('LI');
    var text = document.createTextNode(message);
    node.appendChild(text);
    document.getElementById('error').appendChild(node);
}

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
        var customUrl = url + getCustomUrl[action](params);
        log('CHAMADA PARA ' + customUrl);

        var request = new XMLHttpRequest();
        
        log('VAI ABRIR REQ')
        request.open('GET', customUrl, true);
        log('ABRIU REQ')

        request.onload = function () {
            log('RETORNOU REQUEST')
            var response = JSON.parse(this.response);
            log('CONVERTEU JSON')
            callback(response);
        }

        log('VAI ENVIAR REQ')
        request.send();
        
        // fetch(customUrl)
        //     .then(function (response) {
        //         response.json().then(function (data) {
        //             callback(data);
        //         });
        //     })
        //     .catch(function (err) {
        //         console.log('Não foi possível obter os dados', err);
        //     });
    }
}