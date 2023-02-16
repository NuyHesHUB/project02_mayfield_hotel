//헤더, gnb 메뉴
let head=$('#header')
let gnb=$('#gnb')
let click=true;

gnb.hide();
$('.gnb_btn').on({click:function(){
    if(click==true){
        $(this).addClass('active')
        head.addClass('gng');
        $('html').css("overflow","hidden");
        gnb.slideDown(500);
        click=false;
    }else{
        $(this).removeClass('active')
        $('html').css("overflow","visible");
        gnb.slideUp(500);
        setTimeout(function(){
            head.removeClass('gng');
        }, 400);
        click=true;
    }
}});

//헤더 스크롤 BG 효과
$(function(){
    let $header=$('#header');
    $(window).scroll(function(){
        let scTop=$(window).scrollTop();
        //console.log(scTop);
        if(scTop>0){
            $header.addClass('white');
        }
        else{
            $header.removeClass('white');
        }
    });
});

//Main 슬라이더-01
//Main 슬라이더-01 : Slick 
const mainSlide=$('#mainBox > .main > .main_kv_box > .slide-wrap > .slide-track')
const mainSlideCount=$('#mainBox .main .main_kv_box .slide_control .control_box .slide_info .slide_info_box .slide_cout')
mainSlide.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed:2000,
    fade: true,
    arrows: true,
    prevArrow : $('.slide_control .control_box .slide_info .arr_left > a'),
	nextArrow : $('.slide_control .control_box .slide_info .arr_right > a')
  });  
//Main 슬라이더-01
//Main 슬라이더-01 : Control box , Progress bar
mainSlide.on('afterChange',function(){
    $('.progress_bar .progress_ing').addClass('pro_ani');
});
mainSlide.on('beforeChange',function(){
    $('.progress_bar .progress_ing').removeClass('pro_ani');
});
let $status = $('.slide_info_box .slide_cout');

//Main 슬라이더-01 : (.slide_info_box) Count
mainSlide.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    mainSlideCount.text('0'+i);
});

//Main 슬라이더-01 : Play , Pause
let MainPauseBtn=$('#mainBox .main .main_kv_box .slide_control .control_box .slide_info .pause_btn')
let MainPlayBtn=$('#mainBox .main .main_kv_box .slide_control .control_box .slide_info .play_btn')
$('.slide_info .play_pause .pause_btn').on('click',function(){
        $(this).css({display:'none'})
        MainPlayBtn.css({display:'block'})
        $('.slick-slider').slick('slickPause')
        $('.progress_bar .progress_ing').removeClass('pro_ani');
});
$('.slide_info .play_pause .play_btn').on('click',function(){
        $(this).css({display:'none'})
        MainPauseBtn.css({display:'block'})
        $('.slick-slider').slick('slickPlay')
        $('.progress_bar .progress_ing').addClass('pro_ani');
});


/* let msImg=$('#mainBox .main .main_kv_box .slide-wrap .slide-track .slide_img') */
/* $(window).resize(function(){
    var mql = window.matchMedia("screen and (max-width: 1903px)");
    var boxWidth = $('#mainBox .main .main_kv_box .slide-wrap .slide-track .slide_img').width();
    if(mql.matches){
        $('#mainBox .main .main_kv_box .slide-wrap .slide-track .slide_img').height(boxWidth*0.426169);
        $('#mainBox .main .main_kv_box').height(boxWidth*0.426169);
    }
}); */

$(window).resize(function(){
   /* var boxWidth = $('#mainBox .main .main_kv_box .slide-wrap .slide-track .slide_img').width(); */
    var winW=$(window).outerWidth()
    //console.log(boxWidth)
    //console.log(winW);
    //max-width값인 500px아래서만 작동
    if(winW < 1900){
        $('#mainBox .main .main_kv_box .slide-wrap .slide-track .slide_img').height(winW*0.3878);
        if(winW < 1000){
            $('#mainBox .main .main_kv_box .slide-wrap .slide-track .slide_img').height(300)
        }
    }
});
let mainSlideRS=$(window).outerWidth();
let mainSlide1=$('#mainBox .main .main_kv_box .slide-wrap .slide-track .slide_img')
/* let mainSlideMB1=$('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .mobile_scroll_slide') */

    if(mainSlideRS<1900){
        mainSlide1.height(mainSlideRS*0.3878)
        //console.log('유지되나?');
        if(mainSlideRS<1000){
            mainSlide1.height(300)

        }
    }
