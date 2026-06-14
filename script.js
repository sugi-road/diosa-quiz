const params = new URLSearchParams(location.search);

const year = params.get("year") || "2026";
const level = params.get("level") || "beginner";
const forceFaceMode =
  params.get("faceonly")==="1";
const forceWeakMode =
  params.get("weak")==="1";

let quizData;

// データ存在チェック
if(typeof quiz2026 === "undefined"){
  alert("quiz2026.js が読み込まれていません");
}

if(year === "2026"){

  if(level === "beginner"){
    quizData = quiz2026.levels.beginner;
  }

  else if(level === "intermediate"){
    quizData = quiz2026.levels.intermediate;
  }

  else if(level === "advanced"){
    quizData = quiz2026.levels.advanced;
  }

  else{
    quizData = quiz2026.levels.beginner;
  }
}

// 保険
if(!quizData){
  quizData = quiz2026.levels.beginner;
}

const players = quiz2026.players;

document.getElementById("title").innerText =
  quizData.title;

if(forceWeakMode){

  document.getElementById("title").innerText =
    "苦手克服編";

  // モードボタン全体を非表示
  const modeWrap =
    document.querySelector(".modeWrap");

  if(modeWrap){
    modeWrap.style.display = "none";
  }
}

// 似顔絵専用ページ
if(forceFaceMode){

  // モードボタン非表示
  const modeWrap =
    document.querySelector(".modeWrap");

  if(modeWrap){
    modeWrap.style.display = "none";
  }

  // タイトル変更
  document.getElementById("title").innerText =
    "ディオッサ出雲クイズ(似顔絵編)";

  // トップへ戻るボタン非表示
  const topBtn =
    document.getElementById("topBtn");

  if(topBtn){
    topBtn.style.display = "none";
  }

  // 似顔絵専用CSS
  document.body.classList.add("faceOnly");
}

// レベル別メニュー切替

if(level==="beginner"){

  // 初級
  document.getElementById("numberBtn").style.display="inline-block";
  document.getElementById("callBtn").style.display="inline-block";
  // 似顔絵ＯＫでたら、次の行を使う
  // document.getElementById("faceBtn").style.display="inline-block";
  // 似顔絵ＯＫでたら、次の行を消す
  document.getElementById("faceBtn").style.display="none";

  const birthplaceBtn =
    document.getElementById("birthplaceBtn");

  const companyBtn =
    document.getElementById("companyBtn");

  if(birthplaceBtn){
    birthplaceBtn.style.display="none";
  }

  if(companyBtn){
    companyBtn.style.display="none";
  }
}

else if(level==="intermediate"){

  // 中級
  document.getElementById("numberBtn").style.display="inline-block";
  document.getElementById("callBtn").style.display="inline-block";
  document.getElementById("faceBtn").style.display="none";

  const birthplaceBtn =
    document.getElementById("birthplaceBtn");

  const companyBtn =
    document.getElementById("companyBtn");

  if(birthplaceBtn){
    birthplaceBtn.style.display="inline-block";
  }

  if(companyBtn){
    companyBtn.style.display="none";
  }
}

else if(level==="advanced"){

  document.getElementById("numberBtn").style.display="inline-block";
  document.getElementById("callBtn").style.display="none";
  document.getElementById("faceBtn").style.display="none";

  const birthplaceBtn =
    document.getElementById("birthplaceBtn");

  const companyBtn =
    document.getElementById("companyBtn");

  if(birthplaceBtn){
    birthplaceBtn.style.display="inline-block";
  }

  if(companyBtn){
    companyBtn.style.display="inline-block";
  }
}

let mode = forceFaceMode ? "face" : "normal";

let current;

let questionCount=0;

const maxQuestions=10;

let correct=0;
let total=0;
let usedPlayers = [];
let retryQuestions = [];
let retryMode = false;
let retryTotal = 0;
let weakTotal = 0;

let weakMap =
JSON.parse(localStorage.getItem("weakMap")||"{}");

