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
const mainSlide=$('#mainBox > .main > .main_kv_box > .slide-wrap > .slide-track')
const mainSlideCount=$('#mainBox .main .main_kv_box .slide_control .control_box .slide_info .slide_info_box .slide_cout')
mainSlide.slick({
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
mainSlide.on('afterChange',function(){ //$('.slick-slider')
    $('.progress_bar .progress_ing').addClass('pro_ani');
});
mainSlide.on('beforeChange',function(){
    $('.progress_bar .progress_ing').removeClass('pro_ani');
});
let $status = $('.slide_info_box .slide_cout');
/* let $slickElement = $('.slideshow'); */

//slide_info_box //count
mainSlide.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    mainSlideCount.text('0'+i);
});

//play pause button
$('.slide_info .pause_btn').on('click',function(){
    $(this).css({display:'none'})
    $('.slide_info .play_btn').css({display:'block'})
    $('.slick-slider').slick('slickPause')
    $('.progress_bar .progress_ing').removeClass('pro_ani');
    
})
$('.slide_info .play_btn').on('click',function(){
    $(this).css({display:'none'})
    $('.slide_info .pause_btn').css({display:'block'})
    $('.slick-slider').slick('slickPlay')
    $('.progress_bar .progress_ing').addClass('pro_ani');
    
});

//슬라이더2
const sec01Slide=$('#mainBox .main #section-01 .section_nowrap .right_cont .cont_wrap .slick-list > .slick-track');
sec01Slide.slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed:1000,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    appendDots: $('.slider-dots'),
	dotsClass: 'slider-dots',
    prevArrow: $('#section-01 .right_cont .slide_info .arr_btn.arr_left a'), 
    nextArrow: $('#section-01 .right_cont .slide_info .arr_btn.arr_right a'),
});
//control box progress bar
sec01Slide.on('afterChange',function(){ //$('.slick-slider')
    $('#mainBox .main #section-01 .section_nowrap .right_cont .cont_wrap .slick-dots li').addClass('slick-active');
});
sec01Slide.on('beforeChange',function(){
    $('#mainBox .main #section-01 .section_nowrap .right_cont .cont_wrap .slick-dots li').removeClass('slick-active');
});
let $status01 = $('.slide_info_box .slide_cout');
/* let $slickElement = $('.slideshow'); */

//slide_info_box //count
/* sec01Slide.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.slide_info_box .slide_cout').text('0'+i);
});
 */
//play pause button
/* $('.slide_info .pause_btn').on('click',function(){
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
 */

//sec02 

var originalID, cloneID; //인터벌 포인터
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
            slider.addEventListener("mouseover", function () {
                clearInterval(cloneID)
                clearInterval(originalID)
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
             
        });

