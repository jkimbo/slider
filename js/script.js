/* Author: J.Kim

*/

var slider = $('.flexslider');

$(document).ready(function() {
    var flex = slider.flexslider({
        animation: 'slide',
        slideshow: false,
        start: function(slide) {
            resize_masks();
            $('#mask-left').click(function() {
                slide.flexAnimate(slide.getTarget('prev'));
            });
            $('#mask-right').click(function() {
                slide.flexAnimate(slide.getTarget('next'));
            });

            // nudging
            var animateright = {
                "margin-left": -15
            };
            var animateleft = {
                "margin-left": +15
            };
            var animatereset = {
                "margin-left": 0
            }
            var duration = { duration: 300, queue: false };
            slider.find('.next').hover(function() {
                $(slide.container).animate(animateright, duration);                
            }, function() {
                $(slide.container).animate(animatereset, duration);                
            });
            slider.find('.prev').hover(function() {
                $(slide.container).animate(animateleft, duration);                
            }, function() {
                $(slide.container).animate(animatereset, duration);                
            });
        }, 
        after: function(slide) {
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




