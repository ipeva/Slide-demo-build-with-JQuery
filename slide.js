$(function() {

    var $store = $('.item-store');
    var $box = $store.find('.item-box');
    var $item = $box.find('.item');

    var interval;
    var animSpeed = 1000;
    var imgWidth = 640;
    var animPause = 3000;
    var currItem = 1;

    function slideStart() {
        interval = setInterval(function() {
            $box.animate({ 'margin-left': '-=' + imgWidth }, animSpeed, function() {
                currItem++;
                if (currItem === $item.length) {
                    currItem = 1;
                    $box.css('margin-left', 0);
                }
            });
        }, animPause);
    };

    function slideStop() {
        clearInterval(interval);
    }

    $item.on('mouseover', slideStop).on('mouseleave', slideStart);

    slideStart();
});