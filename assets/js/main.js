const resetButton = document.getElementById('reset-button');
const nextQuestionButton = document.getElementById('next-question-button');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');

// question 1
document.querySelectorAll('#question1 .option').forEach(option => {
  option.addEventListener('click', () => {
    if (option.id === 'option2') { // Correct answer for question 1
      const wrongOption = document.getElementById('option1');
      wrongOption.innerHTML = `
        <div class="replaced">
          <p class="title">Correct Answer: Deceptive Design Practice: Unintuitive Package Display</p>
          <p class="text">
            T-Mobile arranges plans to show the most expensive option first, while the cheapest plan is hidden far to the left, requiring excessive scrolling to find. This manipulates users into choosing pricier plans. To avoid this, <b>take your time</b>, <b>explore all options</b>, and <b>look closely for any hidden or less visible deals</b> before deciding.
          </p>
        </div>`;
      nextQuestionButton.classList.remove('hidden'); // Next Question
    } else {
      alert('Please choose again');
    }
  });
});

// Handle question 2
nextQuestionButton.addEventListener('click', () => {
  question1.classList.add('hidden'); 
  question2.classList.remove('hidden');
});

document.querySelectorAll('#question2 .option').forEach(option => {
  option.addEventListener('click', () => {
    if (option.id === 'option4') { // Correct answer for question 2
      const wrongOption = document.getElementById('option3');
      wrongOption.innerHTML = `
        <div class="replaced">
          <p class="title">Correct Answer: Placeholder Example</p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
          </p>
        </div>`;
    } else {
      alert('Please choose again');
    }
  });
});

// Reset button to reload the quiz
resetButton.addEventListener('click', () => {
  location.reload();
});
