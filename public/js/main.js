////////////////////////////////////////////////////////////////////////
//Script to scroll the bulb on scroll event.
/*
$(window).scroll(function(){
   
   var pos = $(window).scrollTop();
    var docH = $(document).height();
    var winH = $(window).height();
    var pct = (pos/docH)/(1.5);
    //var actPos = (pct * winH) -200;
    var actPos1 = (pct * winH) - 300;
    $('.light-bulb-off').animate({"top": actPos1+"px"}, 1)
    $('.light-bulb-off').animate({"top": actPos1+"500"}, 1);
    $('.light-bulb-on').animate({"top": actPos1+"px"}, 1);
    var docViewTop = $(window).scrollTop(); 
           // $('.light-bulb-off').fadeOut();
    if(isBottomIntoView('#second-last-page')){
        $('.light-bulb-off').fadeOut(500);
        $('.light-bulb-on').fadeIn(500);
    }
    else {
        $('.light-bulb-off').fadeIn(500);
        $('.light-bulb-on').fadeOut(500);
    }
});

$(document).ready(function() {
    //$('.light-bulb-off').fadeOut(500);
    var pos = $(window).scrollTop();
    var docH = $(document).height();
    var winH = $(window).height();
    var pct = (pos/docH)/(1.5);
    var actPos = (pct * winH) - 300;
    $('.light-bulb-off').animate({"top": actPos+"px"}, 1);
    $('.light-bulb-on').animate({"top": actPos+"px"}, 1);
    var screenWidth = $(document).width();
    var leftPosOff = (screenWidth/2 - ($('.light-bulb-off').width()/2));
    var leftPosOn = (screenWidth/2 - ($('.light-bulb-on').width()/2));
    $('.light-bulb-off').animate({"left": leftPosOff+"px"}, 1);
    $('.light-bulb-on').animate({"left": leftPosOn+"px"}, 1);
    $('.light-bulb-on').hide(1);
    
});
*/
function isBottomIntoView(elem)
{
    
    var docViewTop = $(window).scrollTop(); 
    var docViewBottom = docViewTop + $(window).height();
if(docViewTop > 3500)
{
    $('.light-bulb-off').animate({opacity:'0'});
    // $('.light-bulb-off').fadeIn();
}

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    
    

    // return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    return (elemBottom <= docViewBottom);
    
}
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Script: Navigation Animation
$(document).ready(function(){
  
   $('#nav-btn-cross').hide(1);
    $('#nav-btn').click(function(){
        //bring the navigation in
        var el = $('#hiddenNav');
            var widt = $('#nav-btn').position().left - el.width() - $('#nav-btn').width(); 
            el.animate({"left":widt+"px"}, 1000);
            $('#nav-btn').hide(1000);
            $('#nav-btn-cross').show(1000);
    })

    $('#nav-btn-cross').click(function() {
        var ele = $('#hiddenNav');
        ele.animate({"left":"100%"}, 1000);
        $('#nav-btn').show(1000);
        $('#nav-btn-cross').hide(1000);
    });
})

$(window).resize(function(){
    var ele = $('#hiddenNav');
    ele.animate({"left":"100%"}, 1000);
    $('#nav-btn').show(1000);
    $('#nav-btn-cross').hide(1000);

    var screenWidth = $(document).width();
    var leftPosOff = (screenWidth/2 - ($('.light-bulb-off').width()/2));
    var leftPosOn = (screenWidth/2 - ($('.light-bulb-on').width()/2));
    $('.light-bulb-off').animate({"left": leftPosOff+"px"}, 1);
    $('.light-bulb-on').animate({"left": leftPosOn+"px"}, 1);
    $('.light-bulb-on').hide(1);
    //$('.light-bulb-off').fadeOut(500);
    
});
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Script To Give Div Height of Whole Page
// $(document).ready(function() {
//     var screenHeight = $(window).height();
//     var divHeight = screenHeight - $('#mainNav').height();
//     var contentHeight = $('.page-content > div').height();
//     var remHeight = divHeight - contentHeight;
//     $('.page-content').css('padding-top', (0.6)*remHeight+"px");
//     $('.page-content').css('padding-bottom', (0.4)*remHeight+"px");
//     $(window).resize(function(){
//         var screenHeightIn = $(window).height();
//         var divHeightIN = screenHeightIn - $('#mainNav').height();
//         $('.page-content').css('min-height', divHeightIN+"px");
//         $('.page-content').css('height', divHeightIN+"px");
//     })
// });
////////////////////////////////////////////////////////////////////////

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header1").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header1").removeClass("active");
    }

if(($(window).scrollTop() > 400) && ($(window).scrollTop() < 5000)) {
        $(".light-bulb-off").show();
        $(".light-bulb-off").css("top", "50px");
        $(".light-bulb-on").hide();
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        if(($(window).scrollTop() > 5000) && ($(window).scrollTop() < 5500)) {
                $(".light-bulb-off").hide();
        $(".light-bulb-on").show();
        $(".light-bulb-on").css("top", "50px");
        }else{
             $(".light-bulb-on").hide();
        }
       
    }

    

});