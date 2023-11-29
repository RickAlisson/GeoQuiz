const quizContainer = document.getElementById('quiz-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const pontuationText = document.querySelector("p")

const questions = [
  {
 
    answers: [
      { text: 'Argentina', correct: false },
      { text: 'Uruguai', correct: true },
      { text: 'El Salvador', correct: false },
      { text: 'Costa Rica', correct: false }
      ]
    },


  {
 
    answers: [
      { text: 'Índia', correct: true },
      { text: 'Paquistão', correct: false },
      { text: 'Bangladesh', correct: false },
      { text: 'Sri Lanka', correct: false }
      ]
    },

  {
 
    answers: [
      { text: 'Ucrânia', correct: false },
      { text: 'Polônia', correct: false },
      { text: 'Indonésia', correct: false },
      { text: 'Suécia', correct: true }
      ]
    },

  {
 
    answers: [
      { text: 'Espanha', correct: true },
      { text: 'Vaticano', correct: false },
      { text: 'Argentina', correct: false },
      { text: 'México', correct: false }
      ]
    },

  {
 
    answers: [
      { text: 'Belgica', correct: false },
      { text: 'Alemanha', correct: false },
      { text: 'Colômbia', correct: true },
      { text: 'Holanda', correct: false }
      ]
    },

  {
 
    answers: [
      { text: 'Tunísia', correct: false },
      { text: 'Turquia', correct: true },
      { text: 'China', correct: false },
      { text: 'Taiwan', correct: false }
      ]
    },

  {
 
    answers: [
      { text: 'Colômbia', correct: false },
      { text: 'Venezuela', correct: false },
      { text: 'Equador', correct: true },
      { text: 'Chile', correct: false }
      ]
    },

  {
 
    answers: [
      { text: 'Ucrânia', correct: false },
      { text: 'Polônia', correct: false },
      { text: 'Indonésia', correct: false },
      { text: 'Suécia', correct: true }
      ]
    },

  {
 
    answers: [
      { text: 'Tunísia', correct: false },
      { text: 'Turquia', correct: true },
      { text: 'China', correct: false },
      { text: 'Taiwan', correct: false }
      ]
    },


  {
 
    answers: [
      { text: 'Espanha', correct: true },
      { text: 'Vaticano', correct: false },
      { text: 'Argentina', correct: false },
      { text: 'México', correct: false }
      ]
    },

        ];

let currentQuestionIndex = 0;
let contagemPontos = 0;

var i = setInterval(function() {

  clearInterval(i);

  document.getElementById("loading").style.display = "none";
  document.getElementById("conteudo").style.display = "inline";

}, 3000);

function startGame() {
  currentQuestionIndex = 0;
  nextButton.classList.add('hide');
  showQuestion(questions[currentQuestionIndex]);
}

function resetAnswerButtons() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showQuestion(question) {
  resetAnswerButtons();
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });

  showFlag(questions[currentQuestionIndex])
}

function showFlag(question) {
  const correctAnswer = question.answers.find(answer => answer.correct);
  
  console.log(correctAnswer)

  const correctAnswerText = correctAnswer.text.toLowerCase()


  const imgSrc = `./${correctAnswerText}.png`;


  document.querySelector(".flag-container").innerHTML = `
      <img src="${imgSrc}" class="flag">
    `;
}

function pontos() {
  pontuationText.innerText = `${contagemPontos}/10`
  console.log(`${contagemPontos}/10`)
}

function selectAnswer(answer) {
  if (answer.correct && contagemPontos < 9) {
    contagemPontos++
    pontos()
    nextQuestion()
  } else if (answer.correct && contagemPontos == 9) {
    pontos()
    
    
    document.body.innerHTML = `
                            <div class="center lost-page">
                <h1 class="center">Você Ganhou! 😃</h1>
                <a href="hard.html">
                  <button class="btn restart-btn">Próximo nível</button>
                </a>
              </div>
              `
  } else {
    document.body.innerHTML = `
              <div class="center lost-page">
                <h1 class="center">Você Perdeu 🙁</h1>
                <p class="pontuacao-final">${contagemPontos}/10</p>
                <a href="home.html">
                  <button class="btn restart-btn">Recomeçar</button>
                </a>
              </div>
              `
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion(questions[currentQuestionIndex]);
  nextButton.classList.add('hide');
}

startGame();
