import '../../scss/demo/storefront.scss'
import 'jquery.cookie'

let csrftoken = $.cookie('csrftoken')

function csrfSafeMethod(method) {
  return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method)
}

$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader('X-CSRFToken', csrftoken)
    }
  }
})

// Mobile menu

var $toogleIcon = $('.navbar__brand__menu-toggle')
var $mobileNav = $('nav')
if ($(window).width() < 767) {
  $mobileNav.append('<ul class="nav navbar-nav navbar__menu__login"></ul>')
  $('.navbar__login a').appendTo('.navbar__menu__login')
                       .wrap( '<li class="nav-item login-item"></li>')
                       .addClass('nav-link');
}
$toogleIcon.click((e) => {
  $mobileNav.toggleClass('open')
  event.stopPropagation()
})
$(document).click((e) => {
  $mobileNav.removeClass('open');
})

// New address dropdown

var $addressShow = $('.address_show')
var $addressHide = $('.address_hide')
var $addressForm = $('.checkout__new-address')
var $initialValue = $('#address_new_address').prop('checked')
$addressShow.click((e) => {
  $addressForm.slideDown('slow')
})
$addressHide.click((e) => {
  $addressForm.slideUp('slow')
})
if ($initialValue) {
  $addressForm.slideDown(0)
} else {
  $addressForm.slideUp(0)
}