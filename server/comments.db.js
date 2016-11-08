var md5 = require('md5');

var  db = null
    collectionName = null
;

module.exports.init = function( _db, _collectionName){
  db = _db;
  collectionName = _collectionName;
};

module.exports.insert  = function( comment = {} ){
   return db.then( function(db){
       comment.hash = md5(comment.email);
        return db.collection(collectionName).insertMany([comment])
        .then(function(result){
            return result.ops
        })
        
   })
    
}

module.exports.filter = function(query){
    return db.then(function(db){
        return db.collection(collectionName).find(query).toArray();
    })
}