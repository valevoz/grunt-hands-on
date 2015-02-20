app.controller('GruntController', function ($scope, $filter, $http) {

    $http.get('../app/data.json').success(function (data) {
        $scope.colors = data.colors.map(function (color) {
            return {top: Math.floor(Math.random() * 100), left: Math.floor(Math.random() * 100), size: (Math.floor(Math.random() * 30) + 10), color: color}
        });
    }).error(function (error, status) {
        alert("Source JSON file not found.");
        $scope.colors = [];
        console.log(error);
        console.log(status);
    });

});