const quizSet = [
  {
    question: 'サーバーから提供された情報やサービスを利用する役割を持つコンピューターを〇〇という。',
    answer: 'クライアント'
  },
  {
    question: 'スマートフォンやパソコンを利用してWebサイトを閲覧する場合、〇〇が提供するサービスを利用する。',
    answer: 'インターネットサービスプロバイダー'
  },
  {
    question: 'ネットワークに接続された機器同士が通信するときの、あらかじめ決められた共通のルールや手順のことをカタカナでなんという？',
    answer: 'プロトコル'
  },
  {
    question: 'インターネットへのアクセスが可能なスマートフォンやパソコン、サーバーといったコンピューターは全て〇〇に対応している。',
    answer: 'TCP/IP'
  },
  {
    question: 'HTTPの正式名称をカタカナでなんという？',
    answer: 'ハイパーテキストトランスパープロトコル'
  },
  {
    question: 'コンピューター間でファイルをやり取りするときに使用する、ファイル送受信用のプロトコルをなんという？(英語大文字)',
    answer: 'FTP'
  },
  {
    question: '電子メールを送信するときに使用する、メール送受信用のプロトコル',
    answer: 'SMTP'
  },
  {
    question: 'ユーザーがメールサーバーから自分のメールを取り出すときに使用する、メール受信用のプロトコル',
    answer: ''
  },
  {
    question: 'アプリケーションごとのやりとりを規定している、TCP/IPのレイヤー４はなに？',
    answer: 'アプリケーション層'
  },
  {
    question: 'データの分割や品質保証を規定している、TCP/IPのレイヤー3はなに？',
    answer: 'トランスポート層'
  },
  {
    question: 'ネットワーク間の通信を規定している、TCP/IPのレイヤー2はなに？',
    answer: 'インターネット層'
  },
  {
    question: 'コネクタ形状や周波数といったハードウェアに関する規定を行う、TCP/IPのレイヤー1はなに？',
    answer: 'ネットワークインターフェース層'
  },
  {
    question: 'インターネットに接続されたコンピューターを特定し、データの行き先を管理するために利用されている識別番号をなんという？',
    answer: 'IPアドレス'
  },
  {
    question: 'IPアドレスと〇〇を指定することで特定のコンピューターの特定のサービスを受け取ることができる。',
    answer: 'ポート番号'
  },
  {
    question: 'ポート番号はゼロから〇〇番まである',
    answer: '65535'
  },
  {
    question: 'Webサーバーのポート番号は〇〇番である',
    answer: '80'
  },
  {
    question: 'IPアドレスの別名として利用される、「example.com」の様なホスト名をなんという？',
    answer: 'ドメイン'
  },
  {
    question: '数字で表記されるIPアドレスは私たちにとって覚えにくく扱いにくいため、〇〇がIPアドレスの別名として利用される。',
    answer: 'ドメイン'
  },
  {
    question: 'ドメインをIPアドレスに変換する仕組みをなんという？',
    answer: 'DSN'
  },
  {
    question: '2016年第一四半期の時点でドメイン登録者は何件？',
    answer: '3億2,000万件'
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