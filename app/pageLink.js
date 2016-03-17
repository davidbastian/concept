function pageLink() {
    return {
        scope: true,
        link: function(scope, element, attrs) {

            function functionToBeCalled(e) {
                //console.log(e);
            }
            element.one('click', functionToBeCalled);


        }
    };

}
export {

    pageLink
};
