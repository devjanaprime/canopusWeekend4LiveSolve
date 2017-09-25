var express = require( 'express' );
var router = express.Router();

var sentimentals = [];

// starting objects
sentimentals.push( { image: 'http://localhost:7654/pics/moments_hirsch.png', synopsis: 'test1', hoorays: 0 } );
sentimentals.push( { image: 'http://localhost:7654/pics/moments_anjie.png', synopsis: 'test3', hoorays: 0 } );

router.get( '/', function( req, res ){
    console.log( '/sentimentals route get hit' );
    res.send( sentimentals );
}); //end /sentiments get

module.exports = router;