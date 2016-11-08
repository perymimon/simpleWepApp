var md5 = require('md5');

var  db = null,
    collectionName = null
;
/*API*/
Object.assign(module.exports,{ init, insert, filter, routeRegister });


/*Implementing*/

function init( _db, _collectionName){
  db = _db;
  collectionName = _collectionName;
}

/**CRUD Manipulation**/
function insert( comment = {} ){
   return db.then( function(db){
       comment.hash = md5(comment.email);
        return db.collection(collectionName).insertMany([comment])
        .then(function(result){
            return result.ops
        })
   })
}

function filter (queryText){
    return db.then(function(db){

        return db.collection(collectionName).find(
            {$or:[{email:{$regex:queryText}},{message:{$regex:queryText}}]},
            {/*options*/"limit": 15, /*"sort": "timestamp" //future implantation*/}
        ).toArray();
    })
}

/** more **/

function routeRegister(app, entityName = collectionName) {
    /**
     * get list
     * expect model:
     * { email, message }
     */
    app.get(`/${entityName}`,function (req, res) {
        filter(req.query.filter).then(function( comments){
            res.send(comments);
        });

    });

    /**
     * add new entity
     */
    app.post(`/${entityName}`,function(req,res){
        insert(req.body).then(function(comment){
            res.send(comment);
        });
    })
}