(function(){
    'use strict'
    myapp.directive('mySlider', function(){
        return{
            restrict:'E',
            templateUrl: 'directive/myslider/myslider.html',
            scope:{
                slider: "=slider"
            },
            link: function(scope, element, args){

            }

        }

    })





})()