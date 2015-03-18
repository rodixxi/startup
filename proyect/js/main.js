///track model


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
/	MOVIE COLLECTION -----------
*/

var musicList = Backbone.Collection.extend({

	model: music,

})

var playList= new musicList;

/*
/	MOVIE VIEW -----------
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
      	var mus= new music;
      	mus.set({ title: $("#search").val() });//CORREJIR ANADIR VALORES DE MUSICA
      	this.collection.add(mus); 
      	$("#search").val('');
    },
    addList: function(mus){
    	var view= new MovieView({model: mus});
    	$("#musicList").append(view.render().el);
    	$("#musicList").listview('refresh');
    }

});

var app = new AppView;