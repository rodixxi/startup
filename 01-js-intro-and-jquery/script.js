$(document).ready(function(){
	$('.title').show(3000, function(){
		$('.alias').focus();
	});
	$('#txtButtom').click(function(){
		var name = $('#txt').val();
		var url = "http://bootcamp.aws.af.cm/welcome/" +name.toString();
		$.ajax(url, {
			type: 'GET',
    	    dataType: 'json',
   	     	success: function(resp){
          		$('.title p').text(resp.response);
          		$("#txt").val(function(){
          			$('.title').animate({
           				width: '70%',
           				fontSize: '3em'
       					});
          		});
         	}
        });
     });
		
});
