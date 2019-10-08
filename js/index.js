$(function () {
  $('.second.circle').circleProgress({
    value: 0.45,
    size: 72,
    thickness:9,
    startAngle:Math.PI*1.5,
    fill:"#A7ED87"
  }).on('circle-animation-progress', function(event, progress ,dal) {
    $(this).find('strong').html(Math.round(100.0  * dal) + '<i>%</i>');
    
  });
});


