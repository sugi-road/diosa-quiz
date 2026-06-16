const diagnosisQuestions = [
{
q: "試合で一番見たいプレーは？",
choices: [
{ text: "豪快なゴール", score: { attack: 3 } },
{ text: "スピード突破", score: { speed: 3 } },
{ text: "相手を止める守備", score: { defense: 3 } },
{ text: "華麗なテクニック", score: { technique: 3 } }
]
},
{
q: "推し選手に一番求めるものは？",
choices: [
{ text: "得点を決める力", score: { attack: 3 } },
{ text: "足の速さ", score: { speed: 3 } },
{ text: "守備の安定感", score: { defense: 3 } },
{ text: "ボール扱いの上手さ", score: { technique: 3 } }
]
},
{
q: "もし自分が監督なら、チームに欲しいのは？",
choices: [
{ text: "エースストライカー", score: { attack: 3 } },
{ text: "快足ウイング", score: { speed: 3 } },
{ text: "守備の要", score: { defense: 3 } },
{ text: "ゲームメーカー", score: { technique: 3 } }
]
},
{
q: "試合中に一番盛り上がる瞬間は？",
choices: [
{ text: "ゴールが決まった時", score: { attack: 2 } },
{ text: "相手を置き去りにした時", score: { speed: 2 } },
{ text: "スーパークリアした時", score: { defense: 2 } },
{ text: "見事なパスが通った時", score: { technique: 2 } }
]
},
{
q: "推し選手の年齢なら？",
choices: [
{ text: "ベテランが好き", score: { veteran: 3 } },
{ text: "若手が好き", score: { future: 3 } },
{ text: "年齢は気にしない", score: { passion: 1 } },
{ text: "人柄重視", score: { lovable: 3 } }
]
},
{
q: "応援したくなるのは？",
choices: [
{ text: "主力として活躍する選手", score: { veteran: 3 } },
{ text: "途中出場で流れを変える選手", score: { passion: 3 } },
{ text: "これから出番を増やす選手", score: { future: 3 } },
{ text: "ケガから復帰を目指す選手", score: { lovable: 3 } }
]
},
{
q: "チームの主将に選ぶなら？",
choices: [
{ text: "経験豊富な選手", score: { veteran: 2 } },
{ text: "熱く引っ張る選手", score: { passion: 2 } },
{ text: "みんなに好かれる選手", score: { lovable: 2 } },
{ text: "将来を担う若手", score: { future: 2 } }
]
},
{
q: "出身地で気になるのは？",
choices: [
{ text: "特に気にしない", score: {} },
{ text: "島根県出身", score: { local: 3 } },
{ text: "中国地方出身", score: { chugoku: 3 } },
{ text: "遠方出身", score: { far: 3 } }
]
},
{
q: "あなた自身はどちらかと言うと？",
choices: [
{ text: "結果を重視する", score: { attack: 2 } },
{ text: "行動力がある", score: { speed: 2 } },
{ text: "縁の下の力持ち", score: { defense: 2 } },
{ text: "工夫するのが好き", score: { technique: 2 } }
]
},
{
q: "ディオッサ出雲の試合で応援するなら？",
choices: [
{ text: "ゴールを期待する", score: { attack: 2 } },
{ text: "突破を期待する", score: { speed: 2 } },
{ text: "無失点を期待する", score: { defense: 2 } },
{ text: "華麗なプレーを期待する", score: { technique: 2 } }
]
}
];

