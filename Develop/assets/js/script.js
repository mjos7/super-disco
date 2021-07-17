const now = dayjs();
const today = $('#currentDay').append(now.format('dddd, MMMM D, YYYY'));
const curHour = now.format('HH');

// tasks object to store in localStorage.
var tasks = {
  9: [],
  10: [],
  11: [],
  12: [],
  13: [],
  14: [],
  15: [],
  16: [],
  17: [],
};

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

// var textInput = $('<textarea>').addClass('description col-10 pt-3');

// $('p').on('click', function () {
//   $(this).replaceWith(textInput);
//   // auto focus new element
//   textInput.trigger('focus');

//   // editable field was un-focused
//   $('.description').on('blur', 'textInput', function () {
//     // get current value of textarea
//     var text = $(this).val();

//     // recreate p element
//     var taskP = $('<p>').addClass('description col-10 pt-3').text(text);

//     // replace textarea with new content
//     $(this).replaceWith(taskP);
//   });
// });

// on save button click, then save in local storage'

// var saveDescription = function (p) $('.saveBtn').on('click', function () {
//   localStorage.setItem('description', JSON.stringify(description));
// });

//create event listener for save button click
