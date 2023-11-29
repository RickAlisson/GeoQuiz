const quizContainer = document.getElementById('quiz-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const pontuationText = document.querySelector("p")

const questions = [
  {

    answers: [
      { text: 'China', correct: false },
      { text: 'Rússia', correct: false },
      { text: 'Índia', correct: false },
      { text: 'Brasil', correct: true }
                  ]
            },

  {

    answers: [
      { text: 'Japão', correct: false },
      { text: 'China', correct: true },
      { text: 'Laos', correct: false },
      { text: 'Coreia do Sul', correct: false }
                  ]
            },

  {

    answers: [
      { text: 'Alemanha', correct: true },
      { text: 'Colômbia', correct: false },
      { text: 'Belgica', correct: false },
      { text: 'Espanha', correct: false }
                  ]
            },

  {

    answers: [
      { text: 'Nova Zelândia', correct: false },
      { text: 'Australia', correct: false },
      { text: 'Estados Unidos', correct: true },
      { text: 'Reino Unido', correct: false }
                  ]
            },

  {

    answers: [
      { text: 'China', correct: false },
      { text: 'Coreia do Norte', correct: true },
      { text: 'Vietnã', correct: false },
      { text: 'Taiwan', correct: false }
    ]
  },


  {

    answers: [
      { text: 'República Tcheca', correct: false },
      { text: 'Eslováquia', correct: false },
      { text: 'Rússia', correct: true },
      { text: 'Polônia', correct: false },
    ]
  },


  {

    answers: [
      { text: 'França', correct: true },
      { text: 'Itália', correct: false },
      { text: 'Irlanda', correct: false },
      { text: 'Nigéria', correct: false }
    ]
  },


  {

    answers: [
      { text: 'Bélgica', correct: false },
      { text: 'Itália', correct: false },
      { text: 'México', correct: true },
      { text: 'Hungria', correct: false }
    ]
  },


  {

    answers: [
      { text: 'Grécia', correct: false },
      { text: 'Finlândia', correct: false },
      { text: 'Islândia', correct: false },
      { text: 'Israel', correct: true },
    ]
  },
  
  {

    answers: [
      { text: 'Irlanda', correct: false },
      { text: 'Itália', correct: true },
      { text: 'México', correct: false },
      { text: 'Hungria', correct: true },
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

  const correctAnswerText = correctAnswer.text.toLowerCase()


  const imgSrc = `/assets/images/${correctAnswerText}.png`;


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
                <a href="medium.html">
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