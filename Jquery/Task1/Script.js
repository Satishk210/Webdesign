$(document).ready(function(){
$('#click').click(function(){
    // alert('Hello')
    // $('.box').hide();
    //  $('.box').toggle(1000);
   $('.box').fadeToggle(3000);
    
})

$('.box').mouseenter(function(){
    $(this).css({"background-color":"red","border":"none"})
})
$('.box').mouseleave(function(){
    $(this).css({"background-color":"green"})
})

$('#name').blur(function(){
    var userInput = $(this).val();
    if(userInput.length < 4){
        $('.Erroemsg').show()
    }
})

});