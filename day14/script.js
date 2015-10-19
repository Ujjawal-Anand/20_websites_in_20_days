 function getSpentTime(time) {
   var t = Date.parse(new Date()) - Date.parse(time);
   var seconds = Math.floor((t/1000) % 60);
   var minutes = Math.floor((t/(1000*60))%60);
   var hours = Math.floor((t/(1000*60*60))%24);
   var days = Math.floor(t/(1000*60*60*24));
   
   return {
     'total' : t,
     'days' : days,
     'hours' : hours,
     'minutes' : minutes,
     'seconds' : seconds
   };
 }

function initializeClock(id,time) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var timeInterval = setInterval(function(){
    var t = getSpentTime(time);
    daysSpan.innerHTML = (t.days);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if(t.total <=0) {
      clearInterval(timeInterval);
    }
  },1000);
}
function currentTime() {
  var t = Date.parse(new Date());
  t= t+(5*60*60*1000)+(30*60*1000);
  
  return {
    'hours' : Math.floor((t/(1000*60*60))%24),
    'minutes' : Math.floor((t/(1000*60))%60),
    'seconds' : Math.floor((t/1000)%60)
  };
}
function getCurrentTime(id) {
 clock = document.getElementById(id);
  var updateCurrentTime = setInterval(function() {
    var t = currentTime();
    clock.innerHTML = 'current time (UTC+0530): ' +('0' + t.hours).slice(-2) +' : ' + ('0' + t.minutes).slice(-2) + ' : ' +('0'+ t.seconds).slice(-2);
},1000);
}

var deadline = 'October 03 2015 00:00:00 UTC+0530';
initializeClock('clockdiv', deadline);
getCurrentTime('currentTime');