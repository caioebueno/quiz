//question generator
var questions = ["Communly used data types DO NOT include:","What tag is used to define the metadata about an HTML document, and must always be included inside the element:","What tag is used to render or transform text into an emphasized (italics) version:","What does CSS stand for?","Which property is used to change the background color?", "Which CSS property is used to change the text color of an element?","Inside which HTML element do we put the JavaScript?","How does a FOR loop start?"];
var options = ["1. String","2. Boolean","3. Alert","4. Number","1. img","2. div","3. header","4. meta","1. em","2. strong","3. a","4. p","1. Creative Style Sheet", "2. Colorful Style Sheet", "3. Computer Style Sheet", "4. Cascading Style Sheet", "1. Background", "2. Background-color", "3. Style", "4. Color", "1. Font-color", "2. Font-style", "3. Color", "4. Font","1. Script", "2. JavaScript", "3. Js", "4. Meta","1. for(i <= 5;i++)","2. for i = 5 to 5", "3. for(i = 0; i =5)", "4. for(i = 0; i = 5; i++)"];
var awnsers = ["3. Alert", "4. meta", "1. em","4. Cascading Style Sheet","2. Background-color","3. Color","1. Script","4. for(i = 0; i = 5; i++)"];
var optionsCount = 0;
var container = document.getElementById("container");
var questFunc = [secondQuestion,  thirdQuestion, forthQuestion, fifthQuestion, sixtyQuestion, seventyQuestion, eightyQuestion, nineQuestion];
var score = 0;
var timeLeft = 30;
var localStorageScoreArray = [];
var localStorageNameArray = [];

function refresh(){

    var localNames = window.localStorage.getItem("name");
    var localScores = window.localStorage.getItem("score")
    console.log(localNames);
    if(localNames === null){

    }else{
    var splitName = localNames.split(",");
    var splitScore = localScores.split(",");
    localStorageNameArray = splitName;
    localStorageScoreArray = splitScore;
    }
}
refresh();

var scores = [];
var scoreNames = [];

console.log(container);
 
for(i = 0; i < questions.length; i++){

    var questionDiv = document.createElement("div");
    questionDiv.setAttribute("id", "div" + i);
    questionDiv.setAttribute("class", "questionDiv");
    container.appendChild(questionDiv);
    
    var questionText = questions[i];
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "h1" + i);
    h1.innerHTML = questionText;
    questionDiv.appendChild(h1);

    var option1 = options[optionsCount];
    var btn1 = document.createElement("button");
    btn1.setAttribute("id", "btn" + optionsCount);
    btn1.setAttribute("class", "btn");
    btn1.setAttribute("onclick", "check(this.id)");
    btn1.innerHTML = option1;
    questionDiv.appendChild(btn1);
    optionsCount++;

    var option2 = options[optionsCount];
    var btn2 = document.createElement("button");
    btn2.setAttribute("id", "btn" + optionsCount);
    btn2.setAttribute("class", "btn");
    btn2.setAttribute("onclick", "check(this.id)");
    btn2.innerHTML = option2;
    questionDiv.appendChild(btn2);
    optionsCount++;

    var option3 = options[optionsCount];
    var btn3 = document.createElement("button");
    btn3.setAttribute("id", "btn" + optionsCount);
    btn3.setAttribute("class", "btn");
    btn3.setAttribute("onclick", "check(this.id)");
    btn3.innerHTML = option3;
    questionDiv.appendChild(btn3);
    optionsCount++;

    var option4 = options[optionsCount];
    var btn4 = document.createElement("button");
    btn4.setAttribute("id", "btn" + optionsCount);
    btn4.setAttribute("class", "btn");
    btn4.setAttribute("onclick", "check(this.id)");
    btn4.innerHTML = option4;
    questionDiv.appendChild(btn4);
    optionsCount++;
    
 }

 //strat quiz

 var divCount = 0;
 var startBtn = document.getElementById("startBtn");
 startBtn.addEventListener("click", start);
   
function start(){

    var newDiv = document.getElementById("div0");
    var oldDiv = document.getElementById("startDiv");
    oldDiv.setAttribute("class", "questionDiv hidden");
    newDiv.setAttribute("class", "questionDiv visible");

    counter();

} 

//second question

function secondQuestion(){

    var newDiv = document.getElementById("div1");
    var oldDiv = document.getElementById("div0");
    oldDiv.setAttribute("class", "questionDiv hidden");
    newDiv.setAttribute("class", "questionDiv visible");

}

//third question

