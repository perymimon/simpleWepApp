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

    /*on scope*/
    $scope.textFilter = '';
    $scope.modelComment = {};

    /*API*/
    Object.assign(this,{
        postComment : postComment,
        filterComments : localFilterComments,
        getComments:getComments
    });

    /*get all comments from server*/
    getComments();

    /* Implantation */
    function postComment() {
        var modelComment = $scope.modelComment;
        Comments.post(modelComment)
            .then(function (newComments) {
                originalComments.push( ...newComments );
                localFilterComments();
                $scope.commentForm.$setPristine();
                $scope.commentForm.$setUntouched();
                $scope.modelComment.message = '';
            })
            .catch( err => console.error(err) );
    }

    function getComments(){
        localFilterComments();
        Comments.get($scope.textFilter).then(function (comments) {
            originalComments = comments;

            localFilterComments();
        });
    }
    /**
     * filter comments and assign to scope's variable
     * */
    function localFilterComments() {
        $scope.comments = filter( originalComments,$scope.textFilter);
    }
}