//백업
/* 
$(window).resize(function(){
    var boxWidth = $('#mainBox .main .main_kv_box .slide-wrap .slide-track .slide_img').width();
    var boxHeight = $('#mainBox .main .main_kv_box').height();
    console.log('h'+boxHeight)
    console.log('w'+boxWidth)
    //max-width값인 500px아래서만 작동
    if(boxWidth < 1920){
    	//1.681:1
        $('#mainBox .main .main_kv_box').height(boxWidth*0.618);//0.57 0.254 // .slide-wrap .slide-track .slide_img
        $('#mainBox .main .main_kv_box .slide-wrap .slide-track .slide_img').height(boxWidth*0.618);//0.57 0.254 // .slide-wrap .slide-track .slide_img
    }else{
        $('#mainBox .main .main_kv_box').css('height','784px');
    }
}); */

/* var offerSlide = "";
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
    $('#sec01 .right_cont .slide_info .slide_info_box .slide_cur').html(currentSlide);
    $('#sec01 .right_cont .slide_info .slide_info_box .slide_ea').html(slidesCount);
};

function slick_start() {
    offerSlide.on('init', function(event, slick) {
        updateSliderCounterOffer(slick);
    });

    var $progressBar = $('#sec01 .slide_bar');
    var $progressBarLabel = $( '.view_offer .slide_bar_cont' );
    offerSlide.on('afterChange', function(event, slick, currentSlide, nextSlide) {
        updateSliderCounterOffer(slick, currentSlide);
        
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
        $progressBarLabel.css('width', calc).attr('aria-valuenow', calc );
    });

    offerSlide.slick({
        infinite: true,
        autoplay: false,
        autoplaySpeed:1000,
        speed:1000,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        prevArrow: $('#sec01 .right_cont .slide_info .arr_btn.arr_left a'), 
        nextArrow: $('#sec01 .right_cont .slide_info .arr_btn.arr_right a'),
    });
}

$(document).ready(function() { 
    offerSlide = $('#sec01 .right_cont .cont_wrap');

    special_include_list();

    $(".offer").on("click",function() {
        location.href="../offer/package_list.html";
    });

    $(".promo").on("click",function() {
        location.href="../offer/promotion_list.html";
    });
 */ 

//Section-01 슬라이더
//Section-01 슬라이더 : Slick
const sec01Slide=$('#mainBox .main #section-01 .section_nowrap .right_cont .cont_wrap .slick-list > .slick-track');
sec01Slide.slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed:1000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    //appendDots: $('.slick-dots'),
	dotsClass: $('#mainBox .main #section-01 .section_nowrap .right_cont .cont_wrap .slick-dots'),
    prevArrow: $('#section-01 .right_cont .slide_info .arr_btn.arr_left a'), 
    nextArrow: $('#section-01 .right_cont .slide_info .arr_btn.arr_right a'),
});
//Section-01 슬라이더
//Section-01 슬라이더 : Control box , Progress bar
sec01Slide.on('afterChange',function(){ //$('.slick-slider')
    $('#mainBox .main #section-01 .section_nowrap .right_cont .cont_wrap .slick-dots li').addClass('slick-active');
});
sec01Slide.on('beforeChange',function(){
    $('#mainBox .main #section-01 .section_nowrap .right_cont .cont_wrap .slick-dots li').removeClass('slick-active');
});
let $status01 = $('.slide_info_box .slide_cout');


