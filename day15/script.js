function randomColor() {
  return '#'+ Math.random().toString(16).slice(2,8);
}
function colorGenerate(id) {
  var selectedDiv = document.getElementById(id);
  var refreshId = setInterval(function() {
    var color = randomColor();
    selectedDiv.innerHTML = color;
    selectedDiv.style.background = color;
  }, 5000);
}
colorGenerate('colorDiv1');
colorGenerate('colorDiv2');
colorGenerate('colorDiv3');
colorGenerate('colorDiv4');


