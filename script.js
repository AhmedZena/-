let popupRight = document.getElementById("popupRight");
let popupWrong = document.getElementById("popupWrong");
let popup = document.getElementById("popupChoice");
let popupGetItem = document.getElementById("popupGetItem");
let mainContainer = document.getElementsByClassName("slideshow-container");
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

// get the slide number from the local storage and go to if it's exist
if (
  localStorage.getItem("slideIndex") == null ||
  localStorage.getItem("slideIndex") == 1
) {
  var slideIndex = 1;
  mainContainer[0].style.opacity = "1";
  showSlides(slideIndex);
} else {
  popupGetItem.style.display = "block";
  mainContainer[0].style.opacity = "0";
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.display = "none";
  }
}

// func to get the slide number from the local storage
function getItem() {
  slideNum = localStorage.getItem("slideIndex");
  mainContainer[0].style.opacity = "1";
  popupGetItem.style.display = "none";
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.display = "inline-block";
  }
  showSlides(slideNum);
}

// func to change the slide when click on the arrow
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// func to change the slide when click on the dot
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// func to show the slides
function showSlides(n) {
  n = parseInt(n);
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slideIndex);
  slides[slideIndex - 1].style.display = "block";
  dots[slides.length - slideIndex].className += " active";
  localStorage.setItem("slideIndex", slideIndex);
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
  } else if (num === 2) {
    popupGetItem.style.display = "none";
    showSlides(1);

    for (let i = 0; i < dots.length; i++) {
      dots[i].style.display = "inline-block";
    }
  }
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// question 1
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
