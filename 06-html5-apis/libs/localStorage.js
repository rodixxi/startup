$(function(){
	$('#text').val(localStorage.getItem('text'));
 	$('#save').click(function() {
  		localStorage.setItem('text', $('#text').val());
	});
	$('#clear').click(function(){
 		localStorage.removeItem('text');
 		$('#text').val("");
	});
});