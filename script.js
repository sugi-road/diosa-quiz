const params = new URLSearchParams(location.search);

const year = params.get("year") || "2026";
const level = params.get("level") || "beginner";

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

// レベル別メニュー切替

if(level==="beginner"){

  // 初級
  document.getElementById("numberBtn").style.display="inline-block";
  document.getElementById("callBtn").style.display="inline-block";

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
  document.getElementById("numberBtn").style.display="none";
  document.getElementById("callBtn").style.display="none";

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

let mode="normal";
let current;

let questionCount=0;

const maxQuestions=10;

let correct=0;
let total=0;
let usedPlayers = [];

let weakMap =
JSON.parse(localStorage.getItem("weakMap")||"{}");

function saveWeak(){
  localStorage.setItem(
    "weakMap",
    JSON.stringify(weakMap)
  );
}

function setMode(m){

  mode=m;

  document.querySelectorAll(".mode")
    .forEach(b=>b.classList.remove("active"));

  document.getElementById(m+"Btn")
    .classList.add("active");

  document.body.classList.remove("callMode");

  if(m==="call"){
    document.body.classList.add("callMode");
  }

  questionCount=0;
  correct=0;
  total=0;
  usedPlayers = [];

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

function createQuestion(){

  let p;

  // 苦手モード
  if(mode==="weak"){

    const weakKeys = Object.keys(weakMap);

    // 苦手なし
    if(weakKeys.length===0){

      return {
        q:"苦手問題がありません！",
        choices:["通常モードへ"],
        answer:0,
        player:null,
        special:true
      };
    }

    // 苦手選手から選ぶ
    const weakNo =
      weakKeys[
        Math.floor(Math.random()*weakKeys.length)
      ];

    p =
      players.find(player =>
        String(player.no)===String(weakNo)
      );
    
    if(p){
      usedPlayers.push(p.no);
    }

    // 保険
    if(!p){
      p = randomPlayer();
    }

  } else {

    p = randomPlayer();

  }


let type;

if(mode==="number"){

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
    qText=`${p.name}の背番号は？`;

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

  qText=`${p.name}のポジションは？`;

  choices=["GK","DF","MF","FW"];

  // 初級は3択化
  if(choiceCount===3){

    while(choices.length>3){

      const removeIndex =
        Math.floor(Math.random()*choices.length);

      // 正解は消さない
      if(choices[removeIndex]!==p.pos){
        choices.splice(removeIndex,1);
      }
    }
  }

  choices=shuffle(choices);

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

    qText=`${p.name}の出身地は？`;

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

    qText=`${p.name}の所属企業は？`;

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

  else if(type==="joinYear"){

    const currentYear=2026;

    qText=`${p.name}は何年目？`;

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

    choices=shuffle(choices);

    answer=choices.indexOf(correctText);
  }

  return {
    q:qText,
    choices,
    answer,
    player:p
  };
}

function nextQ(){

  if(questionCount>=maxQuestions){
    return showResult();
  }

  document.getElementById("progress").innerText =
    `${questionCount+1}/${maxQuestions}`;

  current=createQuestion();

// 特別画面
if(current.special){

  document.getElementById("q").innerText =
    current.q;

  document.getElementById("result").innerText="";

  let div=document.getElementById("choices");

  div.innerHTML="";

  let btn=document.createElement("button");

  btn.innerText="通常モードへ";

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

if(i===current.answer){

  document.getElementById("result").innerText="〇";
  document.getElementById("result").style.color="#4caf50";

  correct++;

  // 苦手を減らす
  if(mode==="weak" && pid){

    weakMap[pid]=(weakMap[pid]||0)-1;

    if(weakMap[pid]<=0){
      delete weakMap[pid];
    }

    saveWeak();
  }

}else{

  document.getElementById("result").innerText="×";
  document.getElementById("result").style.color="#d6001c";

  // 苦手登録
  if(pid){

    weakMap[pid]=(weakMap[pid]||0)+1;

    saveWeak();
  }
}

  total++;

  setTimeout(nextQ,1000);
}

function showResult(){

  document.getElementById("progress").innerText="";

  document.getElementById("q").innerText="終了！";

  document.getElementById("result").innerText="";

  let div=document.getElementById("choices");

  div.innerHTML="";

  let score=document.createElement("div");

  score.innerText=`最終スコア ${correct}/${total}`;

  let btn=document.createElement("button");

  btn.innerText="もう一度";

  btn.onclick=()=>location.reload();

  div.appendChild(score);

  div.appendChild(btn);
}

nextQ();
