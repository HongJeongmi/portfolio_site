$(function(){
  const $gnb = $('header > .gnb > ul > li:nth-child(4)')
  const $lnb = $('header > .gnb > ul > li > .lnb')

  $('header > a').on('click',function(evt){
    evt.preventDefault()
    $('header > .bg').stop().show()
    $('header > .gnb').stop().show()
  })

  $('header > .bg > span').on('click',function(evt){
    evt.preventDefault()
    $('header > .bg').stop().hide()
    $('header > .gnb').stop().hide()
  })

  $gnb.on({
    mouseenter: function(){
      $lnb.stop().slideDown()
    },
    mouseleave: function(){
      $lnb.stop().slideUp()
    }
  })

  $(document).on('keyup', function (evt) {
    console.log('현재 눌린키 번호는 ', evt.which);
    if (evt.which == '27') {
      $('header > .bg').hide();
      $('header > .gnb').hide();
    }
  });

})

// 포트폴리오
$(function(){
  const $slides = $('#slides > .container > li')
  const $indicator = $('#slides > .indicator > li > a')
  let nowIdx = 0

  $indicator.eq(nowIdx).parent().addClass('on')
  $slides.eq(nowIdx).addClass('on').show()

  $indicator.on('click', function(evt){
    nowIdx = $indicator.index(this)

    $(this).parent().addClass('on').siblings().removeClass('on')
    $slides.filter('.on').stop().fadeOut(1000).removeClass('on')
    $slides.eq(nowIdx).stop().fadeIn(1000).addClass('on')

    evt.preventDefault()
  })
})

// kolong 슬라이드
$(function(){
  const $kolongSlides = $('#kolong_slides > .kolong_cont')
  const $kolongPrev = $('#kolong_slides > .page > .uiux_prev')
  const $kolongNext = $('#kolong_slides > .page > .uiux_next')
  let nowIdx = 0

  $kolongPrev.on('click', function(evt){
    if(nowIdx > 0){
      nowIdx--
    }else{
      nowIdx=5
    }
    $kolongSlides.stop().animate({left:-600 * nowIdx})
    $('#kolong_slides > .page > strong>span').text(nowIdx+1)
    
    evt.preventDefault()
  })
  
  $kolongNext.on('click', function(evt){
    if(nowIdx < 5){
      nowIdx++
    }else{
      nowIdx=0
    }
    $kolongSlides.stop().animate({left:-600 * nowIdx})
    $('#kolong_slides > .page > strong>span').text(nowIdx+1)

    evt.preventDefault()
  })
})

// 라이트박스
$(function () {
  const $lightbox = $(".lightbox");

  $(".kolong_pht > p > a").on('click', function (evt) {
    const imgSrc = $(this).attr("href");
    const imgAlt = $(this).children().attr('alt');

    $lightbox.find("img").attr({
      src: imgSrc,
      alt: imgAlt
    });

    $('.shadow').show();

    evt.preventDefault();
  });

  $(".clse").on('click', function () {
    $('.shadow').hide();
  });

  $('.shadow').on('click', function () {
    $(this).hide();
  });

  $lightbox.on('click', function (evt) {
    evt.stopPropagation();
  });

  $(document).on('keyup', function (evt) {
    console.log('현재 눌린키 번호는 ', evt.which);
    if (evt.which == '27') {
      $('.shadow').hide();
    }
  });
});

// 요구분석 슬라이드
$(function(){
  const $needsSlides = $('#uiux > .area > .needs > .needs_slides > .needs_cont')
  const $needsPrev = $('#uiux > .area > .needs > .needs_slides > .page > .needs_prev')
  const $needsNext = $('#uiux > .area > .needs > .needs_slides > .page > .needs_next ')
  let nowIdx = 0

  $needsPrev.on('click', function(evt){
    if(nowIdx > 0){
      nowIdx--
    }else{
      nowIdx=9
    }
    $needsSlides.stop().animate({left:-640 * nowIdx})
    $('#uiux > .area > .needs > .needs_slides > .page > strong>span').text(nowIdx+1)
    
    evt.preventDefault()
  })
  
  $needsNext.on('click', function(evt){
    if(nowIdx < 9){
      nowIdx++
    }else{
      nowIdx=0
    }
    $needsSlides.stop().animate({left:-640 * nowIdx})
    $('#uiux > .area > .needs > .needs_slides > .page > strong>span').text(nowIdx+1)

    evt.preventDefault()
  })
})

