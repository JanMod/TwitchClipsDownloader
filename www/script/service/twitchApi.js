(function () {
    'use strict'
    myapp.service('twitchApi', function ($http, $q) {
        this.clips = [];
        this.twitchApi = require('electron').remote.getGlobal('twitchNpm');
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

        this.getClips = function (query) {
            var self = this;
            return $q(function (resolve, reject) {
                self.twitchApi.getClips(query,(resp) => { self.clips = resp; resolve(self.clips) },
                    (err) => {
                        console.error(err)
                        reject(err);
                    });
            })




        }
    })




})()