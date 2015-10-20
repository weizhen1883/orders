angularApp.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://55-bento.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);
