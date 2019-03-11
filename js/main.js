$(document).ready(function(){
  
  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');



  // toggle menu 
  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
  });



  // fullpage customization
  $('#fullpage').fullpage({
    sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
      if (index == 5) {
          $('#fp-nav').hide();
        }
    },

    onLeave: function(index, nextIndex, direction) {
      if(index == 5) {
        $('#fp-nav').show();
      }
    },

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if(anchorLink == 'fifthSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(false, 'up');
        $header_top.css('background', 'transparent');
        $nav.css('background', 'transparent');
        $(this).css('background', '#374140');
        $(this).find('h2').css('color', 'white');
        $(this).find('h3').css('color', 'white');
        $(this).find('p').css(
          {
            'color': '#DC3522',
            'opacity': 1,
            'transform': 'translateY(0)'
          }
        );
      }
    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      if(anchorLink == 'fifthSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, 'up');
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
      }
    } 
  }); 
});

// 2019.03.04 zcoder83 version 1.0
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
var card01 = document.querySelector('.card01');
card01.addEventListener( 'click', function() {
  card01.classList.toggle('is-flipped');
});
var card02 = document.querySelector('.card02');
card02.addEventListener( 'click', function() {
  card02.classList.toggle('is-flipped');
});
var card03 = document.querySelector('.card03');
card03.addEventListener( 'click', function() {
  card03.classList.toggle('is-flipped');
});
var card04 = document.querySelector('.card04');
card04.addEventListener( 'click', function() {
  card04.classList.toggle('is-flipped');
});
var card05 = document.querySelector('.card05');
card05.addEventListener( 'click', function() {
  card05.classList.toggle('is-flipped');
});
var card06 = document.querySelector('.card06');
card06.addEventListener( 'click', function() {
  card06.classList.toggle('is-flipped');
});
var card07 = document.querySelector('.card07');
card07.addEventListener( 'click', function() {
  card07.classList.toggle('is-flipped');
});
var card08 = document.querySelector('.card08');
card08.addEventListener( 'click', function() {
  card08.classList.toggle('is-flipped');
});