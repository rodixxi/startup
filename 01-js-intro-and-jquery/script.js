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
          success: function(){
          	var resp = $('responce');
          	$('#txt').val('resp');
          },
        });
      });
});
