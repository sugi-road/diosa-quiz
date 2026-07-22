const diagnosisQuestions = [
{
q: "試合で一番見たいプレーは？",
choices: [
{ text: "豪快なゴール", score: { attack: 3 } },
{ text: "スピード突破", score: { speed: 3 } },
{ text: "華麗なテクニック", score: { technique: 3 } },
{ text: "相手を止める守備", score: { defense: 3 } }
]
},
{
q: "つい応援したくなるのは？",
choices: [
{ text:"エース選手", score:{ attack:2 } },
{ text:"ムードメーカー", score:{ lovable:2 } },
{ text:"若手選手", score:{ future:2 } },
{ text:"ベテラン選手", score:{ veteran:2 } }
]
},
{
q: "あなたは、演じるならどんな役をやりたい？",
choices: [
{ text:"逆境を跳ね返す人", score:{ passion:2 } },
{ text:"成長していく人", score:{ future:2 } },
{ text:"コツコツ努力する人", score:{ defense:2 } },
{ text:"天才肌の人", score:{ technique:2 } }
]
},
{
q: "試合中に一番盛り上がる瞬間は？",
choices: [
{ text: "ゴールが決まった時", score: { attack: 2 } },
{ text: "相手を置き去りにした時", score: { speed: 2 } },
{ text: "見事なパスが通った時", score: { technique: 2 } },
{ text: "スーパークリアした時", score: { defense: 2 } }
]
},
{
q: "推し選手に求めるものは？",
choices: [
{ text: "頼もしさ", score: {veteran: 3} },
{ text: "成長の楽しみ", score: { future: 3 } },
{ text: "親しみやすさ", score: { lovable: 3 } },
{ text: "サッカーの上手さ", score: { technique:3 } }
]
},
{
q: "試合中に目が行くのは？",
choices: [
{ text: "ゴールを狙う選手", score: { attack: 3 } },
{ text: "ドリブルで仕掛ける選手", score: { speed: 3 } },
{ text: "技術が高い選手", score: { technique: 3 } },
{ text: "身を投げ出して守る選手", score: { defense: 3 } }
]
},
{
q: "チームのキャプテンを選ぶなら？",
choices: [
{ text: "頼れる先輩タイプ", score: { veteran: 2 } },
{ text: "熱血タイプ", score: { passion: 2 } },
{ text: "愛されキャラ", score: { lovable: 2 } },
{ text: "成長中の若手", score: { future: 2 } }
]
},
{
q: "出身地で気になるのは？",
choices: [
{ text: "特に気にしない", score: {} },
{ text: "島根県出身", score: { local: 4 } },
{ text: "中国地方出身", score: { chugoku: 4 } },
{ text: "全国から集まった選手", score: { far: 4 } }
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
q: "推し選手に一番感じたいのは？",
choices: [
{ text:"ワクワク", score:{ attack:2 } },
{ text:"安心感", score:{ defense:2 } },
{ text:"親近感", score:{ lovable:2 } },
{ text:"熱い気持ち", score:{ passion:2 } }
]
}
];

const players = [
{name:"西村 清花",attack:1,speed:3,defense:5,technique:4,veteran:4,passion:4,lovable:3,future:1,local:0,chugoku:0,far:1},
{name:"渡部 那月",attack:3,speed:2,defense:5,technique:4,veteran:5,passion:1,lovable:3,future:1,local:5,chugoku:0,far:0},
{name:"オモロジェバ 英里香",attack:3,speed:5,defense:5,technique:4,veteran:2,passion:3,lovable:3,future:0,local:0,chugoku:0,far:1},
{name:"伊藤 明里",attack:3,speed:4,defense:3,technique:3,veteran:4,passion:3,lovable:2,future:2,local:0,chugoku:1,far:0},
{name:"安藤 真桜",attack:2,speed:5,defense:4,technique:3,veteran:2,passion:4,lovable:5,future:4,local:3,chugoku:1,far:0},
{name:"伊勢 さつき",attack:4,speed:4,defense:3,technique:5,veteran:3,passion:2,lovable:2,future:4,local:0,chugoku:0,far:1},
{name:"丸尾 梨菜",attack:5,speed:4,defense:2,technique:3,veteran:2,passion:2,lovable:2,future:3,local:0,chugoku:0,far:1},
{name:"友近 真那",attack:3,speed:3,defense:5,technique:3,veteran:5,passion:4,lovable:3,future:1,local:0,chugoku:0,far:1},
{name:"河村 祐実",attack:5,speed:3,defense:3,technique:3,veteran:2,passion:2,lovable:2,future:3,local:0,chugoku:0,far:1},
{name:"原 美埜里",attack:3,speed:4,defense:3,technique:4,veteran:2,passion:3,lovable:5,future:4,local:5,chugoku:0,far:0},
{name:"宮武 里奈",attack:4,speed:3,defense:5,technique:3,veteran:2,passion:3,lovable:3,future:4,local:0,chugoku:0,far:1},
{name:"打越 怜",attack:4,speed:4,defense:3,technique:5,veteran:3,passion:4,lovable:2,future:3,local:0,chugoku:0,far:1},
{name:"恒石 亜弓",attack:3,speed:3,defense:3,technique:5,veteran:3,passion:3,lovable:5,future:3,local:0,chugoku:0,far:1},
{name:"佐藤 萌里",attack:4,speed:5,defense:3,technique:4,veteran:2,passion:2,lovable:2,future:4,local:0,chugoku:0,far:1},
{name:"相浦 幸桜",attack:4,speed:4,defense:3,technique:4,veteran:2,passion:3,lovable:4,future:3,local:0,chugoku:0,far:1},
{name:"島内 日菜子",attack:2,speed:3,defense:5,technique:3,veteran:2,passion:2,lovable:2,future:5,local:0,chugoku:0,far:1},
{name:"福井 真歩",attack:4,speed:3,defense:2,technique:4,veteran:2,passion:3,lovable:5,future:4,local:0,chugoku:0,far:1},
{name:"平良 文果",attack:4,speed:4,defense:4,technique:3,veteran:2,passion:3,lovable:4,future:3,local:0,chugoku:0,far:1},
{name:"都筑 かんな",attack:5,speed:4,defense:2,technique:4,veteran:2,passion:2,lovable:3,future:4,local:0,chugoku:0,far:1},
{name:"尾添 有紗",attack:1,speed:3,defense:5,technique:2,veteran:3,passion:4,lovable:4,future:3,local:5,chugoku:0,far:0},
{name:"徳本 華暖",attack:3,speed:3,defense:5,technique:4,veteran:2,passion:3,lovable:3,future:4,local:0,chugoku:0,far:1},
{name:"野村 彩衣",attack:3,speed:3,defense:3,technique:3,veteran:2,passion:5,lovable:4,future:4,local:0,chugoku:0,far:1},
{name:"山本 早織",attack:4,speed:4,defense:3,technique:4,veteran:3,passion:4,lovable:4,future:3,local:0,chugoku:0,far:1},
{name:"柏原 凪沙",attack:3,speed:3,defense:3,technique:4,veteran:2,passion:3,lovable:5,future:4,local:0,chugoku:1,far:0},
{name:"松本 悠愛",attack:4,speed:4,defense:2,technique:4,veteran:1,passion:2,lovable:3,future:5,local:3,chugoku:1,far:0},
{name:"金織 玲七",attack:1,speed:2,defense:5,technique:2,veteran:1,passion:1,lovable:3,future:5,local:4,chugoku:0,far:0},
{name:"竹下 七海",attack:1,speed:3,defense:4,technique:2,veteran:1,passion:1,lovable:3,future:5,local:4,chugoku:0,far:0},
{name:"高木 菜望",attack:1,speed:3,defense:4,technique:2,veteran:1,passion:1,lovable:3,future:5,local:4,chugoku:0,far:0}
];

const playerComments = {

"西村 清花":"堅実な守備と豊富な経験が魅力。派手さよりも安定感を重視するあなたにピッタリです。",

"渡部 那月":"最後尾からチームを支える頼れる存在。縁の下の力持ちを応援したいあなた向けです。",

"オモロジェバ 英里香":"スピードとパワーを兼ね備えたダイナミックなプレーが魅力。ワクワクする選手が好きなあなたにおすすめです。",

"伊藤 明里":"攻守のバランスが良く、どんな場面でもチームに貢献。オールラウンダーが好きなあなた向きです。",

"安藤 真桜":"熱い気持ちと全力プレーが魅力。笑顔に惹かれるあなたにおすすめです。",

"伊勢 さつき":"高い技術と得点力を兼ね備えた実力派。サッカーそのものを楽しみたいあなたにピッタリです。",

"丸尾 梨菜":"ゴールへの嗅覚抜群。得点シーンで盛り上がりたいあなたにおすすめです。",

"友近 真那":"このチームをまとめるキャプテン。熱く応援したいあなたに最適です。",

"河村 祐実":"攻撃重視で常に得点を狙っています。攻め重視のあなたに向いています。",

"原 美埜里":"明るさと将来性が魅力。地元のスターを応援したいあなた向きです。",

"宮武 里奈":"攻守両面で存在感を発揮する実力派。チームプレーを大切にするあなたにおすすめです。",

"打越 怜":"状況判断に優れたクレバーなプレーヤー。サッカーを深く楽しみたいあなた向きです。",

"恒石 亜弓":"堅実なプレーでチームを支える縁の下の力持ち。派手さより献身性を評価するあなたに。",

"佐藤 萌里":"伸びしろ十分の若手実力派。未来のスターを発掘したいあなたにおすすめです。",

"相浦 幸桜":"努力を積み重ねながら成長を続ける選手。応援しがいを求めるあなた向きです。",

"島内 日菜子":"チームのために全力を尽くす頑張り屋。ひたむきな選手が好きなあなたにおすすめです。",

"福井 真歩":"技術と将来性を兼ね備えた期待株。今後の成長を楽しみたいあなた向きです。",

"平良 文果":"スピードを活かした積極的なプレーが魅力。アグレッシブなサッカーが好きなあなたへ。",

"都筑 かんな":"攻撃センスが光るアタッカー。ゴールに向かう姿勢に魅力を感じるあなた向きです。",

"尾添 有紗":"守備でチームを支える職人タイプ。地元選手を応援したいあなたにおすすめです。",

"徳本 華暖":"どんな役割も全力でこなす献身派。チームへの貢献を大切にするあなた向きです。",

"野村 彩衣":"守備でチームを支える頼もしい存在。これからの成長も楽しみな選手です。",

"山本 早織":"岡山湯郷Belleに約1年半所属し、ディオッサに帰ってきたヒーロー。左足のテクニックに期待するあなたへ。",
 
"柏原 凪沙":"得点力と勝負強さが魅力のアタッカー。決定的な瞬間に心躍るあなたにピッタリです。",

"松本 悠愛":"高い得点力と将来性を兼ね備えた期待のストライカー。未来のエースを応援したいあなたへ。",

"金織 玲七":"若さと可能性に満ちた守護神。成長物語を一緒に楽しみたいあなたにおすすめです。",

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
 future:0,
 local:0,
 chugoku:0,
 far:0
};

let answerHistory = [];

let editingMode = false;

function getPlayerInfo(playerName){

  const p = quiz2026.players.find(p => {

    const shortName = p.name.split("(")[0].trim();

    return shortName === playerName;

  });

  if(!p) return null;

  return {
    ...p,
    kanji: p.name.replace(/\(.+\)/,"").trim(),
    yomi: (p.name.match(/\((.+)\)/) || [,""])[1]
  };

}

function startDiagnosis(){

  diagnosisIndex = 0;

  answerHistory = [];

  userScore = {
    attack:0,
    speed:0,
    defense:0,
    technique:0,
    veteran:0,
    passion:0,
    lovable:0,
    future:0,
    local:0,
    chugoku:0,
    far:0
  };

  showDiagnosisQuestion();
}

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
  user.future   * player.future +
  user.local    * player.local +
  user.chugoku  * player.chugoku +
  user.far      * player.far;
 
return {
  name: player.name,
  score: score
};

});

