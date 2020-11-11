const ulTwo = document.getElementById("ul2");
const ulThree = document.getElementById("ul3");
const buttonOne = document.getElementById("button1");
const buttonTwo = document.getElementById("button2");
const buttonThreeL = document.getElementById("button3");

function showUlTwo() {
  ulTwo.classList.remove('show-more');
  buttonTwo.classList.remove("show-more-button");
  buttonOne.classList.add("show-more-button");
}

function showUlThree() {
  ulThree.classList.remove('show-more');
  buttonThreeL.classList.remove("show-more-button");
  buttonTwo.classList.add("show-more-button");
}

function hideDonors() {
  ulTwo.classList.add('show-more');
  ulThree.classList.add('show-more');
  buttonOne.classList.remove("show-more-button");
  buttonTwo.classList.add("show-more-button");
  buttonThreeL.classList.add("show-more-button");
}

// Event Listeners
buttonOne.addEventListener('click', showUlTwo);
buttonTwo.addEventListener('click', showUlThree);
buttonThreeL.addEventListener('click', hideDonors);
