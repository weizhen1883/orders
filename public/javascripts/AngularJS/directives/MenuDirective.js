angularApp.directive('menuItem', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      cuisine: '=' 
    }, 
    templateUrl: '/javascripts/AngularJS/directives/MenuItem.ejs' 
  }; 
});