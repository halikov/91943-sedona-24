var searchFormBtn = document.querySelector('.btn-hotel-search');
var searchForm = document.querySelector('.search-form');
var entrance = searchForm.querySelector('[name="entrance"]');
var departure = searchForm.querySelector('[name="departure"]');
var adult = searchForm.querySelector('[name="adult"]');
var child = searchForm.querySelector('[name="child"]');
var btnSearch = searchForm.querySelector('[type="submit"]')

var isStorage = true;
var storageEntrance = '';
var storageDeparture = '';
var storageAdult = ''
var storageChild = ''

try {
  storageEntrance = localStorage.getItem('entrance');
  storageDeparture = localStorage.getItem('departure');
  storageAdult = localStorage.getItem('adult');
} catch(err) {
  isStorageSupport = false;
}

searchFormBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
    if(searchForm.classList.contains('search-form-hide')) {
      searchForm.classList.remove('search-form-hide');
      entrance.focus();
      if(storageEntrance) {
        entrance.value = storageEntrance;
        departure.focus();
      } else if(storageDeparture) {
        departure.value = storageDeparture;
        adult.focus();
      } else if(storageAdult) {
        adult.value = storageAdult;
        child.focus();
      } else if(storageChild) {
        child.value = storageChild;
      } else {
        entrance.focus();
      }
    } else {
      searchForm.classList.remove('search-form-error');
      searchForm.classList.add('search-form-hide');
    }
});

searchForm.addEventListener('submit', function(evt) {
  if(!entrance.value || !departure.value || !adult.value) {
    evt.preventDefault();
    console.log('Нужно ввести даты въезда выезда и количество гостей!');
    searchForm.classList.remove('search-form-error');
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add('search-form-error');
  } else {
    if(isStorageSupport) {
      localStorage.setItem('entrance', entrance.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      searchForm.classList.remove('search-form-error');
      searchForm.classList.add('search-form-hide');
    }
  });
