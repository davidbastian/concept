function HomeController($scope, $http, $routeParams) {

    $scope.message = 'This is Home'
    $scope.slug = $routeParams.slug

    $scope.wireframe = require('./wireframe.png');

    $scope.w1 = require('./IMG_3992.JPG');
    $scope.w2 = require('./IMG_3996.JPG');
    $scope.w3 = require('./IMG_3997.JPG');
    $scope.w4 = require('./IMG_3998.JPG');
    $scope.w5 = require('./IMG_3999.JPG');
    $scope.w6 = require('./IMG_4001.JPG');
    $scope.w7 = require('./IMG_4002.JPG');
    $scope.w8 = require('./IMG_4003.JPG');
    $scope.w9 = require('./IMG_4004.JPG');
    $scope.w10 = require('./color.jpg');
    $scope.w11 = require('./out.mp4');

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

    $('.menu-content a').click(function() {

        var suSize = $('.menu-content li').size();
        var suIndex = $(this).parent().index();

        console.log(suSize, suIndex);

        

        TweenMax.to($('body'), 1, {scrollTo:{y:$('.phase').eq(suIndex).offset().top -80}, ease:Power4.easeOut});

        return false;
    });

    Draggable.create($('.wireframe-container img'), { type: "x,y", edgeResistance: 0.65, bounds: ".wireframe-container", throwProps: true });

}
export {
    HomeController
};
