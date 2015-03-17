define(['jquery'], function($) {
    
        var API = {
            accessToken: 'BQDGvNuJEWAdF029zIvYdbAOxjwlatNEBG5BsPpizus_9_yNPXSLA2QMOgQruGzyTM73YSNuTdnzf4pNyVYaKjLE-K8ZS-UKE3g21UicLZDVgubB9FPOhHv7TNogIb9heda6aN_1hY0R',
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
            var obj = data;
            console.log(obj);
        }
    
    return {
        obj:obj,
        get: function(dir) {
            req(API.base + dir)
        },
        
    }
});
