define(function(){
  return function(){
    
    $(document).on("click", ".disown-button", function(){
      var dataKey = $(this).parent().attr('data-key');
      var fredRef = new Firebase("https://family-nss-tanner.firebaseio.com/family/" + dataKey);
      fredRef.remove();
      });
  }
});