//Section-02 슬라이더
//Section-02 슬라이더 : (JavaScript) 
let originalID, cloneID; //인터벌 포인터
let slider=document.querySelector('.scroll_slide_box')
    
    window.addEventListener('DOMContentLoaded', function(){
        //롤링 배너 복제본 생성
        let roller = document.querySelector('.roller');
        roller.id = 'roller1';
        let clone = roller.cloneNode(true);
        clone.id = 'roller2';
        document.querySelector('.scroll_slide_wrap').appendChild(clone); //부착
        //원본, 복제본 배너 위치 지정
        document.querySelector('#roller1').style.left = '0px';
        document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth+'px';
        //클래스 할당
        roller.classList.add('original');
        clone.classList.add('clone');
        //인터벌 메서드로 애니메이션 생성
        let rollerWidth = document.querySelector('.roller ul').offsetWidth;//회전 배너 너비값
        let betweenDistance = 1;//이동 크기 - 정수여야 함
        let 
        originalID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller1'));
        cloneID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller2'));
        //인터벌 애니메이션 함수(공용)
        function betweenRollCallback(d, roller){
            let left = parseInt(roller.style.left);
            roller.style.left = (left - d)+'px';//이동
            //조건부 위치 리셋
            if(rollerWidth + (left - d) <= 0){
                roller.style.left = rollerWidth+'px';
            }
        }
        //호버 멈춤
        slider.addEventListener("mouseover", function (e) {
            clearInterval(cloneID)
            clearInterval(originalID)
            $(window).resize(function(){
                var winW=$(window).outerWidth()
                if(winW<=1000){
                   //console.log('멈췄다 테스트');
                   e.preventDefault();
                }
           });
            });
        slider.addEventListener("mouseout", function () {
            originalID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller1'));
            cloneID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller2'));
            });
        clone.addEventListener("mouseover", function () {
            clearInterval(cloneID)
            clearInterval(originalID)
            });
        clone.addEventListener("mouseout", function () {
            originalID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller1'));
            cloneID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller2'));
            });
            /* 새로고침 해도 유지 */
            let sec02winW1=$(window).outerWidth();
            let sec02Slide1=$('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .scroll_slide')
            let sec02SlideMB1=$('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .mobile_scroll_slide')
            //console.log(sec02winW1);
            if(sec02winW1<=1000){
                clearInterval(cloneID)
                clearInterval(originalID)
                sec02Slide1.addClass('none')
                sec02SlideMB1.addClass('on')
                //console.log('멈췄다');
            }else{
                sec02Slide1.removeClass('none')
                sec02SlideMB1.removeClass('on')
            }
            $(window).resize(function(){
                let sec02winW2=$(window).outerWidth();
                let sec02Slide2=$('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .scroll_slide')
                let sec02SlideMB2=$('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .mobile_scroll_slide')
                let sec02SlickMB1=$('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .mobile_scroll_slide.on .mobile_scroll_slide_wrap .mobile_scroll_slide_box .slick-slider')
                //console.log(sec02winW2);
                if(sec02winW2<=1000){
                    clearInterval(cloneID)
                    clearInterval(originalID)
                    sec02Slide2.addClass('none')
                    sec02SlideMB2.addClass('on')
                    sec02SlickMB1.slick('slickPlay')
                    //console.log('멈췄다');
                }else{
                    sec02Slide2.removeClass('none')
                    sec02SlideMB2.removeClass('on')
                    sec02SlickMB1.slick('slickPause')

                }
            })
        /* 슬라이드 숨기기 */
       /*  $(window).resize(function(){
            var winW=$(window).outerWidth();
            let sec2Slide=$('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .scroll_slide')
            console.log(winW);
            if(winW<=1000){
                clearInterval(cloneID)
                clearInterval(originalID)
                sec2Slide.addClass('none')
                //console.log('멈췄다');
            }else{
                sec2Slide.removeClass('none')
            }
        });    */
    });
let sec02SlideMB1=$('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .mobile_scroll_slide .mobile_slide')
sec02SlideMB1.slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed:1000,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
});
    
    
    
//Section-03 슬라이더
//Section-03 슬라이더 : (Slick)
let sec03Slide=$('#section-03_01 > .section_wrap > .section_cont_2 > .right_box > .right_wrap > .sec_content > .slide-wrap > .slide-track');
sec03Slide.slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed:1000,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
/*     appendDots: $('.slider-dots'),
	dotsClass: 'slider-dots',
    prevArrow: $('#section-01 .right_cont .slide_info .arr_btn.arr_left a'), 
    nextArrow: $('#section-01 .right_cont .slide_info .arr_btn.arr_right a'), */
});
//full_section mouse event

