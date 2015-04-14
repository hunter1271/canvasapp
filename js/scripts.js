$(document).ready(function(){
    $('.slider').bxSlider({
        slideWidth: 834,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 0
    });


    var $container = $('.gallery-pictures');
    $container.isotope({
        itemSelector: '.gal-pic',
        masonry: {
            columnWidth: 280,
            gutter:4
        },
        filter: "*",
    });

    $(".gallery-nav").on("click", "li", function(){
        $(".gallery-nav li").removeClass("active");
        $(this).addClass("active");
        var sortByValue = $(this).attr('data-sort-by');
        $container.isotope({ filter: sortByValue });
        return false;
    })

    $(".gallery-block").on("click",".isotope-append", function(){
        var gal_pic = $(".gal-pic").eq(1).clone();
        $container.append(gal_pic).isotope( 'appended', gal_pic );
    })

    $('.mouse-container a').on('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500);
        event.preventDefault();
    });

    $(".search-btn").on("click", function (){
        var inp = $(".animated-input");
        if(inp.width() == 0){
            inp.animate({"width": "196px"}, 400);
            $(".glyphicon-remove-circle").css("display", "inline")
        }else{
            inp.animate({"width": "0"}, 400);
            $(".glyphicon-remove-circle").css("display", "none")
        }
    });

    $(".glyphicon-remove-circle").on("click",function (){
        $(this).parent().find(".animated-input").val('');
    });

    /* *** 1-й блок лендинга *** */
    var h = window.innerHeight;
    var wrap = document.querySelector(".bg1");
    wrap.style.height = h + "px";

});
