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
    }
});

function dropItem() {
    var item = document.createElement('div');
    item.className = 'item';
    item.style.left = Math.random() * (window.innerWidth - 30) + 'px';
    item.style.top = '0px';

    // Track item type
    let isSubmit = false;

    starCount++;

    if (starCount % 5 === 0) {
        isSubmit = true;
        item.textContent = 'SUBMIT';
        item.style.color = 'black';
        item.style.fontWeight = 'bold';
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'center';
        item.style.fontSize = '14px';
        item.style.width = '60px';
        item.style.height = '60px';
        item.style.position = 'absolute';
    } else if (starCount % 10 === 0) {
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
                    // Submit behavior
                    phoneNumber += currentDigit;
                    phoneDisplay.textContent = 'PHONE NUMBER: ' + phoneNumber;
                    currentDigit = 0;
                    currentDigitDisplay.textContent = 'CURRENT DIGIT: ' + currentDigit;

                    if (phoneNumber.length === 10) {
                        alert("You successfully entered this phone number: " +
                            phoneNumber[0]+phoneNumber[1]+phoneNumber[2]+"-" +
                            phoneNumber[3]+phoneNumber[4]+phoneNumber[5]+"-" +
                            phoneNumber[6]+phoneNumber[7]+phoneNumber[8]+phoneNumber[9]);
                    }
                } else {
                    // Regular item behavior
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

document.getElementById('submitStar').addEventListener('click', function() {
    phoneNumber += currentDigit;
    phoneDisplay.textContent = 'PHONE NUMBER: ' + phoneNumber;
    currentDigit = 0;
    currentDigitDisplay.textContent = 'CURRENT DIGIT: ' + currentDigit;

    if (phoneNumber.length === 10) {
        alert("You successfully entered this phone number: " +
            phoneNumber[0]+phoneNumber[1]+phoneNumber[2]+"-" +
            phoneNumber[3]+phoneNumber[4]+phoneNumber[5]+"-" +
            phoneNumber[6]+phoneNumber[7]+phoneNumber[8]+phoneNumber[9]);
    }
});




// end (pop-up) when ten digits
// reset button
// ball to submit - bounce?