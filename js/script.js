/* Author: J.Kim

*/

var slider = $('.flexslider');

$(document).ready(function() {
    var flex = slider.flexslider({
        animation: 'slide',
        start: function(slide) {
            resize_masks();
            $('#mask-left').click(function() {
                slide.flexAnimate(slide.getTarget('prev'));
            });
            $('#mask-right').click(function() {
                slide.flexAnimate(slide.getTarget('next'));
            });
        }        
    }); 

});

$(window).resize(function() {
    resize_masks();
});

function resize_masks() {
    var offset = 3; // mask offset
    var width = slider.width();
    var totalwidth = $(window).width();
    var maskwidth = (totalwidth-width)/2;
    $('#mask-left').width(maskwidth+offset+0.5).show();
    $('#mask-right').width(maskwidth - offset).show();
}