// 프로토타입 슬라이드
$(function(){
  const $protoSlides = $('#uiux > .area > .prototype > .proto_slides > .proto_cont')
  const $protoPrev = $('#uiux > .area > .prototype > .proto_slides > .page > .proto_prev')
  const $protoNext = $('#uiux > .area > .prototype > .proto_slides > .page > .proto_next')
  let nowIdx = 0

  $protoPrev.on('click', function(evt){
    if(nowIdx > 0){
      nowIdx--
    }else{
      nowIdx=4
    }
    $protoSlides.stop().animate({left:-640 * nowIdx})
    $('#uiux > .area > .prototype > .proto_slides > .page > strong>span').text(nowIdx+1)
    
    evt.preventDefault()
  })
  
  $protoNext.on('click', function(evt){
    if(nowIdx < 4){
      nowIdx++
    }else{
      nowIdx=0
    }
    $protoSlides.stop().animate({left:-640 * nowIdx})
    $('#uiux > .area > .prototype > .proto_slides > .page > strong>span').text(nowIdx+1)

    evt.preventDefault()
  })
})

// 아키텍처 라이트박스
$(function () {
  const $lightbox = $(".lightbox");

  $(".architec > p > a ").on('click', function (evt) {
    const imgSrc = $(this).attr("href");
    const imgAlt = $(this).children().attr('alt');

    $lightbox.find("img").attr({
      src: imgSrc,
      alt: imgAlt
    });

    $('.architec_shadow').show();

    evt.preventDefault();
  });

  $(".clse").on('click', function () {
    $('.architec_shadow').hide();
  });

  $('.architec_shadow').on('click', function () {
    $(this).hide();
  });

  $lightbox.on('click', function (evt) {
    evt.stopPropagation();
  });

  $(document).on('keyup', function (evt) {
    console.log('현재 눌린키 번호는 ', evt.which);
    if (evt.which == '27') {
      $('.architec_shadow').hide();
    }
  });
});

// ui test 슬라이드
$(function(){
  const $testSlides = $('#test > .area > .uitest > .ui_slides > .ui_cont')
  const $testPrev = $('#test > .area > .uitest > .ui_slides > .page > .ui_prev')
  const $testNext = $('#test > .area > .uitest > .ui_slides > .page > .ui_next')
  let nowIdx = 0

  $testPrev.on('click', function(evt){
    if(nowIdx > 0){
      nowIdx--
    }else{
      nowIdx=4
    }
    $testSlides.stop().animate({left:-560 * nowIdx})
    $('#test > .area > .uitest > .ui_slides > .page > strong>span').text(nowIdx+1)
    
    evt.preventDefault()
  })
  
  $testNext.on('click', function(evt){
    if(nowIdx < 4){
      nowIdx++
    }else{
      nowIdx=0
    }
    $testSlides.stop().animate({left:-560 * nowIdx})
    $('#test > .area > .uitest > .ui_slides > .page > strong>span').text(nowIdx+1)

    evt.preventDefault()
  })
})