const players = [
{name:"西村 清花",attack:1,speed:3,defense:5,technique:5,veteran:5,passion:5,lovable:4,future:1,local:0,chugoku:0,far:1},
{name:"渡部 那月",attack:3,speed:2,defense:5,technique:4,veteran:5,passion:1,lovable:3,future:1,local:1,chugoku:0,far:0},
{name:"オモロジェバ 英里香",attack:3,speed:5,defense:5,technique:4,veteran:2,passion:4,lovable:4,future:5,local:0,chugoku:0,far:1},
{name:"伊藤 明里",attack:3,speed:4,defense:3,technique:3,veteran:4,passion:3,lovable:2,future:3,local:0,chugoku:1,far:0},
{name:"安藤 真桜",attack:2,speed:5,defense:4,technique:3,veteran:2,passion:5,lovable:5,future:4,local:0,chugoku:1,far:0},
{name:"伊勢 さつき",attack:4,speed:4,defense:4,technique:5,veteran:3,passion:2,lovable:2,future:4,local:0,chugoku:0,far:1},
{name:"丸尾 梨菜",attack:5,speed:5,defense:2,technique:3,veteran:2,passion:1,lovable:2,future:3,local:0,chugoku:0,far:1},
{name:"友近 真那",attack:4,speed:3,defense:5,technique:4,veteran:5,passion:5,lovable:5,future:1,local:0,chugoku:0,far:1},
{name:"河村 祐美",attack:4,speed:4,defense:3,technique:3,veteran:3,passion:2,lovable:2,future:3,local:0,chugoku:0,far:1},
{name:"原 美埜里",attack:3,speed:4,defense:3,technique:4,veteran:2,passion:3,lovable:5,future:5,local:1,chugoku:0,far:0},
{name:"宮武 里奈",attack:4,speed:3,defense:4,technique:4,veteran:3,passion:3,lovable:3,future:4,local:0,chugoku:0,far:1},
{name:"打越 怜",attack:3,speed:4,defense:3,technique:4,veteran:3,passion:2,lovable:2,future:3,local:0,chugoku:0,far:1},
{name:"恒石 亜弓",attack:2,speed:3,defense:3,technique:3,veteran:3,passion:2,lovable:2,future:3,local:0,chugoku:0,far:1},
{name:"佐藤 萌里",attack:3,speed:4,defense:3,technique:4,veteran:2,passion:2,lovable:2,future:4,local:0,chugoku:0,far:1},
{name:"相浦 幸桜",attack:2,speed:3,defense:3,technique:3,veteran:2,passion:2,lovable:2,future:2,local:0,chugoku:0,far:1},
{name:"島内 日菜子",attack:2,speed:3,defense:3,technique:3,veteran:2,passion:2,lovable:2,future:2,local:0,chugoku:0,far:1},
{name:"福井 真歩",attack:3,speed:3,defense:2,technique:4,veteran:2,passion:3,lovable:4,future:4,local:0,chugoku:0,far:1},
{name:"平良 文果",attack:3,speed:4,defense:3,technique:3,veteran:2,passion:3,lovable:3,future:3,local:0,chugoku:0,far:1},
{name:"都築 かんな",attack:4,speed:3,defense:2,technique:4,veteran:2,passion:3,lovable:3,future:4,local:0,chugoku:0,far:1},
{name:"尾添 有紗",attack:1,speed:3,defense:4,technique:3,veteran:4,passion:4,lovable:4,future:4,local:1,chugoku:0,far:0},
{name:"徳本 華暖",attack:3,speed:3,defense:3,technique:3,veteran:2,passion:3,lovable:3,future:3,local:0,chugoku:0,far:1},
{name:"柏原 凪沙",attack:4,speed:3,defense:3,technique:4,veteran:2,passion:3,lovable:4,future:4,local:0,chugoku:1,far:0},
{name:"松本 悠愛",attack:5,speed:3,defense:3,technique:5,veteran:1,passion:2,lovable:4,future:5,local:0,chugoku:1,far:0},
{name:"金織 玲七",attack:1,speed:2,defense:4,technique:2,veteran:1,passion:1,lovable:1,future:4,local:1,chugoku:0,far:0},
{name:"竹下 七海",attack:1,speed:3,defense:3,technique:2,veteran:1,passion:1,lovable:1,future:4,local:1,chugoku:0,far:0},
{name:"高木 菜望",attack:1,speed:3,defense:3,technique:2,veteran:1,passion:1,lovable:1,future:5,local:1,chugoku:0,far:0}
];

