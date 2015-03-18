define(['jquery'], function($) {
    
        var API = {
            accessToken: 'BQBFppZpNdb2mMaZzajvKk7JQ-klAQ60Jmm2KUs9w1456MM9kx4D_so0CrfVlkF2A86QX4jn-DHavOcz9h6pIVeuFl-o6kgF00Egcc_skrjmKxua7y-ZxmpDgLUeBbkn9EkBhHw3LOfN',
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
        //obj:obj,
        get: function(dir) {
            req(API.base + dir)
        },
        
    }
});
