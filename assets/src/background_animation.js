$("ul.tile-list li").mouseover(function() {
  var name = $(this).attr('id');
  $('.corner').show();
  $('.corner').attr('src', '/assets/' + name + '.png');
  $('img.' + name).css('opacity', '0.1');
  $('span.' + name).show();
});

$("ul.tile-list li").mouseleave(function() {
  var name = $(this).attr('id');
  $('.corner').hide();
  $('img.' + name).css('opacity', '1');
  $('span.' + name).hide();
})