const playerComments = {

"西村 清花":"堅実な守備と豊富な経験が魅力。派手さよりも安定感を重視するあなたにピッタリです。",

"渡部 那月":"最後尾からチームを支える頼れる存在。縁の下の力持ちを応援したいあなた向けです。",

"オモロジェバ 英里香":"スピードとパワーを兼ね備えたダイナミックなプレーが魅力。ワクワクする選手が好きなあなたにおすすめです。",

"伊藤 明里":"攻守のバランスが良く、どんな場面でもチームに貢献。オールラウンダーが好きなあなた向きです。",

"安藤 真桜":"熱い気持ちと全力プレーが魅力。ひたむきな姿に惹かれるあなたにおすすめです。",

"伊勢 さつき":"高い技術と得点力を兼ね備えた実力派。サッカーそのものを楽しみたいあなたにピッタリです。",

"丸尾 梨菜":"ゴールへの嗅覚抜群。得点シーンで盛り上がりたいあなたにおすすめです。",

"友近 真那":"攻守にわたりチームを引っ張るリーダータイプ。熱く応援したいあなたに最適です。",

"河村 祐美":"安定感と勝負強さを兼ね備えた万能型。バランス重視のあなたに向いています。",

"原 美埜里":"明るさと将来性が魅力。成長を見守る楽しさを味わいたいあなた向きです。",

"宮武 里奈":"攻守両面で存在感を発揮する実力派。チームプレーを大切にするあなたにおすすめです。",

"打越 怜":"状況判断に優れたクレバーなプレーヤー。サッカーを深く楽しみたいあなた向きです。",

"恒石 亜弓":"堅実なプレーでチームを支える縁の下の力持ち。派手さより献身性を評価するあなたに。",

"佐藤 萌里":"伸びしろ十分の若手実力派。未来のスターを発掘したいあなたにおすすめです。",

"相浦 幸桜":"努力を積み重ねながら成長を続ける選手。応援しがいを求めるあなた向きです。",

"島内 日菜子":"チームのために全力を尽くす頑張り屋。ひたむきな選手が好きなあなたにおすすめです。",

"福井 真歩":"技術と将来性を兼ね備えた期待株。今後の成長を楽しみたいあなた向きです。",

"平良 文果":"スピードを活かした積極的なプレーが魅力。アグレッシブなサッカーが好きなあなたへ。",

"都築 かんな":"攻撃センスが光るアタッカー。ゴールに向かう姿勢に魅力を感じるあなた向きです。",

"尾添 有紗":"守備でチームを支える職人タイプ。堅実なプレーに価値を感じるあなたにおすすめです。",

"徳本 華暖":"どんな役割も全力でこなす献身派。チームへの貢献を大切にするあなた向きです。",

"柏原 凪沙":"得点力と勝負強さが魅力のアタッカー。決定的な瞬間に心躍るあなたにピッタリです。",

"松本 悠愛":"高い得点力と将来性を兼ね備えた期待のストライカー。未来のエースを応援したいあなたへ。",

"金織 玲七":"若さと可能性に満ちた選手。成長物語を一緒に楽しみたいあなたにおすすめです。",

"竹下 七海":"これからの飛躍が楽しみな若手選手。未来への期待を応援したいあなた向きです。",

"高木 菜望":"将来性抜群の新世代プレーヤー。新しいスターを見つけたいあなたにピッタリです。"

};

let diagnosisIndex = 0;

let userScore = {
 attack:0,
 speed:0,
 defense:0,
 technique:0,
 veteran:0,
 passion:0,
 lovable:0,
 future:0
 local:0,
 chugoku:0,
 far:0
};

function calculateDiagnosis(user){

const results = players.map(player => {

const score =
  user.attack   * player.attack +
  user.speed    * player.speed +
  user.defense  * player.defense +
  user.technique* player.technique +
  user.veteran  * player.veteran +
  user.passion  * player.passion +
  user.lovable  * player.lovable +
  user.future   * player.future;

return {
  name: player.name,
  score: score
};

});

results.sort((a,b)=>b.score-a.score);

return results.slice(0,3);
}

function startDiagnosis(){

  diagnosisIndex = 0;

  userScore = {
    attack:0,
    speed:0,
    defense:0,
    technique:0,
    veteran:0,
    passion:0,
    lovable:0,
    future:0
  };

  showDiagnosisQuestion();
}

function showDiagnosisQuestion(){

  const q = diagnosisQuestions[diagnosisIndex];

  document.getElementById("q").textContent =
    `Q${diagnosisIndex+1}. ${q.q}`;

  const choices =
    document.getElementById("choices");

  choices.innerHTML = "";

  q.choices.forEach(choice=>{

    const btn =
      document.createElement("button");

    btn.textContent = choice.text;

    btn.onclick = ()=>answerDiagnosis(choice);

    choices.appendChild(btn);

  });
}

function answerDiagnosis(choice){

  for(let key in choice.score){
    userScore[key] += choice.score[key];
  }

  diagnosisIndex++;

  if(diagnosisIndex >= diagnosisQuestions.length){
    showDiagnosisResult();
  }else{
    showDiagnosisQuestion();
  }
}

function showDiagnosisResult(){

  const top3 =
    calculateDiagnosis(userScore);

  const winner = top3[0];

  document.getElementById("q").innerHTML = `
  <h2>診断結果</h2>

  <h1>${winner.name}</h1>

  <p>${playerComments[winner.name]}</p>

  <hr>

  <p>2位：${top3[1].name}</p>
  <p>3位：${top3[2].name}</p>
  `;

  document.getElementById("choices").innerHTML = `
    <button onclick="location.reload()">
      トップへ戻る
    </button>
  `;
}
startDiagnosis();
