const now = dayjs();
const today = $('#currentDay').append(now.format('dddd, MMMM D, YYYY'));
const curHour = now.format('HH');

// store task in localStorage

$('.saveBtn').on('click', function () {
  var taskDesc = $(this).siblings('.description').val().trim();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, JSON.stringify(taskDesc));
});

$('.time-block').each(function () {
  var calHour = parseInt($(this).attr('id'));

  if (calHour < curHour) {
    $(this).removeClass('future');
    $(this).removeClass('current');
    $(this).addClass('past');
  } else if (calHour == curHour) {
    $(this).removeClass('future');
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
});

$('.description').on('click', function () {
  var storedText = $(this).text();

  var textInput = $('<textarea>')
    .addClass('description col-10 pt-3')
    .val(storedText);
  $(this).replaceWith(textInput);
  // auto focus new element
  $(this).trigger('focus');

  // editable field was un-focused
  $(this).on('blur', 'textInput', function () {
    // get current value of textarea
    var text = $(this).val();

    // replace textarea with new content
    $(this).replaceWith(
      $('<p>').addClass('description col-10 pt-3').text(text).trim()
    );
  });
});

// use jquery each to go through each key
$('.description').each(function () {
  var blockHour = $(this).parent().attr('id');
  // get item from local storage - key
  var hourValue = JSON.parse(localStorage.getItem(blockHour));
  $(this).append($('<p>')).addClass('description col-10 pt-3').text(hourValue);
});
