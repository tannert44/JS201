requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'bootstrap-rating': ['bootstrap'],
    'firebase': {
      exports: 'Firebase'

    }
  }
});

requirejs(["jquery", "lodash", "hbs", "bootstrap", "firebase", "add-module", "delete-module"], 
  function($, _, Handlebars, bootstrap, _firebase, addMember, deleteMember) {
  var myFirebaseRef = new Firebase("https://family-nss-tanner.firebaseio.com/family");
  
  myFirebaseRef.on("value", function(snapshot) {
    
    var familyMembers = snapshot.val();
    
    var familyArr = [];
    
    for (var key in familyMembers) {
      var newFamilyOBject = familyMembers[key];
      newFamilyOBject.key = key;
       familyArr[familyArr.length] = newFamilyOBject;
     }
    
    console.log(familyArr);
    
     require(['hbs!../templates/dom'], 
      function(domTemplate) {
      $(".dom-content").append(domTemplate(familyArr));
     });
    
    deleteMember();
    
    $(document).on("click", ".add-member", function(){
      addMember();
      console.log("click fired")
    });
    
  });
});