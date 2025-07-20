let timer = document.getElementById("timer");
let start = document.getElementById("start");
let pause = document.getElementById("stop");
let reset = document.getElementById("reset");
let seconds_sw = 0;
let minutes_sw = 0;
let hours_sw = 0;

function format(n) {
  return n < 10 ? "0" + n  : n ;
};

// Start Function
start_stopwatch = () =>{
  seconds_sw ++ ; 
  if (seconds_sw == 59) {
    minutes_sw ++ ;
    seconds_sw = 0 ;
  }if(minutes_sw == 59){
    hours_sw ++ ;
    minutes_sw = 0;
  }
  timer.textContent =   `${format(hours_sw)}:${format(minutes_sw)}:${format(seconds_sw)}`;
}

// Start
let interval;
start.addEventListener("click", function () {
  start.textContent = 'Start'
  clearInterval(interval);
  interval = setInterval(start_stopwatch, 1000);
  pause.classList.remove("none");
});

// Reset
reset.addEventListener("click" , function () {
  clearInterval(interval); 
    seconds_sw = 0;
    minutes_sw = 0;
    hours_sw = 0;
    timer.textContent = '00:00:00' ;
    pause.classList.add("none");
})

// Pause
pause.addEventListener("click" , function(){
  clearInterval(interval);
  start.textContent = 'Resume'
})

// ////////////////////////////////////Stop Watch \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let input_hours = document.getElementById("input_hours");
let input_minutes = document.getElementById("input_minutes");
let input_seconds = document.getElementById("input_seconds");
let countdown_display = document.getElementById("countdown_display");
let start_timer = document.getElementById("start_timer");
let stop_timer = document.getElementById("stop_timer");
let reset_timer = document.getElementById("reset_timer");
