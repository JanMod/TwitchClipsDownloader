(function () {
    'use strict'
    myapp.directive('myInputOptional', function () {
        return {
            restrict: 'E',
            templateUrl: 'directive/myinput/myinputView.html',
            controllerAs: 'myInputOptionalCtrl',
            scope: {
                query: "=searchQuery",
                visible: "=visible"
            },
            controller: function ($scope, twitchApi, $timeout) {
                console.log($scope);



                $scope.inputChanged = function (input) {
                    if (input === "") {

                        return;
                    }
                    $scope.httpProm = true;
                    $timeout.cancel($scope.timer);
                    $scope.timer = $timeout(function () {

                        switch ($scope.query.type) {
                            case "Streamer": {
                                $scope.p = twitchApi.getChannel(input).then(function (resolved) {
                                    $scope.httpProm = false;
                                    $scope.query.data = resolved.data.users[0];
                                    $scope.input = $scope.query.name = $scope.query.data.display_name;
                                    
                                    console.log($scope.query.data);
                                })
                            } break;
                            case "Game": {
                                $scope.p = twitchApi.getGame(input).then(function (resolved) {
                                    $scope.httpProm = false;
                                    $scope.query.data = resolved.data.data[0];
                                    $scope.input = $scope.query.name = $scope.query.data.name;
                                    console.log($scope.query.data);
                                })
                            } break;
                        }

                     
                    }, 1000);
                }



            }
        }



    })

})()