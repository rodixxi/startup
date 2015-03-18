define(['jquery'], function($) {
    
        var API = {
            accessToken: 'BQBbFek1_spsMlZROaGEFv6UNtQ1nIs8djwJLvF4hl--KaR9sebeXmF7-CZ7A-ISeYl87jcimr1fiI1vLW5NgzmPJDmZLCBAEcaI1be5yHTliWI6j5vjIVPKgRDyf53rTIZL_ilZ4HpL',
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
            localStorage.setItem('getData', JSON.stringify(data));
            
            var obj = JSON.parse(localStorage.getItem('getData'));
            console.log(obj);
            console.log(obj.tracks.items.length);
            
        }
    
    return {
        
        get: function(dir) {
            req(API.base + dir)
        },
        
    }
});