results.sort((a,b)=>b.score-a.score);

return results.slice(0,3);
}

function showDiagnosisQuestion(){

  const q = diagnosisQuestions[diagnosisIndex];

document.getElementById("q").innerHTML = `
<div style="
display:flex;
justify-content:space-between;
align-items:flex-start;
margin-bottom:8px;
">
  <div style="font-weight:bold;">
    Q${diagnosisIndex+1}. ${q.q}
  </div>

  <div style="
    color:#888;
    font-size:14px;
    white-space:nowrap;
  ">
    ${diagnosisIndex+1}/10
  </div>
</div>
`;

  const choices =
    document.getElementById("choices");

  choices.innerHTML = "";

  q.choices.forEach(choice=>{

    const btn =
      document.createElement("button");

   btn.className = "choice";

   btn.textContent = choice.text;
    btn.onclick = ()=>answerDiagnosis(choice);

    choices.appendChild(btn);

  });
}

function answerDiagnosis(choice){

if(editingMode){

  answerHistory[diagnosisIndex].answer =
    choice.text;

  editingMode = false;

  showConfirmScreen();
  return;

}else{

  answerHistory.push({
    question: diagnosisQuestions[diagnosisIndex].q,
    answer: choice.text
  });

}

  for(let key in choice.score){
    userScore[key] += choice.score[key];
  }

  diagnosisIndex++;

  if(diagnosisIndex >= diagnosisQuestions.length){
    showConfirmScreen();
  }else{
    showDiagnosisQuestion();
  }
}

