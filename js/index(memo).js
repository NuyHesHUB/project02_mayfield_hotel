//헤더, gnb 메뉴
let head=$('#header')
let gnb=$('#gnb')
let click=true;

gnb.hide();
$('.gnb_btn').on({click:function(){
    
    if(click==true){
        /* $(this).find('.gnb_bar').addClass('active');
        $(this).find('.mid_bar').css({width:0}); */
        $(this).addClass('active')
        head.addClass('gng');
            $('html').css("overflow","hidden");  // 레이어 뜬상태에서 html 스크롤바 삭제
            /* $("#background").fullBg(); */

        gnb.slideDown(500);
        click=false;
    }else{
        /* $(this).find('.gnb_bar').removeClass('active'); */
        $(this).removeClass('active')
        /* $(this).find('.mid_bar').css({width:'100%'}); */
        $('html').css("overflow","visible");
        gnb.slideUp(500);
        setTimeout(function(){
            head.removeClass('gng');
        }, 400);
        //head.removeClass('gng');
        //if(!$(".gnb_bar").hasClass("active")){}
        click=true;
    }
}});
//헤더 스크롤 BG 효과
$(function(){
    let $header=$('#header');
    let $gnbBtn=$('#header .right_head_cont .hover_btn .gnb_btn')
    let $midBar=$('#headerBox #header .right_head_cont .head_btn .gnb_btn .mid_bar')
    $(window).scroll(function(){
        let scTop=$(window).scrollTop();
        console.log(scTop);
        if(scTop>0){
            $header.addClass('white');
            /* $midBar.css({width:'80%'})  */
            /* if($header.hasClass('white')){
                $gnbBtn.hover(function(){
                    $midBar.css({width:'100%'})
                },function(){
                    if(!$header.hasClass('white')){
                        $midBar.css({width:'100%'})
                    }else{
                        $midBar.css({width:'80%'})
                    }
                });
            } */
        }
        
        else{
            $header.removeClass('white');
            /* $midBar.css({width:'100%'}) */
        }
    });
/*     $(window).scroll(function(){
        let scTop=$(window).scrollTop();
        console.log(scTop);
        if(scTop>0){
            $header.addClass('white');
            $midBar.css({width:'80%'})
             if($header.hasClass('white')){
                $gnbBtn.hover(function(){
                    $midBar.css({width:'100%'})
                },function(){
                    if(!$header.hasClass('white')){
                        $midBar.css({width:'100%'})
                    }else{
                        $midBar.css({width:'80%'})
                    }
                });
            }
        }else{
            $header.removeClass('white');
            $midBar.css({width:'100%'})
        }
    }); */
});


/*         if($header.hasClass('gng')){
            $midBar.css({width:'0'})
            if($header.hasClass('white')){
                $midBar.css({width:'0'})
                
            };
        }  */


//나중에 section 휠 효과
/* let wheelDelta=0;
let browser=0;
$('body').each(function(index){
    $(this).on('mousewheel DOMMouseScroll', function(event){
        browser=window.navigator.userAgent.toLowerCase().indexOf('firefox')
        console.log(browser);
        if(browser >= 0){
            wheelDelta=-event.detail;
        }
        else{
            wheelDelta=event.originalEvent.wheelDelta;
        }
        console.log(wheelDelta);
        if(wheelDelta<0){

        }
    })
}); */



//슬라이더1
/* $('#mainBox .main .main_kv_box .kv_slide_box .slick-list .slick-track').slick({
    autoplay: true
}); */
$('#mainBox .main .main_kv_box .slide-wrap .slide-track').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed:2000,
    fade: true,
    /* dots: true, */
    arrows: true,
    prevArrow : $('.slide_control .control_box .slide_info .arr_left > a'),	
    // 이전 화살표 모양 설정 만들어서 선택자 선택
	nextArrow : $('.slide_control .control_box .slide_info .arr_right > a')		
    // 다음 화살표 모양 설정 만들어서 선택자 선택
  });  

//control box progress bar
$('.slick-slider').on('afterChange',function(){
    $('.progress_bar .progress_ing').addClass('pro_ani');
});
$('.slick-slider').on('beforeChange',function(){
    $('.progress_bar .progress_ing').removeClass('pro_ani');
});
let $status = $('.slide_info_box .slide_cout');
/* let $slickElement = $('.slideshow'); */

//slide_info_box //count
$('.slick-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.slide_info_box .slide_cout').text('0'+i);
});

//play pause button
$('.slide_info .pause_btn').on('click',function(){
        $(this).css({display:'none'})
        $('.slick-slider').slick('slickPause')
        $('.progress_bar .progress_ing').removeClass('pro_ani');
        $('.slide_info .play_btn').css({display:'block'})
})
$('.slide_info .play_btn').on('click',function(){
        $(this).css({display:'none'})
        $('.slick-slider').slick('slickPlay')
        $('.progress_bar .progress_ing').addClass('pro_ani');
        $('.slide_info .pause_btn').css({display:'block'})
});