// 旧形式の苦手データを新形式へ変換
for(const key in weakMap){

  if(!key.includes("_")){

    weakMap[key + "_number"] = weakMap[key];

    delete weakMap[key];
  }
}

localStorage.setItem(
  "weakMap",
  JSON.stringify(weakMap)
);

function saveWeak(){
  localStorage.setItem(
    "weakMap",
    JSON.stringify(weakMap)
  );
}

function setMode(m){
  document.getElementById("retryBanner").innerText="";
  mode=m;

  document.querySelectorAll(".mode")
    .forEach(b=>b.classList.remove("active"));

  const modeBtn =
    document.getElementById(m+"Btn");

  if(modeBtn){
    modeBtn.classList.add("active");
  }
  
  document.body.classList.remove("callMode");

  if(m==="call"){
    document.body.classList.add("callMode");
  }

  questionCount=0;
  correct=0;
  total=0;
  usedPlayers = [];
if(m==="weak"){

  weakTotal = Object.keys(weakMap).length;

  if(weakTotal===0){

    document.getElementById("progress").innerText="";

    document.getElementById("q").innerText =
      "苦手問題がありません！";

    document.getElementById("result").innerText="";

    const div =
      document.getElementById("choices");

    div.innerHTML="";

    return;
  }
}

  nextQ();
}

function shuffle(a){
  return a.sort(()=>Math.random()-0.5);
}

function randomPlayer(){

  // 未使用選手だけ抽出
  let availablePlayers =
    players.filter(
      p => !usedPlayers.includes(p.no)
    );

  // 全員使ったらリセット
  if(availablePlayers.length===0){

    usedPlayers=[];

    availablePlayers=[...players];
  }

  const p =
    availablePlayers[
      Math.floor(Math.random()*availablePlayers.length)
    ];

  usedPlayers.push(p.no);

  return p;
}

function randomChoicePlayer(){
  return players[
    Math.floor(Math.random()*players.length)
  ];
}

function displayName(name){

  if(level === "advanced"){
    return name.split("(")[0];
  }

  return name;
}

