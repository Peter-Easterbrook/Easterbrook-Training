$(document).ready(() => {
  // Add minus icon for collapse element which is open by default
  $('.collapse.show').each(function () {
    $(this)
      .prev('.card-header')
      .find('.bi')
      .addClass('bi-minus-circle')
      .removeClass('bi-plus-circle');
  });

  // Toggle plus minus icon on show hide of collapse element
  $('.collapse')
    .on('show.bs.collapse', function () {
      $(this)
        .prev('.card-header')
        .find('.bi')
        .removeClass('bi-plus-circle')
        .addClass('bi-minus-circle');
    })
    .on('hide.bs.collapse', function () {
      $(this)
        .prev('.card-header')
        .find('.bi')
        .removeClass('bi-minus-circle')
        .addClass('bi-plus-circle');
    });
});
