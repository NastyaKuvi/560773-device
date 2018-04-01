var service = document.querySelector('.service');
var serviceBtns = document.querySelectorAll('.service-button');
var serviceCards = document.querySelectorAll('.service-card');

var writeUsOpenBtn = document.querySelector('.write-us-button');
var writeUsSection = document.querySelector('.modal-form-write-us');
var writeUsCloseBtn = writeUsSection.querySelector('.modal-close');
var writeUsform = document.querySelector('.write-us-form');
var userName = writeUsform.querySelector('[name=user-name]');
var userEmail = writeUsform.querySelector('[name=user-email]');
var userLetter = writeUsform.querySelector('[name=user-letter]');

var mapOpenBtn = document.querySelector('.contacts-map');
var mapSection = document.querySelector('.modal-map');
var mapCloseBtn = mapSection.querySelector('.modal-close');

var prevSelectedIndex = 0;

var setClickHandler = function (btn, index) {
  btn.addEventListener('click', function(evt) {
    if(!evt.target.classList.contains('selected')) {
      serviceBtns[prevSelectedIndex].classList.remove('selected');
      serviceCards[prevSelectedIndex].classList.remove('selected');

      evt.target.classList.add('selected');
      serviceCards[index].classList.add('selected');
      prevSelectedIndex = index;
    }
  })
};

for (var i=0; i<serviceBtns.length; i++) {
  setClickHandler(serviceBtns[i], i);
};

writeUsOpenBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsSection.classList.add('modal-visible');
  userName.focus();
});

writeUsCloseBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsSection.classList.remove('modal-visible');
  writeUsSection.classList.remove('modal-error');
});

writeUsform.addEventListener('submit', function (evt) {
  if (!userName.value || !userEmail.value || !userLetter.value) {
    evt.preventDefault();
    writeUsSection.classList.remove('modal-error');
    writeUsSection.offsetWidth = writeUsSection.offsetWidth;
    writeUsSection.classList.add('modal-error');
  }
});

mapOpenBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapSection.classList.add('modal-visible');
});

mapCloseBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapSection.classList.remove('modal-visible');
});