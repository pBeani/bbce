function log(message) {
    var node = document.createElement('LI');
    var text = document.createTextNode(message);
    node.appendChild(text);
    document.getElementById('error').appendChild(node);
}

function format(value) {
    return parseFloat(value).toFixed(3).replace('.', ',');
}

function getMin(data, target) {
    return parseFloat(data.reduce(function (min, p) { return p[target] < min ? p[target] : min }, data[0][target]));
}

function getMax(data, target) {
    return parseFloat(data.reduce(function (max, p) { return p[target] > max ? p[target] : max }, data[0][target]));
}

function toggleFullScreenHandler(e, target) {
    var target = document.getElementById(target);
    /* Check whether in fullscreen mode */
    if (document.webkitIsFullScreen) {
        /* Cancel the fullscreen mode */
        document.webkitCancelFullScreen();
    } else {
        /* Switch on the fullscreen mode */
        target.webkitRequestFullScreen();
    }
}

document.getElementById('usd').addEventListener('click', function(e) {
    toggleFullScreenHandler(e, 'fs-body')
}, false);

log('TESTE')