var app = angular.module('directiveWorkshop', []);

app.controller('mainCtrl', function($scope, mainService){
$scope.getData = function () {
        return mainService.getData($scope.query).then(function (data) {
           return $scope.data = data;
            console.log($scope.data);
        }, function(error) {
            throw error;                                              
        });
    };
    
$scope.createNotif = function() {
        window.webkitNotifications.createNotification(
          $scope.icon, $scope.title, $scope.body).show();
    }

});