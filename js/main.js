var service = document.querySelector('.service');
var serviceBtns = document.querySelectorAll('.service-button');
var serviceCards = document.querySelectorAll('.service-card');

var prevSelectedIndex = 0;

var setClickHandler = function(btn, index) {
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
}