$(function() {
   /* var srh
    var $searchInput = $('#search'),
        onKeyUp = function(e) {
            if (e.keyCode === 13) {
                $('#search').val();
                //var prev = ;
                var srh.replace(/ /g, $searchInput.val());
                console.log(srh)
            }
        };

    

    $searchInput.on('keyup', onKeyUp);
*/
    var API = {
            accessToken: 'BQChQdUntoMTV37YmuUVkom2KVzefO8Xa_4GR7zL9aVSmBfKFBiNYDd-XS3C3vKe-TvD8X0d9w5OL61SDeI01F_zLjaK0l246ucE-CySYWUrd4GE_YMLzrADQf--1-8sWGeD14NgATbL',
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
            var obj = data;
            console.log(obj);
        }
    req(API.base + '/v1/search?q='+ srh +'&type=artist');
   //console.log(obj);





});
