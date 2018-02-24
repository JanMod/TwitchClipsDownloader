myapp.controller('MainCtrl', function ($scope, $mdSidenav, openInput, twitchApi) {


    $scope.menuOpen = function () {
        $mdSidenav('left').open();
    }

    $scope.menuClicked = function () {
        $scope.menuOpen();
        //openInput.open($scope, 'streamer');
    }
    $scope.query = {
        streamer: {
            type: "Streamer",
            data: ""
        },
        game: {
            type: "Game",
            data: ""
        },
        limit: {
            type: "limit",
            data: "1"
        },
        trending: {
            type: 'trending',
            data: false
        },
        period: {
            type: 'period',
            data: ""
        }
    }

    $scope.changeStreamer = function (event) {
        openInput.open($scope, 'streamer', event.currentTarget);
    }

    $scope.changeGame = function (event) {
        openInput.open($scope, 'game', event.currentTarget);
    }

    $scope.changeLimit = function (event) {
        openInput.open($scope, 'limit', event.currentTarget);
    }

    $scope.changeTrending = function (event) {
        openInput.open($scope, 'trending', event.currentTarget);
    }
    $scope.search = function () {
        twitchApi.getClips($scope.query).then(function (value) {
            console.log(value);
         //   value[0].getClipUrl(function () {
                //value[0].downloadMp4();
       //     });

        })


    }
    // $scope.query = ['Streamer:Lirik', 'Game:Fortnite'];
});