let fullSec=$('.full_section');
    fullSec.mouseenter(function(){
        if($("#section-04").hasClass("on") === true){
            $("#section-04").removeClass('on')
        }
        if($("#section-05").hasClass("on") === true){
            $("#section-05").removeClass('on')
        }
        if($("#section-06").hasClass("on") === true){
            $("#section-06").removeClass('on')
        }
        $(this).addClass('on')
    });
    /* fullSec.mouseleave(function(){
        $(this).removeClass('on')
    }); */
 
    //백업
    /* let fullSec=$('.full_section');
    fullSec.mouseenter(function(){
        if($("#section-04").hasClass("on") === true){
            $("#section-04").removeClass('on')
        }
        $(this).addClass('on')
    });
    fullSec.mouseleave(function(){
        $(this).removeClass('on')
    }); */



//main kv_text Scroll Event
$(function(){
    $('#mainBox .main .main_kv_box .kv_text').addClass('addParallax')
});

//Section 01 Scroll Event
$(function(){
    $(window).scroll(function(){
        const titT=$('#mainBox .main #section-01 .section_wrap .left_cont .sec_cont_wrap .title_box').offset().top;
        let winS=$(window).scrollTop();
        let winH=$(window).height();
        let titTop=winH-titT
        //console.log('winH:'+winH);
        //console.log('winS:'+winS);
        //console.log('titT:'+titT);
        //console.log('titTop:'+titTop);
       if($(window).scrollTop() > 60){
        $('#mainBox .main #section-01 .section_wrap .left_cont .sec_cont_wrap .title_box').addClass('addParallax')
        $('#mainBox .main #section-01 .section_wrap .left_cont .sec_cont_wrap .text_box').addClass('addParallax')
        $('#mainBox .main #section-01 .section_wrap .left_cont .sec_cont_wrap .sel_box').addClass('addParallax')
       }
    });
});

//Section 02 Scroll Event
$(function(){
    $(window).scroll(function(){
        const titT=$('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .title_box').offset().top;
        let winS=$(window).scrollTop();
        let winH=$(window).height();
        let titTop=winH-titT
       if($(window).scrollTop() > 500){
        $('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .title_box').addClass('addParallax')
        $('#mainBox .main #section-02 .section_wrap .wave_box .cont_wrap .text_box').addClass('addParallax')
       }
    });
});

//Section 03-01 Scroll Event
$(function(){
    $(window).scroll(function(){
        const titT=$('#mainBox .main #section-03_01 .section_wrap .section_cont .right_box .sec_title').offset().top;
        let winS=$(window).scrollTop();
        let winH=$(window).height();
        let titTop=winH-titT
       if($(window).scrollTop() > 900){
        $('#mainBox .main #section-03_01 .section_wrap .section_cont .right_box .sec_title').addClass('addParallax')
        $('#mainBox .main #section-03_01 .section_wrap .section_cont .right_box .sec_text').addClass('addParallax')
       }
    });
});

//Section 03-02 Scroll Event
$(function(){
    $(window).scroll(function(){
        const titT=$('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .sec_title').offset().top;
        let winS=$(window).scrollTop();
        let winH=$(window).height();
        let titTop=winH-titT
       if($(window).scrollTop() > 1600){
        $('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .sec_title').addClass('addParallax')
        $('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .sec_text').addClass('addParallax')
        $('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .right_wrap .sec_content .contents a .img_wrap').addClass('addParallax')
        $('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .right_wrap .sec_content .contents a .content_title').addClass('addParallax')
        $('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .right_wrap .sec_content .contents a .content_text').addClass('addParallax')
       }
    });
});
/* Top_btn */
$(function(){
    $(window).scroll(function(){
        const topBtn=$('#mainBox .main #footer .foot_wrap .top_btn')
        let winS=$(window).scrollTop();
        //let winH=$(window).height();
        //let titTop=winH-titT
       if($(window).scrollTop() > 1600){
        $('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .sec_title').addClass('addParallax')
        $('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .sec_text').addClass('addParallax')
        $('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .right_wrap .sec_content .contents a .img_wrap').addClass('addParallax')
        $('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .right_wrap .sec_content .contents a .content_title').addClass('addParallax')
        $('#mainBox .main #section-03_02 .section_wrap .section_cont .right_box .right_wrap .sec_content .contents a .content_text').addClass('addParallax')
       }
    });
});


