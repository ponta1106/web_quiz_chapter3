const quizSet = [
  {
    question: 'webの正式名称は英語でなんという？',
    answer: 'World Wide Web'
  },
  {
    question: 'web上の文書は〇〇と呼ばれる言語で構成されている。',
    answer: 'ハイパーテキスト'
  },
  {
    question: 'ハイパーテキストは１つのページの中に別のWebページへの参照(〇〇)を埋め込むことができる。',
    answer: 'ハイパーリンク'
  },
  {
    question: 'WebはCERN(欧州原子核研究機構)の〇〇によって開発された。(カタカナのみで入力してください)',
    answer: 'ティムバーナーズリー'
  },
  {
    question: 'インターネットを開発したアメリカ国防総省の高等研究計画局はなに？（アルファベット大文字４文字）',
    answer: 'ARPA'
  },
  {
    question: '１つのドメインにある複数のWebページの集まりをなんという？',
    answer: 'Webサイト'
  },
  {
    question: 'コンピューターの機能とユーザーのやりとりを橋渡しをする機能をなんという？',
    answer: 'ユーザーインターフェース'
  },
  {
    question: 'ソフトウェア同士のやりとりの橋渡しをする機能を英語大文字３文字でなんという？',
    answer: 'API'
  },
  {
    question: 'ハイパーテキストを記述するための言語は英語でなに？',
    answer: 'HTML'
  },
  {
    question: 'ハイパーテキストを解釈して、人間が読みやすいように作り変えて表示してくれるプログラムをなんという',
    answer: 'Webブラウザ'
  },
  {
    question: 'Webブラウザからコンテンツの要求があった際、必要なコンテンツをネットワークを通してwebブラウザに送信する役割をもっているものはなに？',
    answer: 'Webサーバー'
  },
  {
    question: 'Webブラウザからコンテンツの要求があった際、必要なコンテンツをネットワークを通してwebブラウザに送信する役割をもっているものはなに？',
    answer: 'Webサーバー'
  },
  {
    question: 'ハイパーテキストのやりとりをするうえで必要となるさまざまな手順が定義されたものを英語大文字でなんという？',
    answer: 'HTTP'
  },
  {
    question: '「どのやりとりの手順で」「どのWebサーバー」に「何のコンテンツを」取りに行くかという情報が含まれているものを英語大文字でなんという？',
    answer: 'URL'
  },
  {
    question: '何度アクセスしても毎回同じものが表示されるWebページをなんと呼ぶ？',
    answer: '静的ページ'
  },
  {
    question: 'アクセスした時の状況に応じて異なる内容が表示されるWebページをなんと呼ぶ？',
    answer: '動的ページ'
  },
  {
    question: 'WebサーバーがWebブラウザからの要求に応じてプログラムを起動させるための仕組みをなんという？(英語大文字で入力してください)',
    answer: 'CGI'
  },
  {
    question: 'CGIから呼び出されるプログラムを〇〇スクリプトという',
    answer: 'サーバーサイド'
  },
  {
    question: 'HTMLに埋め込まれ、Webブラウザによって読み込まれる際に実行されるプログラムを〇〇スクリプトという',
    answer: 'クライアントサイド'
  },
  {
    question: '「どのWebブラウザでも同じようにWebページが表示される」状態を実現するために規格を決める作業を〇〇という。',
    answer: '標準化'
  },
  {
    question: 'Webの標準化をすすめる団体を〇〇〇という。',
    answer: 'W3C'
  },
  {
    question: 'RESTの原則に従って設計されたシステムを〇〇なシステムと呼ぶ。',
    answer: 'RESTful'
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