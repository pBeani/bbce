function getDailyFX(settings, callback) {
    API.get('dailyFX', settings, function (data) {
        log('PEGUEI RESPOSTA DO VALOR POR DIA')
        data = data['Time Series FX (Daily)'];
        var usedKeys = Object.keys(data).splice(0, 15);
        var formatedObj = [];

        for(var i = 0; i < usedKeys.length; i++) {
            var date = usedKeys[i];
            var newValue = {
                date: date,
                value: data[date]['4. close']
            }
            formatedObj.push(newValue);
        }
        log('TRATEI RESPOSTA DO VALOR PRO DIA, VOU DEVEOLVER PRA TELA')
        callback(formatedObj);
    })
}

function getCurrentFX(settings, callback) {
    API.get('currentFX', settings, function (data) {
        log('PEGUEI RESPOSTA DO VALOR ATUAL ' + data)
        var currentValue = data['Realtime Currency Exchange Rate']['5. Exchange Rate']
        callback(currentValue);
    })
}