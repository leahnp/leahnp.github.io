---
layout: null
---

function togglePanelCover() {
  if (!$('.panel-cover').hasClass('panel-cover--collapsed')) {
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  }

  $('.navigation-wrapper').toggleClass('visible')
  $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
}

$(document).ready(function () {
  if (window.location.pathname !== '/{{ site.baseurl }}' && window.location.pathname !== '/{{ site.baseurl }}index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.hash && window.location.hash == '#blog') {
    // $('#art').hide();
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  // if (window.location.hash && window.location.hash == '#art') {
  //   $('#blog').hide();
  //   $('.panel-cover').addClass('panel-cover--collapsed')
  // }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.blog-button').click(function (e) {
    $('#blog').show();
    // $('#art').hide();
    togglePanelCover();
  });

  // $('.art-button').click(function (e) {
  //   $('#art').show();
  //   $('#blog').hide();
  //   togglePanelCover();
  // });
})
