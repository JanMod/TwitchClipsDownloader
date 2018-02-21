myapp.directive('myTabset', function () {
    return {
        restrict: 'E',
        transclude: true,
        controllerAs: 'mytabset',
        templateUrl: 'www/directive/mytab/mytabsetView.html',
        scope: {},
        bindToController: true,
        controllerAs: 'myTabset',
        controller: function ($scope) {
            $scope.tabs = [];
            this.subscribeTab = function (tab) {
                $scope.tabs.push(tab);
  
                if($scope.tabs.length === 1)
                {
                    $scope.activeTab = $scope.tabs[0];
                    $scope.setTab(0);
                   
                }
            }
            $scope.setTab = function(index)
            {
                $scope.activeTab.tab.active = false;
                $scope.activeTab = $scope.tabs[index];
                $scope.activeIndex = index;
                $scope.activeTab.tab.active = true;
            }
            $scope.nextTab = function(){
                if($scope.activeIndex < $scope.tabs.length-1)
                {
                    $scope.setTab($scope.activeIndex+1);
                }
            }
            $scope.previousTab = function(){
                if($scope.activeIndex > 0)
                {
                    $scope.setTab($scope.activeIndex-1);
                }
            }

        }
    }

})

myapp.directive('myTab', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope:{},
        template: "<div class='anim_leftright' ng-transclude ng-show ='tab.active'> </div>",
        require: '^myTabset',
        link: function (scope, elemnt, arg, myTabsetCtrl) {
            scope.tab = {
                active: false,
                completed: false
            }
            myTabsetCtrl.subscribeTab(scope);
        }
    }
})

