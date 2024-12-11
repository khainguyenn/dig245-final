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
        <p class="title">Correct Answer! Deceptive Design Practice: Fake Scarcity</p>
        <p class="text">
          <strong>Definition</strong><br>
          Fake scarcity works by creating an artificial sense of limited availability around a product or service, pressuring users to act quickly out of fear of missing out. This tactic is achieved by displaying misleading messages about low stock levels or high demand. By exploiting the scarcity cognitive bias, this deceptive pattern preys on users' natural tendency to assign higher value to items that seem rare or exclusive, encouraging hasty decisions without thorough evaluation.
        </p>
        <p class="text">
          <strong>Example</strong><br>
          The Shopify app “Sales & Stock Counter” by HeyMerch allows store owners to display fake low stock messages. In its promotional materials, it provides a guide showing how to create deceptive low stock counters and fake sales numbers (see red outlined areas in the images). This technique manipulates user behavior by simulating urgency and demand.
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
        <p class="title">Correct Answer! Deceptive Design Practice: Visual Interference</p>
        <p class="text">
          <strong>Definition</strong><br>
          Visual interference manipulates perception by obscuring or disguising critical information. Tactics include using small, low-contrast text, overwhelming layouts, or placing important details in unexpected locations.
        </p>
        <p class="text">
          <strong>Example</strong><br>
          In 2019, Tesla allowed users to buy upgrades like "Full Self-Driving" for $4,000 via their app. Some purchases were accidental due to hidden, low-contrast text stating "upgrades cannot be refunded." Author Nassim Nicholas Taleb criticized this on Twitter, revealing he unintentionally purchased an upgrade while the app was in his pocket. (Image source: Reddit, 2019).
        </p>
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
        <p class="title">Correct Answer: Deceptive Design Practice: Preselection</p>
        <p class="text">
          <strong>Definition</strong><br>
          Preselection uses the *default effect*, where users tend to stick with options already selected for them. Common methods include pre-ticked checkboxes, pre-added cart items, or default settings. This tactic exploits users' lack of awareness or reluctance to deviate, making them accept defaults without full understanding. Additionally, it may incorporate social proof or authority bias to influence decisions, making users feel they should conform to the default.
        </p>
        <p class="text">
          <strong>Example</strong><br>
          In 2021, the Trump campaign used preselected checkboxes to enable recurring donations. Later, a second preselected checkbox caused additional unintentional payments. This deceptive practice, as detailed by Shane Goldmacher in *The New York Times*, misled numerous donors.
        </p>
      </div>
      `;
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
    currentQuestion++;
  }

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
        <p class="title">Correct Answer! Deceptive Design Practice: Hidden Costs</p>
        <p class="text">
          <strong>Definition</strong><br>
          Hidden costs involve concealing additional fees or charges until the user is deep into the purchasing or sign-up process. By that stage, the user has already invested time and effort, making them more likely to proceed despite the unexpected costs.
        </p>
        <p class="text">
          <strong>Example</strong><br>
          Ticket reseller Stubhub used hidden costs by advertising low prices, drawing users through multiple steps, and revealing higher prices just before payment. Research from <em>Price Salience and Product Choice</em> (Blake et al., 2021) shows users unaware of ticket fees upfront spent 21% more and were 14.1% more likely to complete a purchase.
        </p>
      </div>
      `;
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
