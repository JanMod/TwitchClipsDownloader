(function () {
    'use strict'
    myapp.service('openInput', function ($document, $compile) {
        this.directive = "";
        this.open = function (scope, element) {

            if(this.elementType !== element){
                this.close();
           
            }else
            {
                this.close();
                return;
            }


            let template
            switch (element) {

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
                        template = angular.element(' <my-slider class="my-input" slider="query.limit"> </my-slider>');
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

            this.directive = $compile(template)(scope);
            this.elementType = element;
            $document.find('body').append(this.directive);
        }
        this.close = function () {
            if (this.directive !=="") {
                this.directive.remove();
                this.directive ="";
                this.elementType = "";
            }
        }
    })




})()