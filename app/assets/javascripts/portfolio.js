$('body#portfolio').ready(function() {
  var item = '.case';
  var original_width = ($(item).width() / $('.primary').width()) * 100;
  var true_relative_width = ($(item).width() / $(document).width()) * 100;

  function item_height() {
    if ($(item).innerHeight() > $(window).height()) {
      return - ($(item).innerHeight() - $(window).height());
    }
    else {
      return 0;
    }
  }

  function item_class() {
    if ($(item).innerHeight() > $(window).height()) {
      return 'stickit-tall';
    }
    else {
      return 'stickit';
    }
  }

  function set_true_relative_width() {
    if ($(item).css('position') !== 'absolute') {
      $(this.item).css('width', true_relative_width+'%');
    }
  }

  function unset_true_relative_width() {
    if ($(item).css('position') !== 'fixed') {
      $(this.item).removeAttr('style');
    }
  }

  $('.primary').stickem({
    item: item,
    container: '.screenshots',
    stickClass: item_class(),
    offset: item_height(),
    onStick: set_true_relative_width,
    onUnstick: unset_true_relative_width
  });

  var last_scroll_top = 0;
  var relative_top_pos_up = 0;
  var relative_top_pos_down = 0;

  function top_of_item_offscreen() {
    // 10px of tolerance since the browser doesn't always read offset correctly
    return ($(window).scrollTop() - $(item).offset().top) > 10
  }

  function at_bottom_of_item() {
    return ($(item).offset().top + $(item).height()) <=
           $(window).scrollTop() + $(window).height();
  }

  function item_at_top_of_container() {
    return ($(item).offset().top - $('.screenshots').offset().top) <= 0;
  }

  function item_at_bottom_of_container() {
    return $(item).offset().top + $(item).height() >
           $('.screenshots').offset().top + $('.screenshots').height();
  }

  // if the item is taller than the viewport, run scrolling listener
  if ($(item).innerHeight() > $(window).height()) {
    $(window).scroll(function() {
      var st = $(this).scrollTop();

      // while scroll up
      if (st < last_scroll_top) {

        if (top_of_item_offscreen()) {
          $(item).css({
            'position': 'absolute',
            'top': relative_top_pos_up,
            'width': original_width+'%',
            'bottom': 'auto'
          });
        }
        else if (item_at_top_of_container()) {
          $(item).removeAttr('style');
        }
        else {
          // set this so we know where to pause the item when scrolling down
          relative_top_pos_down = $(item).offset().top - $('.screenshots').offset().top;

          $(item).css({
            'position': 'fixed',
            'top': 0,
            'width': true_relative_width+'%',
            'bottom': 'auto'
          });
        }

      }

      // while scroll down
      else if (st > last_scroll_top) {

        if (top_of_item_offscreen()) {
          // set this so we know where to pause the item when scrolling up
          relative_top_pos_up = $(item).offset().top - $('.screenshots').offset().top;

          if (at_bottom_of_item() && $(item).css('position') == 'absolute') {
            $(item).css({
              'position': 'fixed',
              'top': 'auto',
              'width': true_relative_width+'%',
              'bottom': 0
            });
          }
        }
        else if ($(item).css('position') == 'fixed') {
          $(item).css({
            'position': 'absolute',
            'top': relative_top_pos_down,
            'width': original_width+'%',
            'bottom': 'auto'
          });
        }

        if (item_at_bottom_of_container()) {
          $(item).css({
            'position': 'absolute',
            'top': 'auto',
            'width': original_width+'%',
            'bottom': 0
          });
        }

      }

      last_scroll_top = st;
    });
  }
});
