var count = 0;

function listo() {
    console.log('hola')

}

function homePreload($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

                setTimeout(function() {
                           console.log('hola');

                }, 500)
            })
        }
    }
}
export {
    homePreload
};
