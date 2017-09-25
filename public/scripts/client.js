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
            // store array from response in vm.sentimentals
            vm.sentimentals = response.data;
        }); //end $http
    }; //end getSentimentals
    vm.toggleMe = function( index ){
        console.log( 'in toggleMe', index );
        vm.sentimentals[ index ].show = !vm.sentimentals[ index ].show;
    }; //end toggle
    vm.getSentimentals();
}); // end controller