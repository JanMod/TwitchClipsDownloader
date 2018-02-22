myapp.controller('MainCtrl', function ($scope, $mdSidenav, openInput,twitchApi ) {


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
            data:"1"
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

    $scope.changeLimit = function () {
        openInput.open($scope, 'limit');
    }

    $scope.search = function() {
        twitchApi.getClips().then(function(value){
           value[0].getClipUrl(function() {
            value[0].downloadMp4();
           });
            
        })
       
        
    }
   // $scope.query = ['Streamer:Lirik', 'Game:Fortnite'];
});