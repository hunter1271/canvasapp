$(function(){
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

    var input = $(".animated-input");
    $(".search-btn").on("click", function (){
        if(input.width() == 0){
            input.animate({"width": "196px"}, 400);
            $(".glyphicon-remove-circle").css("display", "inline");
            $(this).animate({"width":0}, 400).addClass("hidden");

        }
    });

    $(".glyphicon-remove-circle").on("click",function (){
        input.animate({"width": "0"}, 400);
        $(".glyphicon-remove-circle").css("display", "none")
        $(".search-btn").animate({"width":"56px"}, 400).removeClass("hidden");
    });

    /* *** 1-й блок лендинга *** */
    var h = window.innerHeight;
    var wrap = document.querySelector(".bg1");
    wrap.style.height = h + "px";

});
