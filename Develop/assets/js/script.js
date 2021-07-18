const now = dayjs();
const today = $('#currentDay').append(now.format('dddd, MMMM D, YYYY'));
const curHour = now.format('HH');

// tasks object to store in localStorage.

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

var tasks = [];

// //load tasks
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

$('.description').on('click', function () {
  var textInput = $('<textarea>').addClass('description col-10 pt-3');
  $(this).replaceWith(textInput);
  // auto focus new element
  $(this).trigger('focus');

  // editable field was un-focused
  $(this).on('blur', 'textInput', function () {
    // get current value of textarea
    var text = $(this).val();
    console.log(text);

    // recreate p element`
    var taskP = $('<p>').addClass('description col-10 pt-3').text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
  });
});

$('.saveBtn').on('click', function () {
  $('.description').each(function () {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
});
