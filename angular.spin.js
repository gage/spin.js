 /*

Basic Usage:
============

<ANY spin></ANY>
<ANY spin="{color:'#000', ... }"></ANY>
<ANY spin="{color:'#000', ... } spinning="ScopeVariable"></ANY>

*/

(function(window, angular, undefined) {
'use strict';

var ngSpin = angular.module('ngSpin', []);

ngSpin.directive('spin', function(){
  return{
    restrict: 'A',
    scope: {
        spinning: '='
    },
    link: function(scope, element, attrs){

      var opts = {
        color: '#fff',
        lines: 8,
        radius: 5,
        length: 4,
        width: 3,
        zIndex: 'initial',
        top: 'auto',
        left: 'auto',
        className: ''
      }
      angular.extend(opts, scope.$eval(attrs.spin));

      if(attrs.spinning){
        scope.$watch('spinning', function(n,o){
          if(n){
            scope.spinner = new Spinner(opts).spin(element[0]);
          }else{
            if(scope.spinner){
              scope.spinner.stop();
            }
          }
        });
      }else{
        scope.spinner = new Spinner(opts).spin(element[0]);
      }

    }
  }
});


})(window, window.angular);