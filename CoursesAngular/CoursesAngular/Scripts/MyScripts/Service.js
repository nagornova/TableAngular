app.service('crudService', function ($http) {
    this.getCourses = function () {
        return $http.get("/api/CoursesApi");
    };
});