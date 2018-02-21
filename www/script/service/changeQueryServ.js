(function () {
    'use strict'
    myapp.service('openInput', function ($document, $compile) {
        this.open = function (scope,element) {

            let template
            switch(element){

                case "streamer":
                {
                    template = angular.element(' <my-input-optional class="my-input" search-query="query.streamer"> </my-input-optional>');
                }
                break;
                case "game":
                {
                    template = angular.element(' <my-input-optional class="my-input" search-query="query.game"> </my-input-optional>');
                }
                break;
                case "limit":
                {
                }
                break;
                case "period":
                {
                }
                break;
                case "trending":
                {
                }
                break;
            }
           
            var compiled = $compile(template)(scope);
            console.log(compiled)
            $document.find('body').append(compiled);
        }
    })




})()