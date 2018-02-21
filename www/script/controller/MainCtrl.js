myapp.controller('MainCtrl', function ($scope, $mdSidenav, openInput ) {


    $scope.menuOpen = function () {
        $mdSidenav('left').open();
    }

    $scope.menuClicked = function () {
        $scope.menuOpen();
        //openInput.open($scope, 'streamer');
    }
    $scope.query = {
        streamer: {
            type:"Streamer",
            data: ""
        },
        game: {
            type:"Game",
            data:""
        },
        limit: {
            type:"limit",
            data:""
        },
        trending: {
            type:'trending',
            data:""
        },
        period: {
            type:'period',
            data:""
        }
    }

    $scope.changeStreamer = function () {
        openInput.open($scope, 'streamer');
    }

    $scope.changeGame = function () {
        openInput.open($scope, 'game');
    }
   // $scope.query = ['Streamer:Lirik', 'Game:Fortnite'];
});