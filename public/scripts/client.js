console.log( 'js' );

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'SentimentalsController', function( $http ){
    console.log( 'NG' );
    var vm = this;
    // get all sentimentals from server
    vm.getSentimentals = function(){
        $http({
            method: 'GET',
            url: '/sentimentals'
        }).then( function( response ){
            console.log( 'in getSentimentals:', response );
        }); //end $http
    }; //end getSentimentals
    vm.getSentimentals();
}); // end controller