function createQuestion(){

  let p;
  let forcedType = null;
   if(retryMode && retryQuestions.length>0){

    const retry =
      retryQuestions.shift();

    p = retry.player;
    forcedType = retry.type;

  }

  // 苦手モード
  if(mode==="weak"){
  const weakKeys = Object.keys(weakMap);

// 苦手問題がなくなったら終了
if(weakKeys.length===0){
  return null;
}

    // 苦手問題から選ぶ
const weakItem =
  weakKeys[
    Math.floor(Math.random()*weakKeys.length)
  ];

const parts = weakItem.split("_");

const weakNo = parts[0];
const weakType = parts[1] || "number";

forcedType = weakType;

p =
  players.find(player =>
    String(player.no)===String(weakNo)
  );
    
    // 保険
    if(!p){
      p = randomPlayer();
    }

  }else if(!p){

  p = randomPlayer();

}

let type;

// 苦手モードで問題種別固定
if(forcedType){

  type = forcedType;

}

// 似顔絵専用ページ
else if(forceFaceMode){

  type = "face";

}

else if(mode==="number"){

  type="number";

}

else if(mode==="call"){

  type="call";

}

else if(mode==="birthplace"){

  type="birthplace";

}

else if(mode==="company"){

  type="company";

}

else if(mode==="face"){

  type="face";

}


else{

  const qTypes = quizData.questions;

  type =
    qTypes[
      Math.floor(Math.random()*qTypes.length)
    ];
}

  let qText;
  let choices;
  let answer;

// 初級は3択、それ以外は4択
const choiceCount =
  (level === "beginner") ? 3 : 4;

if(type==="number"){

  if(Math.random()<0.5){

    // 番号→名前
    qText=`背番号${p.no}の選手は？`;

choices=[p.name.split("(")[0]];

while(choices.length<choiceCount){

  const r=randomChoicePlayer().name.split("(")[0];

  if(!choices.includes(r)){
    choices.push(r);
  }
}

choices=shuffle(choices);

answer=choices.indexOf(
  p.name.split("(")[0]
);

  } else {

    // 名前→番号
    qText=`${displayName(p.name)}の背番号は？`;

    choices=[p.no];

    while(choices.length<choiceCount){

      const r=randomChoicePlayer().no;

      if(!choices.includes(r)){
        choices.push(r);
      }
    }

    choices.sort((a,b)=>a-b);

    answer=choices.indexOf(p.no);
  }
}

else if(type==="position"){

  qText=`${displayName(p.name)}のポジションは？`;

choices=["FW","MF","DF","GK"];

// 初級は1つだけランダム削除
if(choiceCount===3){

  const wrongChoices =
    choices.filter(c => c !== p.pos);

  const removePos =
    wrongChoices[
      Math.floor(Math.random()*wrongChoices.length)
    ];

  choices =
    choices.filter(c => c !== removePos);
}

answer=choices.indexOf(p.pos);
}

else if(type==="call"){

  if(Math.random()<0.5){

    qText=`${p.name.split("(")[0]}のコール名は？`;

    choices=[p.call];

    while(choices.length<choiceCount){

      const r=randomChoicePlayer().call;
      
      if(!choices.includes(r)){
        choices.push(r);
      }
    }

    choices=shuffle(choices);

    answer=choices.indexOf(p.call);

  } else {

    qText=`コール名「${p.call}」の選手は？`;

    choices=[p.name.split("(")[0]];

    while(choices.length<choiceCount){

      const r=randomChoicePlayer().name.split("(")[0];

      if(!choices.includes(r)){
        choices.push(r);
      }
    }

    choices=shuffle(choices);

    answer=choices.indexOf(
    p.name.split("(")[0]
  );

  }
}

  else if(type==="birthplace"){

    qText=`${displayName(p.name)}の出身地は？`;
    
    choices=[p.from];

    while(choices.length<choiceCount){

      const r=randomChoicePlayer().from;
      
      if(!choices.includes(r)){
        choices.push(r);
      }
    }

    choices=shuffle(choices);

    answer=choices.indexOf(p.from);
  }

  else if(type==="company"){

    qText=`${displayName(p.name)}の雇用企業は？`;

    choices=[p.company];

    while(choices.length<choiceCount){

      const r=randomChoicePlayer().company;

      if(!choices.includes(r)){
        choices.push(r);
      }
    }

    choices=shuffle(choices);

    answer=choices.indexOf(p.company);
  }

else if(type==="face"){

  qText = "この選手は誰？";

  choices=[p.name];

  while(choices.length<choiceCount){

    const r=randomChoicePlayer().name;

    if(!choices.includes(r)){
      choices.push(r);
    }
  }

  choices=shuffle(choices);

  answer=choices.indexOf(p.name);
}

  else if(type==="joinYear"){

    const currentYear=2026;

    qText=`${displayName(p.name)}は何年目？`;

    const correctText =
      `${currentYear-p.join+1}年目`;

    choices=[correctText];

    while(choices.length<choiceCount){

      const rPlayer=randomChoicePlayer();

      const r =
        `${currentYear-rPlayer.join+1}年目`;

      if(!choices.includes(r)){
        choices.push(r);
      }
    }

    choices.sort((a,b)=>
    parseInt(a)-parseInt(b)
    );

    answer=choices.indexOf(correctText);
  }

  return {
    q:qText,
    choices,
    answer,
    player:p,
    type:type
  };
}

