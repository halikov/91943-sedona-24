var feedbackBtn = document.querySelector('.btn-hotel-search');
var feedback = document.querySelector('.search-form');
var entrance = feedback.querySelector('[name="entrance"]');
var departure = feedback.querySelector('[name="departure"]');
var adult = feedback.querySelector('[name="adult"]');
var child = feedback.querySelector('[name="child"]');


feedbackBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
    if(feedback.classList.contains('search-form-hide')) {
      evt.preventDefault(evt);
      feedback.classList.remove('search-form-hide');
    } else {
      evt.preventDefault(evt);
      feedback.classList.add('search-form-hide');
    }
});

feedback.addEventListener('submit', function(evt) {
  if(!departure || !entrance || !adult || !child) {
    evt.preventDefault();
    console.log('Нужно ввести даты въезда выезда и количество гостей!');
    feedback.classList.add('feedback-error');
  }
});