// undertask 슬라이드
$(function(){
  const $taskSlides = $('#test > .area > .undertasking > .task_slides > .task_cont')
  const $taskPrev = $('#test > .area > .undertasking > .task_slides > .page > .task_prev')
  const $taskNext = $('#test > .area > .undertasking > .task_slides > .page > .task_next')
  let nowIdx = 0

  $taskPrev.on('click', function(evt){
    if(nowIdx > 0){
      nowIdx--
    }else{
      nowIdx=1
    }
    $taskSlides.stop().animate({left:-560 * nowIdx})
    $('#test > .area > .undertasking > .task_slides > .page > strong > span').text(nowIdx+1)
    
    evt.preventDefault()
  })
  
  $taskNext.on('click', function(evt){
    if(nowIdx < 1){
      nowIdx++
    }else{
      nowIdx=0
    }
    $taskSlides.stop().animate({left:-560 * nowIdx})
    $('#test > .area > .undertasking > .task_slides > .page > strong > span').text(nowIdx+1)

    evt.preventDefault()
  })
})

// project 라이트박스
$(function () {
  const $lightbox = $(".lightbox");

  $("#project > .area > .team > p > a").on('click', function (evt) {
    const imgSrc = $(this).attr("href");
    const imgAlt = $(this).children().attr('alt');

    $lightbox.find("img").attr({
      src: imgSrc,
      alt: imgAlt
    });

    $('.team_shadow').show();

    evt.preventDefault();
  });

  $(".clse").on('click', function () {
    $('.team_shadow').hide();
  });

  $('.team_shadow').on('click', function () {
    $(this).hide();
  });

  $lightbox.on('click', function (evt) {
    evt.stopPropagation();
  });

  $(document).on('keyup', function (evt) {
    console.log('현재 눌린키 번호는 ', evt.which);
    if (evt.which == '27') {
      $('.team_shadow').hide();
    }
  });
});

// project 슬라이드
$(function(){
  const $teamSlides = $('#project > .area > .team2 > .team_slides > .team_cont')
  const $teamPrev = $('#project > .area > .team2 > .team_slides > .team_prev')
  const $teamNext = $('#project > .area > .team2 > .team_slides > .team_next')
  let nowIdx = 0

  $teamPrev.on('click', function(evt){
    if(nowIdx > 0){
      nowIdx--
    }else{
      nowIdx=5
    }
    $teamSlides.stop().animate({left:-776 * nowIdx})
    
    evt.preventDefault()
  })
  
  $teamNext.on('click', function(evt){
    if(nowIdx < 5){
      nowIdx++
    }else{
      nowIdx=0
    }
    $teamSlides.stop().animate({left:-776 * nowIdx})

    evt.preventDefault()
  })
})

// sub버튼

// top 버튼
$(function(){
  const $sub = $('header > nav > .snb')

  $(window).on('scroll', function(){
    if($(this).scrollTop()>600){
      $sub.fadeIn()
      $('aside').fadeIn()
    }else{
      $sub.fadeOut()
      $('aside').fadeOut()
    }
  })
  $('aside').on('click', function(){
    $('html, body').animate({scrollTop:0},400)
    return false
  })
})

//아래구문 DOMContentLoaded를 제이쿼리 방식으로 표현한 구문
//준비핸들러
$(function() {
	//변수선언부
	const $gnb = $('header > .gnb > ul > li > a ')
  const $sub = $('header > nav > .snb > li > a ')
  const $lnb = $('header > .gnb > ul > li > .lnb > li > a')

	//이벤트 등록
	$gnb.click(function(evt) {
		let nowIdx = $gnb.index(this)

		$('html,body').animate({
			scrollTop: $('section,footer').eq(nowIdx).offset().top
		})
		$(this).parent().addClass('active').siblings().removeClass('active')

		evt.preventDefault()
  })
  
	//이벤트 등록
	$sub.click(function(evt) {
		let nowIdx = $sub.index(this)

		$('html,body').animate({
			scrollTop: $('section,footer').eq(nowIdx).offset().top
		})
		$(this).parent().addClass('active').siblings().removeClass('active')

		evt.preventDefault()
  })
  
	//이벤트 등록
	$lnb.click(function(evt) {
		let nowIdx = $lnb.index(this)

		$('html,body').animate({
			scrollTop: $('article').eq(nowIdx).offset().top
		})
		$(this).parent().addClass('active').siblings().removeClass('active')

		evt.preventDefault()
	})
})