function nextQ(){

  let limit;

  if(retryMode){

    limit = retryTotal;

}else if(mode==="weak"){

  limit = weakTotal;

}else{

    limit = maxQuestions;

  }

  if(questionCount >= limit){
    return showResult();
  }

  document.getElementById("progress").innerText =
    `${questionCount+1}/${limit}`;

  current=createQuestion();
  if(!current){
  return showResult();
}

// 特別画面
if(current.special){

  document.getElementById("q").innerText =
    current.q;

  document.getElementById("result").innerText="";

const photoArea =
  document.getElementById("photoArea");

photoArea.innerHTML = "";

if(current.type==="face" && current.player?.face){

  photoArea.innerHTML =
    `<img src="${current.player.face}">`;

}

let div=document.getElementById("choices");

  div.innerHTML="";

  let btn=document.createElement("button");
  btn.className="quizBtn";
  btn.innerText="通常問題へ";

  btn.onclick=()=>setMode("normal");

  div.appendChild(btn);

  return;
}

  // 保険
  if(!current){
    console.log("問題生成失敗");
    return;
  }

  document.getElementById("q").innerText =
    current.q;

  document.getElementById("result").innerText="";

const photoArea =
  document.getElementById("photoArea");

photoArea.innerHTML = "";

if(current.type==="face" && current.player?.face){

  photoArea.innerHTML =
    `<img src="${current.player.face}">`;

}

let div=document.getElementById("choices");

  div.innerHTML="";

  current.choices.forEach((c,i)=>{

    let btn=document.createElement("button");

    btn.className="choice";

    btn.innerText=c;

    btn.onclick=()=>judge(i);

    div.appendChild(btn);
  });
}

function judge(i){

  questionCount++;

  let buttons=document.querySelectorAll(".choice");

  buttons.forEach((b,idx)=>{

    b.disabled=true;

    if(idx===current.answer){
      b.style.background="#4caf50";
    }

    if(idx===i&&idx!==current.answer){
      b.style.background="#f44336";
    }
  });

const pid = current.player?.no;

const weakKey =
  pid + "_" + current.type;

if(i===current.answer){

  document.getElementById("result").innerText="〇";
  document.getElementById("result").style.color="#4caf50";

  correct++;

  // 苦手を減らす
  if(mode==="weak" && pid){

delete weakMap[weakKey];
    saveWeak();
  }

}else{

  document.getElementById("result").innerText="×";
  document.getElementById("result").style.color="#d6001c";

if(pid){

  weakMap[weakKey] = 1;

  saveWeak();
}

  if(!retryMode){

  retryQuestions.push({
    player: current.player,
    type: current.type
  });

}
}

  total++;

  setTimeout(nextQ,1000);
}

function showResult(){

  const wasRetryMode = retryMode;

  if(retryMode){

    document.querySelectorAll(".mode")
      .forEach(btn => btn.disabled = false);

    document.getElementById("retryBanner").innerText="";

    retryMode = false;
  }

  document.getElementById("progress").innerText="";

  document.getElementById("q").innerText="　　";

  document.getElementById("result").innerText="";
  document.getElementById("photoArea").innerHTML="";

  let div=document.getElementById("choices");

  div.innerHTML="";

let score=document.createElement("div");

score.innerText=`スコア ${correct}/${total}`;

div.appendChild(score);

if(!forceWeakMode){

  let btn=document.createElement("button");

  btn.className="quizBtn";
  btn.innerText="通常問題";

  btn.onclick=()=>location.reload();

  div.appendChild(btn);
}
  if(retryQuestions.length>0){

  let retryBtn =
    document.createElement("button");

  retryBtn.className="quizBtn";
    
  retryBtn.innerText =
    `間違いだけ再挑戦 (${retryQuestions.length}問)`;

  retryBtn.onclick = ()=>{

  retryMode = true;
  document.querySelectorAll(".mode")
  .forEach(btn => btn.disabled = true);  
  document.getElementById("retryBanner").innerText =
  "🔄 間違えた問題だけ挑戦中！";

  usedPlayers = [];
    
  retryTotal = retryQuestions.length;

  questionCount = 0;
  correct = 0;
  total = 0;

  document.getElementById("result").innerText="";

  nextQ();
};

  div.appendChild(retryBtn);
}
}

if(forceFaceMode){

  setMode("face");

}else if(forceWeakMode){

  setMode("weak");

}else{

  nextQ();

}
