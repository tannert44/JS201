define(function(){
  return function(){
    var newMember = {};
    
    newMember.age = $('.age').val();
    newMember.gender = $('.gender').val();
    newMember.name = $('.name').val();
    newMember.skills = $('.skills').val().split(',');
    
     $.ajax({
       url: "https://family-nss-tanner.firebaseio.com/family.json",
       method: "POST",
       data: JSON.stringify(newMember)
        }).done(function(data){
       console.log(data);
    });
  }
});