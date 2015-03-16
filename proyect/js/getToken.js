define(['jquery'], function($) {
    $(function() {
        var API = {
            accessToken: 'BQDoAy2z8lsWnLHzioF9iabEq0vSpJeLN6YfakucnhbqeWb29MQC7tzUnt9XSeu20OEEDB4hSoQkg6Yu8fXKjweK9F5fs57DghbUmMPghBWGfo5ZBhQmwX7j80BiuN7vKUeyuAH_FV55',
            base: 'https://api.spotify.com'
            },
        req = function(endpoint) {
            $.ajax({
                url: endpoint,
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + API.accessToken
                }
            }).done(res);
        },
        res = function(data) {
            console.log(data);
        }
    });
    return {
        get: function(dir) {
            req(API.base + dir)
        }
    }
});
