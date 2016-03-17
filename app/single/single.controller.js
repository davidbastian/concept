//import p from 'json!../data.json'
//const data = p.projects
function SingleController($scope, $http, $routeParams) {

    $scope.message = 'This is Single'
    $scope.slug = $routeParams.slug

    //console.log($routeParams.slug)



    // $scope.home = data;
    // Simple GET request example:
    $http({
        method: 'GET',
        url: 'wp-json/posts'
    }).then(function successCallback(response) {
        

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

}
export {
    SingleController
};