function thirdQuestion(){

    var newDiv = document.getElementById("div2");
    var oldDiv = document.getElementById("div1");
    oldDiv.setAttribute("class", "questionDiv hidden");
    newDiv.setAttribute("class", "questionDiv visible");

}

//end game

function forthQuestion(){

    var newDiv = document.getElementById("div3");
    var oldDiv = document.getElementById("div2");
    oldDiv.setAttribute("class", "questionDiv hidden");
    newDiv.setAttribute("class", "questionDiv visible");

}
function fifthQuestion(){

    var newDiv = document.getElementById("div4");
    var oldDiv = document.getElementById("div3");
    oldDiv.setAttribute("class", "questionDiv hidden");
    newDiv.setAttribute("class", "questionDiv visible");

}
function sixtyQuestion(){

    var newDiv = document.getElementById("div5");
    var oldDiv = document.getElementById("div4");
    oldDiv.setAttribute("class", "questionDiv hidden");
    newDiv.setAttribute("class", "questionDiv visible");

}
function seventyQuestion(){

    var newDiv = document.getElementById("div6");
    var oldDiv = document.getElementById("div5");
    oldDiv.setAttribute("class", "questionDiv hidden");
    newDiv.setAttribute("class", "questionDiv visible");

}
function eightyQuestion(){

    var newDiv = document.getElementById("div7");
    var oldDiv = document.getElementById("div6");
    oldDiv.setAttribute("class", "questionDiv hidden");
    newDiv.setAttribute("class", "questionDiv visible");

}
function nineQuestion(){

    var newDiv = document.getElementById("div8");
    var oldDiv = document.getElementById("div7");
    oldDiv.setAttribute("class", "questionDiv hidden");
    newDiv.setAttribute("class", "questionDiv visible");
    
    var scoreSpam = document.getElementById("scoreSpam");
    var timeLeftScore = timeLeft;
    timeLeft = 0;
    score = score + timeLeftScore;
    scoreSpam.innerHTML = score;



}







//check questions

function check(element){
    
    var awnserBtn = document.getElementById(element);
    var divAwnser = awnserBtn.parentElement;
    var awnser = awnserBtn.textContent;
    var awnserCount = divAwnser.id[divAwnser.id.length - 1];
    var correctAwnser = awnsers[awnserCount];
    
    if(awnser == correctAwnser){
        console.log("win");
        score = score + 10;
    }
    else{
        console.log("loose");
        timeLeft = timeLeft - 5;
        score = score - 10;
    }

    questFunc[awnserCount]();

}

//timer

function counter(){

    var elem = document.getElementById('timeSpam');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {

      if (timeLeft <= 0) {
        clearTimeout(timerId);
        elem.innerHTML = 0;
        nineQuestion();
      } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
      }
    }
}

//submit
var inputName = document.getElementById("scoreInput");

console.log(inputName);
function submit(){

    var inputNameValue = inputName.value;
    var localNameSubmit = window.localStorage.getItem("name");
    var localScoreSubmit = window.localStorage.getItem("score");
    console.log(localNameSubmit);
    
    
    window.localStorage.setItem("name", inputNameValue + "," + localNameSubmit);
    window.localStorage.setItem("score", score + "," + localScoreSubmit);
    refresh();
}

//display highscores

var booleanScore = false;

function x(){
    var table = document.getElementById("table"); 
    table.innerHTML = "";
for(i = 0; i < localStorageNameArray.length; i++){


    var thScore = document.createElement("th");
    var thName = document.createElement("th");
    var tr = document.createElement("tr");
    thScore.innerHTML = localStorageScoreArray[i];
    thName.innerHTML = localStorageNameArray[i];
    tr.appendChild(thName);
    tr.appendChild(thScore);
    table.append(tr);

}
}

function scoreFunc(){
    


    if(booleanScore === false){

        refresh();
        var tableDiv = document.getElementById("scoreDisplayDiv");
        tableDiv.setAttribute("class", "visible questionDiv");
        var divs = document.getElementsByTagName("div");
        document.getElementById("hiddenDiv").setAttribute("style", "position: absolute");
        for(i = 0; i < divs.length; i++){
            document.getElementById(divs[i].id).setAttribute("class", "hidden");

        }
        booleanScore = true;

        timeLeft = 0;
    
    }
    else{

        document.getElementById("hiddenDiv").setAttribute("style", "");
        document.getElementById("startDiv").setAttribute("class", "visible questionDiv",);
        document.getElementById("scoreDisplayDiv").setAttribute("class","hidden");

        booleanScore = false;

        timeLeft = 30;
    }
}   









if(localStorageNameArray.length === 0){
window.localStorage.setItem("name", "caio");
window.localStorage.setItem("score", "1000");
}