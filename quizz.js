var current = 1;
var wenas = 0;
var lifes = 1;

$( document ).ready(function() {
  for(var i = 0; i < 4; i++){
    addHeart();
  }

  $('.message #failure').hide();
  $('.message #success').hide();
  $('.questions div').hide();
  $(".questions #" + current).show();

  $('.actions button').on('click', function(ev){
    if($("#right_answer" + current).is(':checked')){
      wenas++;
      updateScore();
    }else{
      removeHeart();
    }
    current++;
    showCurrentQuestion();
  })
})

function showCurrentQuestion(){
  if(current < 16){
    if(lifes > 0){
      $('.questions div').fadeOut();
      $(".questions #" + current).delay(400).fadeIn();
    }else{
      $('.questions div').fadeOut();
      $('.actions button').fadeOut();
      $('.message #failure').delay(400).fadeIn(5000);
      assignScore();
    }
  }else{
    assignScore();
    $('.questions div').hide();
    $('.actions button').hide();
    $('#game_over').hide();
    $('.message #success').show();
  }
}

function assignScore(){
  $('.container #coins').val(wenas);
  $('.container #lifes').val(lifes);
}
function updateScore(){
  $('.score h1').text("x" + wenas);
}

function addHeart(){
  $('.lifes ul').append('<li id="life' + (++lifes) + '"><img src="img/full_heart.png" /></li>');
}

function removeHeart(){
  $('.lifes li').remove('#life' + lifes--);
  $('.lifes ul').append('<li><img src="img/empty_heart.png" /></li>');
}
