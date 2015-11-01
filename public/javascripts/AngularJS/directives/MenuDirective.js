angularApp.directive('entreesMenu', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      cuisine: '=' 
    }, 
    templateUrl: '/javascripts/AngularJS/directives/entreesMenu.ejs' 
  }; 
});