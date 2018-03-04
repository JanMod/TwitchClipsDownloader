(function () {
    'use strict'


    myapp.controller('listCtrl', function ($scope, twitchApi, $mdDialog) {
        $scope.clips = twitchApi.clips;

        $scope.addClip = function (index) {
            if (!$scope.clips[index].selected) {
                $scope.clips[index].selected = true;
                twitchApi.selectedClips[index] = $scope.clips[index];
                console.log(twitchApi.selectedClips);
            }
            else {
                $scope.clips[index].selected = false;
                delete twitchApi.selectedClips[index];
            }
        }

        $scope.watchClip = function (index) {
            $scope.clips[index].getClipUrl( (url)=>
                $mdDialog.show({
                    clickOutsideToClose: true,
                    template: "<video width='80%' controls><source src="+url+" type='video/mp4'></video>" 
                })

            );
           
        }

    })

})()