var validator =  require('validator');
module.exports = 'app.comments';

angular.module( module.exports,[] )
    .service('Comments',Comments);


Comments.$inject = ['$http','$q'];
function Comments( $http,$q ) {
    var url = '//localhost:3000/comments';

    /*API*/
    return {
        get: get,
        post: post
    };

    /*Implementation */
    function get( filter ) {
        return $http.get(url,{params :{ filter:filter || '' }})
            .then( response=> response.data );
    }

    function post(comment) {
        return $q(function (resolve, reject) {
            if(!validator.isEmail( comment.email || ''))
                reject('email not correct');
            if(validator.isEmpty(comment.message || ''))
                reject('message is empty');

            return $http.post(url,comment)
                .then( (response)=> resolve(response.data) )
                .catch(reject);
        });



    }

}

