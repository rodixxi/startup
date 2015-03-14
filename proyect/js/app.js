requirejs.config({
    baseUrl: 'js', // will automatically try to load modules from there, if successfully loaded, they will be accessible globally
    paths: { // relative to the baseUrl
        jquery: 'http://code.jquery.com/jquery-2.1.3.js',
        getToken: 'token' // needed for named modules
    }
});

requirejs(['jquery', 'getToken', 'search'], 
	function() {
		var ini = '/v1/search?q='+ search +'&type=artist';
		var obj = getToken(ini);
});
