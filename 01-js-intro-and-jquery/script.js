$(document).ready(function(){
	$('.title').show(3000);
	
});
$(".title").blur(function(){
    	$('.alias').focus(function() {
  			$('.alias').css('cursor', 'wait');
  		});
	});