//슬라이더2
const sec01Slide=$('#mainBox .main #section-01 .section_nowrap .right_cont .cont_wrap .slick-list .slick-track')
sec01Slide.slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed:5000,
    speed:1000,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    prevArrow: $('#section-01 .right_cont .slide_info .arr_btn.arr_left a'), 
    nextArrow: $('#section-01 .right_cont .slide_info .arr_btn.arr_right a'),
});
 

var offerSlide = $('#mainBox .main #section-01 .section_nowrap .right_cont .cont_wrap .slick-list .slick-track');
var currentSlide;
var slidesCount;
include_type="main";
const room_type='1';

var updateSliderCounterOffer = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    
    
    if(currentSlide == slidesCount - 2){
        $('#mainBox .main #section-01 .section_nowrap .right_cont .slide_info .arr_right a').addClass('slick-disabled');
    }
    if(currentSlide < 10){
        currentSlide = '0' + currentSlide;
    }
    if(slidesCount < 10){
        slidesCount = '0' + slidesCount;
    }
    $('#section-01 .right_cont .slide_info .slide_info_box .slide_cur').html(currentSlide);
    $('#section-01 .right_cont .slide_info .slide_info_box .slide_ea').html(slidesCount);
};

function slick_start() {
    offerSlide.on('init', function(event, slick) {
        updateSliderCounterOffer(slick);
    });

    var $progressBar = $('#mainBox .main #section-01 .section_nowrap .right_cont .slide_bar');
    var $progressBarLabel = $( '.view_offer .slide_bar_cont' );
    offerSlide.on('afterChange', function(event, slick, currentSlide, nextSlide) {
        updateSliderCounterOffer(slick, currentSlide);
        
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
        //console.log(currentSlide);
        $progressBarLabel.css('width', calc).attr('aria-valuenow', calc );

        //$progressBarLabel.text( calc + '% completed' );
    });

offerSlide.slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed:1000,
        speed:1000,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,

    });
}

$(document).ready(function() { 
    offerSlide = $('#section-01 .right_cont .cont_wrap');

    special_include_list();

    $(".offer").on("click",function() {
        location.href="../offer/package_list.html";
    });

    $(".promo").on("click",function() {
        location.href="../offer/promotion_list.html";
    });
    

    $(window).on('scroll',function(event){  
        var sec03Top = $('.sec03').offset().top;
        var sec03Half = $('#sec03_2').outerHeight() / 4;
        var scrollVal = $(document).scrollTop();
        if(scrollVal > sec03Top + sec03Half){
            $('#sec04').addClass('on');
            $(this).off(event)
        }
    })
    var wellness = $('.sec03 .section_cont_2 .right_box .sec_content');
    if (wellness.length) {
        var currentSlide;
        var slidesCount;
        var updateSliderCounterWellness = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            

            if(currentSlide == slidesCount - 2){
                $('.sec03 .right_box .slide_info .arr_btn.arr_right a').addClass('slick-disabled');
            }
            if(currentSlide < 10){
                currentSlide = '0' + currentSlide;
            }
            if(slidesCount < 10){
                slidesCount = '0' + slidesCount;
            }
            $('.sec03 .right_box .slide_info .slide_info_box .slide_cur').html(currentSlide);
            $('.sec03 .right_box .slide_info .slide_info_box .slide_ea').html(slidesCount);
        };

        wellness.on('init', function(event, slick) {
            updateSliderCounterWellness(slick);
        });

        var $progressBar = $('.sec03 .slide_bar');
        var $progressBarLabel = $( '.sec03 .slide_bar_cont' );
        wellness.on('afterChange', function(event, slick, currentSlide, nextSlide) {
            updateSliderCounterWellness(slick, currentSlide);

            var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
           // console.log(currentSlide);
            $progressBarLabel.css('width', calc).attr('aria-valuenow', calc );

            //$progressBarLabel.text( calc + '% completed' );
        });

        wellness.slick({
            infinite: true,
            autoplay: false,
            autoplaySpeed:1000,
            speed:1000,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            variableWidth: true,
            prevArrow: $('.sec03 .right_box .slide_info .arr_btn.arr_left a'), 
            nextArrow: $('.sec03 .right_box .slide_info .arr_btn.arr_right a'),
        });
        
        function memClick(){
            //$('.ksd_box .section_cont.on .tab_box ul li a.on').parent('li').siblings().children('a').click();
            console.log('wow')
            wellness.slick('unslick');
            
            wellness.slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed:4000,
                speed:1000,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                variableWidth: true,
                prevArrow: $('.sec03 .right_box .slide_info .arr_btn.arr_left a'), 
                nextArrow: $('.sec03 .right_box .slide_info .arr_btn.arr_right a'),
            });
        }
      }
  });
/*           var soon;
        $(window).on('scroll',function(event){  
            var sec02Top = $('#sec02').offset().top;
            var sec02Half = $('#sec02').outerHeight() / 4;
            var scrollVal = $(document).scrollTop();
            if(scrollVal > sec02Top + sec02Half){
              … */