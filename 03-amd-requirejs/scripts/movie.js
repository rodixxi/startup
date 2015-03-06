define('module_movie',["module_director"],function(module_director){
			
	movie = function(titulo,genero){

		this.titulo = titulo;
		this.genero = genero;

		var titulo;
		var genero;
		var director;
				
		this.set=function(titulo,genero){ 

			this.titulo=titulo;
			this.genero=genero;

		}

		this.get=function(){

			console.log("Titulo pelicula: "+this.titulo+", Genero: "+this.genero);

		}

		this.addDirector=function(director){

		 	his.director = director;
 					
		}	

		return module_movie;

	}
});