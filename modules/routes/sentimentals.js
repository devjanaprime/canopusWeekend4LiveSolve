var express = require( 'express' );
var router = express.Router();

var sentimentals = [];

// starting objects
sentimentals.push( { image: 'http://10.100.100.104:7654/pics/moments_hirsch.png', synopsis: 'test1', hoorays: 0 } );
sentimentals.push( { image: 'http://10.100.100.104:7654/pics/moments_anjie.png', synopsis: 'test3', hoorays: 0 } );
sentimentals.push( { image: 'http://10.100.100.104:7654/pics/moments_aaron.png', synopsis: 'test3', hoorays: 0 } );
sentimentals.push( { image: 'http://10.100.100.104:7654/pics/moments_canopus.png', synopsis: 'test3', hoorays: 0 } );
sentimentals.push( { image: 'http://10.100.100.104:7654/pics/moments_krystal.png', synopsis: 'test3', hoorays: 0 } );

router.get( '/', function( req, res ){
    console.log( '/sentimentals route get hit' );
    res.send( sentimentals );
}); //end /sentimentals get

router.put( '/', function( req, res ){
    console.log( 'in sentimentals put:', req.body );
    sentimentals[ req.body.index ].hoorays++;
    res.send( 200 );
}); // end /sentimentals put 

module.exports = router;