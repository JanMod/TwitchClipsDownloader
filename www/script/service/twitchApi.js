(function () {
    'use strict'
    myapp.service('twitchApi', function ($http) {
        this.getChannel = function (name) {
            return $http({
                url: 'https://api.twitch.tv/kraken/users?login=' + name,
                method: 'GET',
                headers: {
                    'Accept': 'application/vnd.twitchtv.v5+json',
                    'Client-ID': 'ztix9khyx6urq2hzmhr4o2ie3ezlhz'
                }
            });
        }
        this.getGame = function (name) {
            return $http({
                url: 'https://api.twitch.tv/helix/games?name=' + name,
                method: 'GET',
                headers: {
                    'Accept': 'application/vnd.twitchtv.v5+json',
                    'Client-ID': 'ztix9khyx6urq2hzmhr4o2ie3ezlhz'
                }
            });
        }
    })




})()