const quizSet = [
  //0
  {
    question: 'webの正式名称は英語でなんという？',
    answer: 'World Wide Web'
  },
  //1
  {
    question: 'web上の文書は〇〇と呼ばれる言語で構成されている。',
    answer: 'ハイパーテキスト'
  },
  //2
  {
    question: 'ハイパーテキストは１つのページの中に別のWebページへの参照(〇〇)を埋め込むことができる。',
    answer: 'ハイパーリンク'
  },
  //3
  {
    question: 'WebはCERN(欧州原子核研究機構)の〇〇によって開発された。(カタカナのみで入力してください)',
    answer: 'ティムバーナーズリー'
  },
  //3
  {
    question: 'WebはCERN(欧州原子核研究機構)の〇〇によって開発された。(カタカナのみで入力してください)',
    answer: 'ティムバーナーズリー'
  },
];
const quizAmount = quizSet.length;
let index = quizSet.length -1; 
let count = 1;

const questionCount = document.getElementById('questionCount');
const answerArea = document.getElementById('answerArea');
const questionArea = document.getElementById('questionArea');
const playersAnswer = document.getElementById('playersAnswer');
const answerButton = document.getElementById('answerButton');
const correct = document.getElementById('correct');
const unCorrect = document.getElementById('unCorrect');
const errorMessage = document.getElementById('errorMessage');
const nextQuizButton = document.querySelectorAll('.nextQuizButton');
const showAnswerButton = document.getElementById('showAnswerButton');
const showAnswerArea = document.getElementById('showAnswerArea');
const maritozzo = document.getElementById('maritozzo');

function setQuiz() {
  questionArea.textContent = quizSet[index].question;
  answerArea.textContent = quizSet[index].answer;
  questionCount.textContent = `${count}問目 / 全${quizAmount}問`;
  playersAnswer.value = ''
  errorMessage.classList.add('hide');
  correct.classList.add('hide');
  unCorrect.classList.add('hide');
  showAnswerArea.classList.add('hide');
}

setQuiz();
// 「回答する」ボタンをおしたらジャッジ
answerButton.addEventListener('click', () => {
  if(playersAnswer.value === ''){
    errorMessage.classList.remove('hide');
  }
  else if(playersAnswer.value === answerArea.textContent) {
    correct.classList.remove('hide');
  }else{
    unCorrect.classList.remove('hide');
  };
})

// 「答えをみる」を押したら答えを表示する
showAnswerButton.addEventListener('click', () => {
  showAnswerArea.classList.remove('hide');
})

// 「次の問題へ」を押したら次の問題をセットする
nextQuizButton.forEach(function(btn) {
  btn.addEventListener('click', () => {
    if(index === 0) {
      btn.textContent = 'お疲れ様です！全問終了です！';
    }else if(index > 0 ) {
      index -= 1;
      count += 1;
      setQuiz();
    }
  })
})

deg = 0;
maritozzo.addEventListener('click', ()=>{
  deg += 360
  maritozzo.style.transform = `rotate(${deg}deg)`;
})