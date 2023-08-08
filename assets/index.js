const changingText = document.getElementById("changingText");
const texts = ["Developer.", "Web Designer."];
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

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
});

