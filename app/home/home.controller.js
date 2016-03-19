function HomeController($scope, $http, $routeParams) {

    $scope.message = 'This is Home'
    $scope.slug = $routeParams.slug

    $scope.wireframe = require('./wireframe.png');

    //console.log($routeParams.slug)
    // $scope.home = data;
    // Simple GET request example:

    /*$http({
        method: 'GET',
        url: 'http://dev.lovelinks/wp-json/posts'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available

       // console.log('is home nad load the last post');

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });*/

   Draggable.create($('.wireframe-container img'), {type:"x,y", edgeResistance:0.65, bounds:".wireframe-container", throwProps:true});

}
export {
    HomeController
};
