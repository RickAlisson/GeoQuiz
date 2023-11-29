const quizContainer = document.getElementById('quiz-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const pontuationText = document.querySelector("p")

const questions = [

  {

    answers: [
      { text: 'Eslováquia', correct: false },
      { text: 'Eslovênia', correct: false },
      { text: 'Sérvia', correct: true },
      { text: 'Croácia', correct: false }
                  ]
            },

  {

    answers: [
      { text: 'Honduras', correct: true },
      { text: 'El Salvador', correct: false },
      { text: 'Guatemala', correct: false },
      { text: 'San Marino', correct: false }
                  ]
            },

  {

    answers: [
      { text: 'Congo', correct: false },
      { text: 'Quênia', correct: true },
      { text: 'Angola', correct: false },
      { text: 'Moçambique', correct: false }
                  ]
            },

  {

    answers: [
      { text: 'Panamá', correct: false },
      { text: 'Costa Rica', correct: false },
      { text: 'Singapura', correct: false },
      { text: 'Tailândia', correct: true }
    ]
  },


  {

    answers: [
      { text: 'Marrocos', correct: true },
      { text: 'Zâmbia', correct: false },
      { text: 'Botswana', correct: false },
      { text: 'África do Sul', correct: false },
    ]
  },

  {

    answers: [
      { text: 'Uzbequistão', correct: false },
      { text: 'Azerbaijão', correct: true },
      { text: 'Turcomenistão', correct: false },
      { text: 'Afeganistão', correct: false }
                  ]
            },

  {

    answers: [
      { text: 'Vaticano', correct: false },
      { text: 'São Tomé e Príncipe', correct: false },
      { text: 'Geórgia', correct: true },
      { text: 'Guiana Francesa', correct: false }
    ]
  },


  {

    answers: [
      { text: 'Omã', correct: false },
      { text: 'Palestina', correct: false },
      { text: 'Emirados Árabes', correct: false },
      { text: 'Paquistão', correct: true }
    ]
  },


  {

    answers: [
      { text: 'Bielorrússia', correct: false },
      { text: 'Bósnia e Herzegovina', correct: false },
      { text: 'Macedônia do Norte', correct: true },
      { text: 'Mongólia', correct: false },
    ]
  },

  {

    answers: [
      { text: 'Mongólia', correct: false },
      { text: 'Vietnã', correct: false },
      { text: 'Chipre', correct: false },
      { text: 'Taiwan', correct: true },
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
                <h1>Parabéns! <br> Você <font color="blue">zerou</font> o jogo! 😃</h1>
              </div>
              `
  } else {
    document.body.innerHTML = `
              <div class="center lost-page">
                <h1>Você Perdeu 🙁</h1>
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
