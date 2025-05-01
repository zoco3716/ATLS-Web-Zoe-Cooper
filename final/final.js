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
    } 
    else if (e.key === 'ArrowRight') {
        basket.style.left = (left + 20) + 'px';
    }
});

function dropItem() {
    var item = document.createElement('div');
    item.className = 'item';
    item.style.left = Math.random() * (window.innerWidth - 30) + 'px';
    item.style.top = '0px';

    let isSubmit = false;

    starCount++;

    if (starCount % 5 === 0) {
        isSubmit = true;
        item.textContent = 'SUBMIT';
        item.classList.add('submitStar');
    } 
    else if (starCount % 10 === 0) {
        item.style.backgroundImage = 'url("https://i.ebayimg.com/images/g/VXsAAOSwBnNlop5N/s-l1200.jpg")';
        item.style.backgroundSize = 'cover';
    }

    document.body.appendChild(item);

    var fall = setInterval(function() {
        item.style.top = (item.offsetTop + 5) + 'px';

        if (item.offsetTop > window.innerHeight - 60) {
            var basketLeft = basket.offsetLeft;
            var itemLeft = item.offsetLeft;

            if (itemLeft > basketLeft - 100 && itemLeft < basketLeft + 80) {
                if (isSubmit) {
                    phoneNumber += currentDigit;
                    phoneDisplay.textContent = 'PHONE NUMBER: ' + phoneNumber;
                    currentDigit = 0;
                    currentDigitDisplay.textContent = 'CURRENT DIGIT: ' + currentDigit;

                    if (phoneNumber.length === 10) {
                        alert("You successfully entered this phone number: " + phoneNumber[0] + phoneNumber[1] + phoneNumber[2] + "-" + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + "-" + phoneNumber[6] + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + ". They didn't pick up... awkward.");
                    }
                } 
                else {
                    currentDigit = (currentDigit + 1) % 10;
                    currentDigitDisplay.textContent = 'CURRENT DIGIT: ' + currentDigit;
                }
                item.remove();
                clearInterval(fall);
            }
        }
    }, 20);
}

setInterval(dropItem, 1500);


// end (pop-up) when ten digits
// reset button
// ball to submit - bounce?