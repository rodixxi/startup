
$(document).ready(function(){

	var source=$("#entry-template").html();
	var template=Handlebars.compile(source);

		$.getJSON("data.json",function(data){

			Handlebars.registerHelper('fullName',function (person) {
				
				return person.firstName+" "+person.lastName;

			});	
				
				$('body').append(template(data));
		});
	
});
