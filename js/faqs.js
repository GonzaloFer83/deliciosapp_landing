function registerEvents() {
  configureFaqsCollapse();
}

function configureFaqsCollapse() {
  $('.faqs-question').click(function (event) {
    event.preventDefault();
    let notthis = $('.active').not(this);
    notthis.find('.fa-minus').addClass('fa-plus').removeClass('fa-minus');
    notthis.toggleClass('active').next('.faqs-answer').slideToggle(300);
    $(this).toggleClass('active').next().slideToggle("fast");
    $(this).children('i').toggleClass('fa-plus fa-minus');
  });
}