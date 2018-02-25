(function() {
    'use strict'


    myapp.controller('listCtrl', function($scope , twitchApi){
        $scope.clips = twitchApi.clips;
    })
})()