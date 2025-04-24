var basket = document.getElementById('basket');
var scoreDisplay = document.getElementById('volume');
var volume = 0;
var goingUp = true;

document.addEventListener('keydown', function(e) {
  var left = basket.offsetLeft;
  if (e.key === 'ArrowLeft') basket.style.left = (left - 20) + 'px';
  if (e.key === 'ArrowRight') basket.style.left = (left + 20) + 'px';
});

function dropItem() {
  var item = document.createElement('div');
  item.className = 'item';
  item.style.left = Math.random() * (window.innerWidth - 30) + 'px';
  item.style.top = '0px';
  document.body.appendChild(item);

  var fall = setInterval(function() {
    item.style.top = (item.offsetTop + 5) + 'px';

    var basketLeft = basket.offsetLeft;
    var itemLeft = item.offsetLeft;

    if (item.offsetTop > window.innerHeight - 60 &&
        itemLeft > basketLeft - 30 && itemLeft < basketLeft + 80) {
    

    if (goingUp) {
        volume++;
        if (volume >= 10) goingUp = false;
      } else {
        volume--;
        if (volume <= 0) goingUp = true;
      }

      scoreDisplay.textContent = 'Volume: ' + volume;
      item.remove();
      clearInterval(fall);
    }

    if (item.offsetTop > window.innerHeight) {
      item.remove();
      clearInterval(fall);
    }
  }, 20);
}

setInterval(dropItem, 1500);
