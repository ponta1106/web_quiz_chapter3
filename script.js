const quizSet = [
  {
    question: 'Webサーバーが何らかのエラーによってリクエストに応えられない場合や、高負荷状態で一時的にWebコンテンツを転送できない場合にWebサーバーのエラーであることを通知するステータスコードは〇〇番台',
    answer: '500',
  },
  {
    question: 'クライアント(Webブラウザ)のエラーであることを通知するステータスコードは〇〇番台',
    answer: '400',
  },
  {
    question: 'WebサイトのURLが変更されている場合などに使用されるステータスコードは〇〇番台',
    answer: '300',
  },
  {
    question: 'HTTPリクエストに対して、正常に処理した場合に通知するステータスコードは〇〇番台',
    answer: '200',
  },
  {
    question: 'HTTPリクエストを処理中であることを通知するステータスコードは〇〇番台',
    answer: '100',
  },
  {
    question: 'HTTPレスポンスのなかで、HTTPリクエストに対するWebサーバー内での処理結果が含まれている、3桁の数字をなんという？',
    answer: 'ステータスコード',
  },
  {
    question: 'HTTPメソッドのなかで、WebブラウザとWebサーバーの経路をチェックする場合に利用するメソッドは？(英語大文字)',
    answer: 'TRACE',
  },
  {
    question: 'HTTPメソッドのなかで、利用できるHTTPメソッドを問い合わせる場合に利用するメソッドは？(英語大文字)',
    answer: 'OPTIONS',
  },
  {
    question: 'HTTPメソッドのなかで、Webサーバーに接続するまでに別のサーバーを中継する場合に利用するメソッドは？(英語大文字)',
    answer: 'CONNECT',
  },
  {
    question: 'HTTPメソッドのなかで、指定したデータ(ファイル)を削除する場合に利用するメソッドは？(英語大文字)',
    answer: 'DELETE',
  },
  {
    question: 'HTTPメソッドのなかで、データ(ファイル)をアップロードする場合に利用するメソッドは？(英語大文字)',
    answer: 'PUT',
  },
  {
    question: 'HTTPメソッドのなかで、フォームに入力したパスワードといったデータを転送する場合に利用するメソッドは？(英語大文字)',
    answer: 'POST',
  },
  {
    question: 'HTTPメソッドのなかで、HTMLファイルや画像といったデータを取得する場合に利用するメソッドは？(英語大文字)',
    answer: 'GET',
  },
  {
    question: 'HTTPメソッドのなかで、HTTPヘッダーの情報のみを取得するメソッドは？(英語大文字)',
    answer: 'HEAD',
  },
  {
    question: 'HTTPレスポンスの中で、最下部に記載されており、HTMLや画像などのデータを格納する場所をなんという？',
    answer: 'メッセージボディ',
  },
  {
    question: 'HTTPレスポンスの中で、2番目に記載されており、Webサーバーのソフトウェア情報や、返信するデータのタイプ、データの圧縮方法どの情報をを伝えるものは？',
    answer: 'メッセージヘッダー',
  },
  {
    question: 'HTTPレスポンスの中で、最上部に記載されており、WebブラウザにWebサーバー内での処理の結果を伝えるものは？',
    answer: 'ステータス行',
  },
  {
    question: 'HTTPリクエストの中で、最下部に記載されており、Webサーバーにデータを送るために使われるものは？',
    answer: 'メッセージボディ',
  },
  {
    question: '一行空けることで、メッセージヘッダーの終わりを伝えるものをなんという？',
    answer: '空白行',
  },
  {
    question: 'HTTPリクエストの中で、2行目に記載されており、Webブラウザの種類や、対応しているデータのタイプ、データの圧縮方法、言語などの情報を伝えるものはなに？',
    answer: 'メッセージヘッダー',
  },
  {
    question: 'HTTPリクエストの中で、1行目に記載されており、Webサーバーに対してどのような処理を依頼するのかを伝える情報が含まれるものはなに？',
    answer: 'リクエスト行',
  },
  {
    question: 'HTTPメッセージは、Webブラウザからの要求である、「HTTPリクエスト」と「HTTP〇〇」の２種類に分けることができます。',
    answer: 'レスポンス',
  },
  {
    question: 'Webサーバーに対してどのような処理を依頼するのかを伝える情報が含まれているものを〇〇行という',
    answer: 'リクエスト',
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
