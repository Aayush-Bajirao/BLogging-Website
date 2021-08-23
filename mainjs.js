//Like and Dislike button

  $('.border').on('click', function(e){
    var ele = $(e.currentTarget).attr('class');

    if(ele == "border"){
      $('.border').html('Liked...');
    }

  });



//Comment
  $('.button').on('click' ,function(){
    $('.rep').append('<br /><br />' + $('.name').val() + '<br />'+ '  ' + $('.comment').val());
  });
