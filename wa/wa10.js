const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 1000 fahrenheit outside, so :insertx: turned on the air coditioning. When the temperature got much :inserty:, they wondered if they actually knew what an air conditioner does, then :insertz:. Bob stood beside them in awe, but was not surprised — :insertx: weighs 2 pounds, and it was a hot day."

let insertX = ["Carol", "Mike Wisowski", "Father Time"]

let insertY = ["colder", "spicier", "hotter"]

let insertZ = ["bought a car and left town", "went to school", "opened a fresh La Croix and kicked back"]

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(2 * 0.0714286) + ' stone';
    const temperature =  Math.round((1000 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('2 pounds', weight);
    newStory = newStory.replace('1000 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}