define(['jquery'], function($) {
    $(function() {
        var $searchInput = $('#search'),
            onKeyUp = function(e) {
                if (e.keyCode === 13) {
                	$('#search').val();
                	console.log($searchInput.val());
                	var prev = $searchInput.val();
                	var srh = prev.replace(/ /g, '%20');
                	console.log(srh);
                    return srh;
                }
            };
        $searchInput.on('keyup', onKeyUp);
    });
});
