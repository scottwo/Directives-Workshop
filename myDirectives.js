angular.module('directiveWorkshop')

    .directive('myDirectives', function(){

        
    
    })

    .directive('pending', function($q){

    return {
        restrict: 'AE',
        scope: {
            request: '&'
        },
        link: function(scope, element, attrs){
            var dfd = $q.defer();
            element.on('click', function(){
                element.toggle();
                element.parent().append('<img src=\"http://www.ajaxload.info/images/exemples/25.gif\" class=\"pending\" \/>');
                scope.request().then(function(){
                    element.parent().children('.pending').remove();
                    element.toggle();
                    element.parent().parent().append('<p>Data retrieved</p>');
                }, function(error) {
                    throw error;  
                });
                dfd.resolve;
            });
            return dfd.promise;
            
        }
    
    }
    
    })

    .directive('notify', function(){

        return {
            restrict: 'AE',
            scope: {
                title: '=',
                body: '=',
                icon: '='
            },
            link: function(scope, element, attrs) {
                var Notification = window.Notification || window.mozNotification || window.webkitNotification;
	             Notification.requestPermission(function (permission) {
				    console.log(permission);
			     });
                element.on('click', function(){
                    new Notification(scope.title, {body: scope.body, icon: scope.icon})
                })
                
            }
        }
    
    })
