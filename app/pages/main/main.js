require('./main.scss');

/*Page Description*/
module.exports = {
    template: require('./main.html'),
    controller: pageCtrl,
    controllerAs:'pageCtrl',
    resolve:{

    }
};

pageCtrl.$inject = ['$scope','Comments','$filter'];
function pageCtrl($scope, Comments, $filter ){
    var filter = $filter('filter');
    var originalComments = [];

    /*API*/
    Object.assign(this,{
        postComment : postComment,
        filterComments : filterComments
    });

    $scope.modelComment = {};
    /*get all comments from server*/
    Comments.get().then(function (comments) {
        originalComments = comments;
        /*filter comments and assign to scope variable */
        filterComments();
    });

    /* Implantation */
    function postComment() {
        var modelComment = $scope.modelComment;
        $scope.modelComment = {};
        Comments.post(modelComment)
            .then(function (newComments) {
                originalComments.push( ...newComments );
                filterComments();
            })
            .catch( err => console.error(err) );
    }

    function filterComments() {
        $scope.comments = filter( originalComments,$scope.textFilter);
    }
}