function showConfirmScreen(){

  let html = '<h2 class="confirmTitle">回答確認</h2>';
 
  answerHistory.forEach((item,index)=>{

    html += `
      <div style="
        text-align:left;
        margin4px 0;
        padding:5px;
        border-bottom:1px solid #ccc;
      ">
        <b>Q${index+1}. ${item.question}</b><br>
<div style="
display:flex;
justify-content:space-between;
align-items:center;
margin-top:3px;
">

<span>
→ ${item.answer}
</span>

<button
class="editBtn"
onclick="editQuestion(${index})"
>
この回答を修正
</button>

      </div>
    </div>
    `;
  });

  document.getElementById("q").innerHTML = html;

  document.getElementById("choices").innerHTML = `
    <button onclick="showDiagnosisResult()">
      この内容で診断する
    </button>
  `;
}

function editQuestion(index){

  editingMode = true;
  diagnosisIndex = index;

  showDiagnosisQuestion();
}

function showDiagnosisResult(){
 userScore = {
  attack:0,
  speed:0,
  defense:0,
  technique:0,
  veteran:0,
  passion:0,
  lovable:0,
  future:0,
  local:0,
  chugoku:0,
  far:0
};

answerHistory.forEach((item,index)=>{

  const selected =
    diagnosisQuestions[index].choices.find(
      c => c.text === item.answer
    );

  if(selected){
    for(let key in selected.score){
      userScore[key] += selected.score[key];
    }
  }

});

  const top3 = calculateDiagnosis(userScore);

  const winner = top3[0];

  const winnerInfo = getPlayerInfo(winner.name);
  const secondInfo = getPlayerInfo(top3[1].name);
  const thirdInfo = getPlayerInfo(top3[2].name);

document.getElementById("q").innerHTML = `
  <h2 style="color:#000;">
    診断結果
  </h2>

  <div style="
    color:#ff7a00;
    font-size:18px;
    font-weight:bold;
    margin-bottom:4px;
  ">
    あなたの推しは
  </div>

<div class="winnerName">
  <ruby>
    ${winnerInfo.kanji}
    <rt>${winnerInfo.yomi}</rt>
  </ruby>
</div>

<p class="winnerInfo resultIndent">
  背番号${winnerInfo.no}
  / ${winnerInfo.pos}
</p>

<p>${playerComments[winner.name]}</p>

<p style="text-align:center; margin:15px 0;">
  <a
    href="https://www.diosa-fc.jp/player/${winnerInfo.no}/"
    target="_blank"
    class="playerLink"
  >
    📖 選手紹介を見る
  </a>
</p>

<hr>

<p class="rankBlock">
🥈2位

<div class="rankName">
  <ruby>
    ${secondInfo.kanji}
    <rt>${secondInfo.yomi}</rt>
  </ruby>
</div>

<div class="rankInfo">
  背番号${secondInfo.no} / ${secondInfo.pos}
</div>
</p>

<p class="rankBlock">
🥉3位

<div class="rankName">
  <ruby>
    ${thirdInfo.kanji}
    <rt>${thirdInfo.yomi}</rt>
  </ruby>
</div>

<div class="rankInfo">
  背番号${thirdInfo.no} / ${thirdInfo.pos}
</div>
</p>  `;

document.getElementById("choices").innerHTML = `
  <button onclick="location.reload()">
    推し選手診断トップへ戻る
  </button>

`;
}

startDiagnosis();

const topBtn = document.getElementById("topBtn");

if(topBtn){
  topBtn.onclick = () => location.href = "index.html";
}
