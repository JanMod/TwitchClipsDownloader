(function(){
    'use strict'

    myapp.directive('myCheckbox', function (){
        return{
            restrict: 'E',
            template: '<div layout="column" class="my-primary my-input"><div layout="column" class="margin-top" layout-align="center center"><md-checkbox ng-model="checkbox.data" aria-label="Trending?"></md-checkbox></div></div>',
            scope:{
                checkbox: '=',

            },
            link: function(scope,elemnt, args){

            }

        }

    })
})()