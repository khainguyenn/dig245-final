/* javascript */
const images = document.querySelectorAll('.quiz-container img');
images.forEach(image => {
  image.addEventListener('click', () => {
    document.querySelector('.quiz-container').innerHTML = "";
  });
});

