# National Rail Station Codes

A super simple wrapper for the *kinda* hidden National Rail station code API. Allows you to search for a station name and brings back an array of matching stations. The station information contains its three letter [CRC code](National Rail Enquiries - Station Codes), full name, latitude, longitude, postcode, local operator code and the raw API response.

## Installation

```
npm install national-rail-stations --save
```

## Usage
```js
var stations = require('national-rail-stations'),
    stationName = 'richmond';

stations.search(stationName, function(error, stations) {
    if (!error) {
        stations.forEach(function(station){
            console.log(station.code, station.name);
        });
    }
});
```

## Release History

* 0.1.0 Initial release