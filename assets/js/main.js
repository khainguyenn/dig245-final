const resetButton = document.getElementById('reset-button');
const nextQuestionButton = document.getElementById('next-question-button');
const question1 = document.getElementById('question1');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');
const question2 = document.getElementById('question2');
const scoreDisplay = document.getElementById('score'); 

let score = 0; 
// Function to update the score display
function updateScoreDisplay() {
  scoreDisplay.textContent = score;
}

// Function to show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification-box';
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
}

// Handle Question 1
document.querySelectorAll('#question1 .option').forEach(option => {
  option.addEventListener('click', () => {
    if (option.id === 'option2') {
      score += 30; 
      updateScoreDisplay();
      const wrongOption = document.getElementById('option1');
      wrongOption.innerHTML = `
        <div class="replaced">
          <p class="title">Correct Answer: Deceptive Design Practice: Unintuitive Package Display</p>
          <p class="text">
            T-Mobile arranges plans to show the most expensive option first, while the cheapest plan is hidden far to the left, requiring excessive scrolling to find. This manipulates users into choosing pricier plans. To avoid this, <b>take your time</b>, <b>explore all options</b>, and <b>look closely for any hidden or less visible deals</b> before deciding.
          </p>
        </div>`;
      nextQuestionButton.classList.remove('d-none'); 
    } else {
      showNotification("Wrong answer! Please try again.");
    }
  });
});

// Handle Question 2
document.querySelectorAll('#question2 .option').forEach(option => {
  option.addEventListener('click', () => {
    if (option.id === 'option5') { // Left option is correct
      score += 30;
      updateScoreDisplay();
      const wrongOption = document.getElementById('option6');
      wrongOption.innerHTML = `
        <div class="replaced">
          <p class="title">Correct Answer: Placeholder Example</p>
          <p class="text">Explanation for Question 3.</p>
        </div>`;
      nextQuestionButton.classList.remove('d-none');
    } else {
      showNotification("Wrong answer! Please try again.");
    }
  });
});

// Handle Question 3
document.querySelectorAll('#question3 .option').forEach(option => {
  option.addEventListener('click', () => {
    if (option.id === 'option7') { // Left option is correct
      score += 30;
      updateScoreDisplay();
      const wrongOption = document.getElementById('option8');
      wrongOption.innerHTML = `
        <div class="replaced">
          <p class="title">Correct Answer: Placeholder Example</p>
          <p class="text">Explanation for Question 4.</p>
        </div>`;
      nextQuestionButton.classList.remove('d-none');
    } else {
      showNotification("Wrong answer! Please try again.");
    }
  });
});

let currentQuestion = 1; // Track the current question number

nextQuestionButton.addEventListener('click', () => {
  const current = document.getElementById(`question${currentQuestion}`);
  const next = document.getElementById(`question${currentQuestion + 1}`);

  if (next) {
    current.classList.add('d-none');
    next.classList.remove('d-none'); 
    currentQuestion++; // Increment the question number
  }

  // Hide the Next Question button after transitioning
  nextQuestionButton.classList.add('d-none');
});


function showFinishButton() {
  const finishButton = document.createElement('div');
  finishButton.className = 'finish-box';
  finishButton.textContent = 'Finish Quiz';
  document.body.appendChild(finishButton);


  finishButton.addEventListener('click', () => {
    saveScore(); 
    window.location.href = 'scoreboard.html'; 
  });
}

// Handle Question 4
document.querySelectorAll('#question4 .option').forEach(option => {
  option.addEventListener('click', () => {
    if (option.id === 'option4') { 
      score += 30; 
      updateScoreDisplay(); 
      const wrongOption = document.getElementById('option3');
      wrongOption.innerHTML = `
        <div class="replaced">
          <p class="title">Correct Answer: Placeholder Example</p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
          </p>
        </div>`;
      showFinishButton(); 
    } else {
      showNotification("Wrong answer! Please try again.");
    }
  });
});


resetButton.addEventListener('click', () => {
  score = 0; 
  updateScoreDisplay(); 
  location.reload(); 
});


function saveScore() {
  localStorage.setItem('userScore', score);
}

showFinishButton.addEventListener('click', () => {
  saveScore(); // Save the score
  window.location.href = 'scoreboard.html'; 
});
