$( document ).ready(function() {
  $('#lenin').mouseenter(function(){
    $('#lenin').text("OwO");
  })

  $('#lenin').mouseleave(function(){
    $('#lenin').text("O_O");
  })

  $('#lenin').click(function(){
    alert("adios uwu");
    $(this).fadeOut('slow');
    $(this).delay(5000).fadeIn(5000);
  });
});