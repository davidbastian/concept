function AppController($scope) {
    $scope.metadata = {
        'title': 'default title',
        'description': 'default description',
    };

    $scope.phone = $('html').hasClass('mobile');

    // whenever a controller emits the newPageLoaded event, we update the app's metadata
    $scope.$on('newPageLoaded', function(event, metadata) {
        $scope.metadata = metadata
    });

    $scope.$on('$viewContentLoaded', function() {
        // Run after view loaded.

        /*console.log($('.grid-prev').size(), $('.grid-next').size())

        if ($('.grid-next').size() > 0) {
            $('body').removeClass('lastNext').addClass('lastPrev');
        } else {
            $('body').addClass('lastNext').removeClass('lastPrev');
        }*/
    });
}

export {
    AppController
};
