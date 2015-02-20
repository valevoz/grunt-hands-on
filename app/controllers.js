

app.controller('GruntController', function ($scope, $filter, $http) {

    $http.get('../app/data.json').success(function (data) {
        $scope.colors = data.colors;
    }).error(function (error, status) {
        alert("Source JSON file not found.");
        $scope.colors = [];
        console.log(error);
        console.log(status);
    });

});