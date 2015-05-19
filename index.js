var request = require('request');

var railStations = (function() {

    var base = 'http://ojp.nationalrail.co.uk/find/stationsDLRLU/';

    function lookupCode(name, callback) {
        var url = base + encodeURIComponent(name);

        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var stations = transposeResults(body);
                fireCallback(callback, false, stations);
            } else {
                fireCallback(callback, error);
            }
        });
    }

    function transposeResults(response) {
        var results = JSON.parse(response);
        return results.map(function(result) {
            return {
                'code': result[0],
                'name': result[1],
                'longitude': result[8],
                'latitude': result[7],
                'postcode': result[9],
                'operator': result[10],
                'raw': result
            }
        });
    }

    function fireCallback(callback, error, results) {
        if (typeof callback === 'function') {
            callback(error, results);
        }
    }

    return {
        search: lookupCode
    }
})();

module.exports = railStations;