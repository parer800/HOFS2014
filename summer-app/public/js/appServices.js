
var services = angular.module('appServices', []); 

// Passing Canvas data 
services.service('weatherData', function () {
        var property = 'First value';

        return {
            getProperty: function () {
                console.log(property);
                return property;
            },
            setProperty: function(value) {
                property = value;
                console.log(property);
            }
        };
    });

/*
var leagueFormService = {
        sharedObject: {
            exerciseSchedule : null
        }*/