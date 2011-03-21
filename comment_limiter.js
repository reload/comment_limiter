$().ready(function(){
  $('textarea[comment_max_length]').parents('div.resizable-textarea').append('<div id="comment_limiter_counter">'+Drupal.settings.comment_limiter.chars_left+'<span class="value"></span></div>');
  $('textarea[comment_max_length]').bind('textchange',function(event,previousText){
      if($(this).val()!='') {
        $(this).parents('div.resizable-textarea').find('div#comment_limiter_counter').filter(':hidden').fadeIn('slow');
        if($(this).attr('comment_max_length')-$(this).val().length <= 0){
          $(this).val($(this).val().substr(0, $(this).attr('comment_max_length')));
        }
        $(this).parents('div.resizable-textarea').find('div#comment_limiter_counter span.value').html($(this).attr('comment_max_length')-$(this).val().length+'');
      }
      else{
        $(this).parents('div.resizable-textarea').find('div#comment_limiter_counter').filter(':visible').fadeOut('slow');
      }
  });
});
