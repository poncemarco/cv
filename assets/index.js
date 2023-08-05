$(document).ready(function () {
    if ($(window).width() <= 767) {
      $('#sidebar').addClass('active');
    }
  
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  });
  const changingText = document.getElementById("changingText");
const texts = ["Soy un desarrollador", "Soy un diseñador"];
let textIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function changeText() {
  const currentText = texts[textIndex];
  if (isDeleting) {
    changingText.textContent = currentText.slice(0, letterIndex - 1);
    letterIndex--;
  } else {
    changingText.textContent = currentText.slice(0, letterIndex + 1);
    letterIndex++;
  }

  if (!isDeleting && letterIndex === currentText.length) {
    isDeleting = true;
    setTimeout(changeText, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(changeText, 200);
  } else {
    setTimeout(changeText, isDeleting ? 50 : 150);
  }
}

changeText();

  