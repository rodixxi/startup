define('getToken', ['jquery'], function(ini) {
    $(function() {
        var API = {
                accessToken: 'BQAS6ut_VvceNdgciDhAS0eyniPLY6ZEkqpEFo8bXLawRv12SEkbe89gAARyBBbbm1mbAOiXYAnuACcfXJhBeJ5JHhQWwn8XRrB4sVSsTuL988_szT3FuAPIiF915m_wGVUBUwhaxOnp&token_type=Bearer&expires_in=3600',
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
            };

        req(API.base + ini);

        return data;
    });
});
