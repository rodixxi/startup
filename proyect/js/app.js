requirejs.config({
    baseUrl: 'js', // will automatically try to load modules from there, if successfully loaded, they will be accessible globally
    paths: { // relative to the baseUrl
        jquery: '../libs/jquery-2.1.3',
    }
});

requirejs(['jquery', 'getToken', 'search'], 
	function($, getToken, search) {
		var ini = '/v1/search?q='+ search +'&type=artist';
		var obj = getToken.get(ini);
		console.log(obj);
});
