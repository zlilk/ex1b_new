var grades = angular.module('grades', []);

var model = {};

grades.run(function($http) {
    $http.get("https://ex1b.herokuapp.com/studsData").success(function(grades){
        model.studentGrades = grades;
    });
});

grades.controller('gradesController', ['$scope', function($scope){
    $scope.studData = model;
    $scope.idfilter = "";
    $scope.agefilter = "";
}]);