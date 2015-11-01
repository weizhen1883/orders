angularApp.directive('entreesMenuItem', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      cuisine: '=' 
    }, 
    templateUrl: '/javascripts/AngularJS/directives/EntreesMenuItem.ejs' 
  }; 
});

angularApp.directive('sidesMenuItem', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      cuisine: '=' 
    }, 
    templateUrl: '/javascripts/AngularJS/directives/SidesMenuItem.ejs' 
  }; 
});

angularApp.directive('menuItem', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      cuisine: '=' 
    }, 
    templateUrl: '/javascripts/AngularJS/directives/MenuItem.ejs' 
  }; 
});