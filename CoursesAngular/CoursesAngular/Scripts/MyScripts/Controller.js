app.controller('crudController', function ($scope, crudService) {
    $scope.IsNewRecord = 1;
    loadRecords();
    function loadRecords() {
        var promiseGet = crudService.getCourses();
        promiseGet.then(function (c) { $scope.Courses = c.data },
            function (errorC) {
                $log.error('failure loading', errorC);
            });
    };
});