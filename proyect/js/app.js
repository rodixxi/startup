requirejs.config({
    baseUrl: 'js', // will automatically try to load modules from there, if successfully loaded, they will be accessible globally
    paths: { // relative to the baseUrl
        jquery: '../libs/jquery-2.1.3',
    }
});

requirejs(['jquery', 'getToken'], 
	function($, getToken) {
		//var ini = '/v1/search?q=animals&type=track';
		//console.log(ini);
		//var obj = getToken.get(ini);
		//console.log(obj);
		
	//MODEL
	var music = Backbone.Model.extend({
	defaults: function(){
		return {
			track: "Unknown",
			artist: "Unknown",
			duration: "Unknown",
			album: "Unknown"
		};
	},

	initialize: function(){
		if( !this.get("track") ){
			this.set({"track": this.defaults.track});
		}
	},

	clear: function(){
		this.destroy();
	}
});
/*
/	MUSIC COLLECTION -----------
*/

var musicList = Backbone.Collection.extend({

	model: music,

})

var playList= new musicList;

/*
/	MUSIC VIEW -----------
*/
musicView = Backbone.View.extend({

	
	tagName: "li",

	events:{
		'click .addbtt': 'ddToPlaylist',
		//'click .rembtt' : 'remove',
	},

	initialize: function(){
		this.model.bind('change', this.render,this);
		_.bindAll(this,'render',/*'remove',*/'unrender','addToPlaylist');
		this.model.bind('remove',this.unrender,this);
		$("#list").listview();
	},

	render: function(){
		var templ= "<input type='button' value='+' class='addbtt' data-role='button'></input>/
					<%= track %>/
					<%= artist %>/
					<%= duration %>/
					<%= album %>";

		var atts= this.model.toJSON();
		var result= _.template(templ,atts);
		this.$el.html(result);
		$("#list").listview('refresh');
		return this;
	},

	 unrender: function(){
     	$(this.el).remove();
    },

	remove: function(){
      	this.model.destroy();
    },	
    
    ddToPlaylist: function(){
    	
    }
});
/*
/	APPLICATION VIEW -- Controls the interaction with the user.
*/
AppView = Backbone.View.extend({

	events: {
      "keypress #search":  "createOnEnter"
  	},

	initialize: function(){
		playList.bind('add',this.addList);
		this.collection=playList;
	},
	createOnEnter: function(e){
		if (e.keyCode != 13) return; // if key pressed is not Enter.
      	if (!$("#search").val()) return; // if there's no value in the input field.
      	var prev = $("#search").val();
      	var srh = prev.replace(/ /g, '%20');
      	var ini = '/v1/search?q' + srh + '&type=' + $('#type').val();
      	getToken.get(ini);
      	var obj = JSON.parse(localStorage.getItem('getData'));
      	for (var i = 0; i > obj.tracks.items.length; i++) {
      		var mus = new music;
      		mus.set({
      			track: obj.tracks.items[i].name,
				artist: obj.tracks.items[i].artists[1].name,
				duration: obj.tracks.items[i].duration_ms,
				album: obj.tracks.items[i].album.name
      		});
      		this.collection.add(mus);
      	};
      	localStorage.removeItem('getData');
      	$("#search").val('');

    },
    addList: function(mus){
    	var view= new musicView({model: mus});
    	$("#search_list").append(view.render().el);
    	$("#search_list").listview('refresh');
    }

});

var app = new AppView;		
});
