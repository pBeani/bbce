initializeTable();

function initializeTable() {
    var companyList = ['AAPL', 'NVDA', 'NFLX', 'GOOG'];

    for (var i = 0; i < companyList.length; i++) {
        loadRow(companyList[i]);
    }

    function loadRow(id) {
        getTimeSeries({ fullData: false, tableData: true, company: id }, function (data) {
            for (var key in data) {
                document.querySelector('#' + id + ' td.' + key).innerHTML = key === 'volume' ? data[key] : format(data[key]);
            }
            document.querySelector('#' + id + ' th.name').innerHTML = id;
        })
    }
}