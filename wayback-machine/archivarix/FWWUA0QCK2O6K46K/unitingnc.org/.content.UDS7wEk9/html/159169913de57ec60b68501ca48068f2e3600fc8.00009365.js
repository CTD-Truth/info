/* VideoGall JS */

jQuery(document).ready(function($) {
    /* Pagination */
    $('.videogall-page').click(function() {
        var pageid = $(this).attr("id");
        var showitem = pageid.replace('page-','page-item-');
        $('.videogall-item').hide();
        $('.' + showitem).show();
        $('.' + showitem).css({display: "-moz-inline-stack", display: "inline-block"});
        $('.videogall-page').removeClass('current_page');
        $(this).addClass('current_page');
    });

    $(".videogall-item").hover(function() {
        $currid = $(this).attr("id");
        $(".videogall-item[id!=" + $currid + "] .videogall-thumb").stop().fadeTo(300,0.7);
        $(this).children(".videogall-meta").fadeIn(300);
    }, function() {
        $(this).children(".videogall-meta").fadeOut(300);
        $(".videogall-thumb").stop().fadeTo(300,1.0);
    });

    $(".videogall-like").click(function() {
        var videoid = $(this).parent().attr("id").replace('videogall-meta-','');
        var url = $(this).attr("href");
        $curr_obj = $(this);
        var data = {
            action: 'update_likes',
            id: videoid
        };
        jQuery.post(url, data, function(response) {
            $curr_obj.html(response);
        });
        return false;
    });
});