define(['jquery'], function($) {
    $(function() {
        var $searchInput = $('#search'),
            onKeyUp = function(e) {
                if (e.keyCode === 13) {
                    return $searchInput.val();
                }
            };
        $searchInput.on('keyup', onKeyUp);
    });
});
