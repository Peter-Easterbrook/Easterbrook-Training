$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $('.collapse.show').each(function () {
    $(this)
      .prev('.card-header')
      .find('.bi')
      .addClass('bi-arrow-up-circle')
      .removeClass('bi-arrow-down-circle');
  });

  // Toggle plus minus icon on show hide of collapse element
  $('.collapse')
    .on('show.bs.collapse', function () {
      $(this)
        .prev('.card-header')
        .find('.bi')
        .removeClass('bi-arrow-down-circle')
        .addClass('bi-arrow-up-circle');
    })
    .on('hide.bs.collapse', function () {
      $(this)
        .prev('.card-header')
        .find('.bi')
        .removeClass('bi-arrow-up-circle')
        .addClass('bi-arrow-down-circle');
    });
});
