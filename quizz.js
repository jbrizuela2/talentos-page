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
    }else if(current == 15){
      var ans;
      if($('#r1').is(':checked')){
        ans = "Dijo que hector es mejor >:v";
      }else if($('#r2').is(':checked')){
        ans = "Es bien barbero, y dijo que tu eres mejor :3";
      }else if($('#r3').is(':checked')){
        ans = "No se que dijo, pero en conclusion tu por ser de miche <3";
      }else if($('#r4').is(':checked')){
        ans = "Dice que te pongas a terminar la universidad :v";
      }
      console.log(ans);
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
