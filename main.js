/*
//厳格な記述にするための記載
`use strict`

//getElementByIdでHTMLのテキストを引っ張ってこれる→イベントのstart,stopなどの変数として扱える
//const、let はどちらも変数の宣言。varは重複することがあるので最近使われない。
var start = document.getElementById("start") ;
var stop = document.getElementById("stop") ;
var reset = document.getElementById("reset") ;
var timer = document.getElementById("timer") ;

var startTime;
var elapsedTime = 0;
var timerId;
var timeToadd = 0;

function updateTimeText(){
    var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);
    ms = ("0" + ms).slice(-3)
    
    timer.textContent = m + ':' + s + ':' + ms;
}

function countUp(){
    
    timerId = setTimeout(function(){
        
        elapsedTime = Date.now() - startTime + timeToadd;
            updateTimeText()
            
        countUp();
        
    },10);
}

start.addEventListener("click", function(){
    
    startTime = Date.now();
				  
        countUp();
    });


stop.addEventListener("click", function(){

    })


reset.addEventListener("click", function(){

    })




/*
function start() {
    
}

function stop() {
    
}

function reset() {
    
}
*/
/*
$(document).ready(function(){
    
    $(".start").click(function() {
        setInterval()
    });
    
    $(".stop").click(function(){
        alert("pokepoke")
    });
    
    $(".reset").click(function(){
        
    })
    
})
*/

const timeCount = document.querySelector(".timeCount");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

var startTime;
var elapsedTime = 0;
var timerId;
var timeToadd;

function updateTimeText(){
    var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor((elapsedTime % 60000)/ 1000);
    var ms = elapsedTime / 1000;
    
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);
    ms = ("00" + ms).slice(-3);
    
    timeCount.textContent = m + ":" + s + ":" + ms;
}

function countUp(){
    timerId = setTimeout(function(){
        
        elapsedTime = Date.now() - startTime + timeToadd;
            updateTimeText()
            
        countUp();
    
},10);
}

function startTimer(){
    startTime = Date.now();
    countUp();
    startBtn.setAttribute("disabled" , true);
    stopBtn.removeAttribute("disabled");
    resetBtn.removeAttribute("disabled");
    
}

function stopTimer(){
    setInterval(timerId);
    timeToadd += Date.now() - startTime;
    stopBtn.setAttribute("disabled", true);
    startBtn.setAttribute("disabled");
    
}

function resetTimer(){
    clearInterval(timerId);
    elapsedTime = 0;
    timeToadd = 0;
    updateTimeText();
    
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled" , true);
    resetBtn.setAttribute("disabled" , true);
    
    
}



