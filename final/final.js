var basket = document.getElementById('basket');
var currentDigitDisplay = document.getElementById('currentDigit');
var phoneDisplay = document.getElementById('phoneDisplay');
var currentDigit = 0;
var phoneNumber = '';
var starCount = 0;

document.addEventListener('keydown', function(e) {
    var left = basket.offsetLeft;
    if (e.key === 'ArrowLeft') {
        basket.style.left = (left - 20) + 'px';
    } else if (e.key === 'ArrowRight') {
        basket.style.left = (left + 20) + 'px';
    } else if (e.code === 'Space') {
        phoneNumber += currentDigit;
        phoneDisplay.textContent = 'PHONE: ' + phoneNumber;
        currentDigit = 0;
        currentDigitDisplay.textContent = 'CURRENT DIGIT: ' + currentDigit;
    }
});

function dropItem() {
    if (phoneNumber.length >= 10) return;

    var item = document.createElement('div');
    item.className = 'item';
    item.style.left = Math.random() * (window.innerWidth - 30) + 'px';
    item.style.top = '0px';
    document.body.appendChild(item);

    starCount++;

    if (starCount % 10 === 0) {
        item.style.width = '50px';
        item.style.height = '50px';
        item.style.backgroundImage = 'url("https://i.ebayimg.com/images/g/VXsAAOSwBnNlop5N/s-l1200.jpg")';
        item.style.backgroundSize = 'cover';
    }

    var fall = setInterval(function() {
        item.style.top = (item.offsetTop + 5) + 'px';

        if (item.offsetTop > window.innerHeight - 60) {
            var basketLeft = basket.offsetLeft;
            var itemLeft = item.offsetLeft;

            if (itemLeft > basketLeft - 100 && itemLeft < basketLeft + 80) {
                currentDigit = (currentDigit + 1) % 10;
                currentDigitDisplay.textContent = 'CURRENT DIGIT: ' + currentDigit;
                item.remove();
                clearInterval(fall);
            }
        }
    }, 20);
}

setInterval(dropItem, 1500);