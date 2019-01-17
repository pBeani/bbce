function getDailyFX(settings, callback) {
    API.get('dailyFX', settings, function (data) {
        data = data['Time Series FX (Daily)'];
        var usedKeys = Object.keys(data).splice(0, 15);
        var formatedObj = [];

        for (var i = 0; i < usedKeys.length; i++) {
            var date = usedKeys[i];
            var newValue = {
                date: date,
                value: data[date]['4. close']
            }
            formatedObj.push(newValue);
        }
        callback(formatedObj);
    })
}

function getCurrentFX(settings, callback) {
    API.get('currentFX', settings, function (data) {
        var currentValue = data['Realtime Currency Exchange Rate']['5. Exchange Rate']
        callback(currentValue);
    })
}

function getTimeSeries(settings, callback) {
    API.get('timeSeries', settings, function (data) {
        data = data['Time Series (1min)'];
        var response = [];
        if (settings.fullData) {
            for (var dateTime in data) {
                var currentObj = data[dateTime];
                var newValue = {
                    date: dateTime,
                    close: currentObj['4. close']
                }
                response.push(newValue);
            }
            callback(response);
        } else {
            for (var dateTime in data) {
                var currentObj = data[dateTime];
                var newValue = {
                    date: dateTime,
                    close: currentObj['4. close']
                }
                response.push(newValue);
                break;
            }
            response = response[0];
            callback(response);
        }
    });
}