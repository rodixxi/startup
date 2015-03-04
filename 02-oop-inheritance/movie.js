/*movie1 = new Movie ("The Theory of Everything");
movie2 = new Movie ("Interstellar");
movie3 = new Movie ("Birdman");
movie4 = new Movie ("Whiplash");*/

/* MOVIE OBSERVER */
movieObserver = function(){
	this.playing  = function(theTitle){
		this.title = theTitle;
		console.log("Playing: " + title + "!!");
	},
	this.stopped  = function(theTitle){
		this.title = theTitle;
		console.log(title + " Stopped!!");
	};
};
Observer = new movieObserver();

/*  DOWLOAD MOVIE   */
function DownloadableMovie(){
}
DownloadableMovie.prototype.download = function(){
	console.log("Descargando: " + title);
};
/*   SHARE  */
function Social(){

}
Social.prototype = {
	constructor: Social,
	share:function(friendName){
	this.friendName = friendName;
	console.log("Sharing "+ this.title + " with " + friendName);
	},
	like:function(){
	console.log("Like!");
	}
}

/*ACTORS*/
function Actors(theName){
	this.name = theName;
	Movie.call(this);
}


/*   MOVIE OBJECT */
function Movie (theTitle){
	DownloadableMovie.call(this);
	Social.call(this);
	this.title = theTitle;

}
Movie.prototype = Object.create(Actors.prototype);
Movie.prototype = Object.create(DownloadableMovie.prototype);
Movie.prototype = Object.create(Social.prototype);
Movie.prototype = {
	constructor: Movie,
	play:function(){
		Observer.playing(this.title);	
	},
	stop:function(){
		Observer.stopped(this.title);	
	},
	set:function(theTitle){
		this.title = theTitle;
	},
	get:function(){
		console.log("Pelicula: "+this.title);
	}
};





