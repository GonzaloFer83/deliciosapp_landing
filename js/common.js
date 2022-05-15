
function loadHtml() {
  $('#header-section').load('header.html');
  $('#footer-section').load('footer.html');
}

function displayNavMenu() {
  if ($('.nav-menu-link').hasClass('nav-menu-link-vertical')) {
    $('.nav-menu-link').removeClass('nav-menu-link-vertical');
  } else {
    $('.nav-menu-link').addClass('nav-menu-link-vertical');
  }
}
