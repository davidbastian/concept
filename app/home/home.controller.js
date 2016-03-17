function HomeController($scope, $http, $routeParams) {

    $scope.message = 'This is Home'
    $scope.slug = $routeParams.slug
    //console.log($routeParams.slug)
    // $scope.home = data;
    // Simple GET request example:

    $http({
        method: 'GET',
        url: 'http://dev.lovelinks/wp-json/posts'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available

       // console.log('is home nad load the last post');

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

}
export {
    HomeController
};
