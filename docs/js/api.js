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
        var request = new XMLHttpRequest();
        request.open('GET', customUrl, true);
        request.onload = function () {
            var response = JSON.parse(this.response);
            callback(response);
        }
        request.send();
    }
}