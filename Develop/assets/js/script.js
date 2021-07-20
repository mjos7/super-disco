const now = dayjs();
const today = $('#currentDay').append(now.format('dddd, MMMM D, YYYY'));
const curHour = now.format('HH');

// tasks object to store in localStorage.

$('.saveBtn').on('click', function () {
  var taskDesc = $(this).siblings('.description').val();
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
  var textInput = $('<textarea>').addClass('description col-10 pt-3');
  $(this).replaceWith(textInput);
  // auto focus new element
  $(this).trigger('focus');

  // editable field was un-focused
  $(this).on('blur', 'textInput', function () {
    // get current value of textarea
    var text = $(this).val();

    // recreate p element
    var taskP = $('<p>').addClass('description col-10 pt-3').text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
  });
});

// use jquery each to go through each key
$('.description').each(function (i, item) {
  var blockHour = $(this).parent().attr('id');
  // get item from local storage - key
  var hourValue = JSON.parse(localStorage.getItem(blockHour));
  console.log(item);
  $('.description col-10 pt-3 #' + i).val(hourValue);
  // $(`#${i}`).text(hourValue);
  // console.log($(`#${i}`));
});
