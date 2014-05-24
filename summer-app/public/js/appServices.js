
var services = angular.module('appServices', []); 

// Passing Canvas data 
services.service('weatherData', function () {
        var property = 'First value';

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    }); 