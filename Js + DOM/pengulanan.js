// var div1 = document.getElementById('div1');
// var div2 = document.getElementById('div2');
// var div3 = document.getElementById('div3');
// var div4 = document.getElementById('div4');
// var div5 = document.getElementById('div5');
// var div6 = document.getElementById('div6');
// var div7 = document.getElementById('div7');
// var div8 = document.getElementById('div8');
// var div9 = document.getElementById('div9');
// var div10 = document.getElementById('div10');

var div = [];
for (var i = 1; i <= 10; i++) {
    div[i] = document.getElementById('div' + i);
    console.log(div[i]);
}