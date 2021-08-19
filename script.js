const quizSet = [
  {
    question: '複数のHTTPリクエストを送信できることをなんという？',
    answer: 'HTTPパイプライン',
  },
  {
    question: 'コネクションを継続利用できることをなんという？',
    answer: 'HTTPキープアライブ',
  },
  {
    question: 'クライアントからの接続要求に対して、サーバーが接続可能であることを伝える方法をなんという？(英語大文字とカナで)',
    answer: 'ACKパケット',
  },
  {
    question: 'クライアントからの接続要求をなんという？(英語大文字とカナで)',
    answer: 'SYNパケット',
  },
  {
    question: 'TCPが、クライアントとサーバーがお互いに通信できる状態なのか、確認することを〇〇の確立という。',
    answer: 'コネクション',
  },
  {
    question: 'WebブラウザからのHTTPリクエストと、それに対してのWebサーバーからのHTTPレスポンスを繰り返し行うことでWebサイトを閲覧できるが、このときデータのやりとりを行うのは〇〇である。',
    answer: 'TCP',
  },
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
  {
    question: 'Webサイトを通じてショッピング、バンキング、チケット予約などのサービスを安心して利用できるように、大切なデータを守る仕組みをなんという？',
    answer: 'HTTPS',
  },
  {
    question: 'HTTPの特徴は「状態を保持しない」〇〇(カタカナ)である。',
    answer: 'ステートレス',
  },
  {
    question: '「状態を保持」しておき、次の処理内容に反映されるような方式を〇〇という。',
    answer: 'ステートフル',
  },
  {
    question: 'ショッピングサイトなどで状態を保持し管理する必要がある場合は(英語で)〇〇と呼ばれるデータが用いられる',
    answer: 'Cookie',
  },
  {
    question: 'Cookieの送信には〇〇が利用される。',
    answer: 'メッセージヘッダー',
  },
  {
    question: 'WebサーバーはHTTPレスポンスに「〇〇」ヘッダーを含めることでCookieを送信できる',
    answer: 'Set-Cookie',
  },
  {
    question: '有効期限が設定されていないCookieは、Webブラウザが閉じられると同時に削除される。このようなCookieを「〇〇」と呼びます。',
    answer: 'セッションCookie',
  },
  {
    question: 'WebブラウザとWebサーバーのやりとりにおいて、一連の関連性のある処理の流れを「〇〇」と呼ぶ。',
    answer: 'セッション',
  },
  {
    question: 'セッション管理においてWebブラウザを識別するための情報を「〇〇」と呼ぶ。',
    answer: 'セッションID',
  },
  {
    question: '情報やデータといったリソースを識別するための記述方法を〇〇と呼ぶ。',
    answer: 'URI',
  },
  {
    question: 'URIのうちリソースが存在する場所を示すものを〇〇という。',
    answer: 'URL',
  },
  {
    question: 'HTTPリクエストの場合、URIはリクエスト行のメソッドに続いて記述され、「〇〇」とも呼ばれる。',
    answer: 'リクエストURI',
  },
  {
    question: 'HTTPリクエストの場合、URIはリクエスト行のメソッドに続いて記述され、「〇〇」とも呼ばれる。',
    answer: 'リクエストURI',
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
