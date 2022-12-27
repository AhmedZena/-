let popupRight = document.getElementById("popupRight");
let popupWrong = document.getElementById("popupWrong");
let popup = document.getElementById("popupChoice");
let mainContainer = document.getElementsByClassName("slideshow-container");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  //   console.log(dots);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    //   for (i = dots.length - 1; i >= 0; i--) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slides.length - slideIndex].className += " active";
}

// function to run when the button is clicked which will check if the chosen radio button is correct or not

function questionOne() {
  // if no radio selected
  if (document.querySelector('input[name="q1"]:checked') == null) {
    // alert("Please select an answer");
    popup.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
  }

  var correctRadioAns = document.querySelector(
    'input[name="q1"]:checked'
  ).value;
  console.log(correctRadioAns);
  if (correctRadioAns == 2) {
    // alert("Correct");
    popupRight.style.display = "block";

    // make obacity of the main container 0.5
    mainContainer[0].style.opacity = "0.3";
  } else {
    // alert("Wrong");
    popupWrong.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
  }
}

// func to close the popup
function closePopup(num) {
  //   plusSlides(1);
  mainContainer[0].style.opacity = "1";
  if (num === 1) {
    popupRight.style.display = "none";
    plusSlides(1);
  } else if (num === 0) {
    popupWrong.style.display = "none";
    popup.style.display = "none";
  }
}

// question 2
function questionTwo() {
  if (document.querySelector('input[name="q2"]:checked') == null) {
    popup.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
  }

  var correctRadioAns = document.querySelector(
    'input[name="q2"]:checked'
  ).value;
  console.log(correctRadioAns);
  if (correctRadioAns == 3) {
    popupRight.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
  } else {
    popupWrong.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
  }
}

// question 3 that has 3 correct answers
function questionThree() {
  if (document.querySelector('input[name="q3"]:checked') == null) {
    popup.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
    return;
  }
  let checkBox = document.querySelectorAll('input[name="q3"]:checked');

  let result = [];
  checkBox.forEach((item) => {
    result.push(item.value);
  });
  console.log(result);
  // check if the array contains the correct answers
  if (result.includes("1") && result.includes("3") && result.includes("5")) {
    popupRight.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
  } else {
    popupWrong.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
  }
}

// question 4 that the answer is a text
function questionFour() {
  let input = document.getElementById("q4");

  //   console.log(txtInput);
  if (input == null || input.value == "") {
    popup.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
    return;
  }

  if (input.value == "المسجد") {
    popupRight.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
  } else {
    popupWrong.style.display = "block";
    mainContainer[0].style.opacity = "0.3";
  }
}
