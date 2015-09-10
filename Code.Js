var x = 0;
var y = 0;
var lvlcurrent = 1;
var exptotal = 100;
var expchar = 0;
var hptotal = 50;
var mptotal = 50;
var lvlGain = false;


var character = function(){
    var Strenght = 5;
    var Inteligence = 5;
    var Agility = 5;
    var Stamina = 5;
    
    
    
}






var lvlup = function(){
    
    if (expchar >= exptotal) {
    lvlcurrent++
    expchar = expchar - exptotal;
    exptotal = Math.round(1.1*(exptotal*1.6+10));
    
}
return lvlcurrent;
}


var expgain = function(expdrop)
{
    var _expchar = expchar;
    _expchar = _expchar + expdrop;
     expdrop = 0;
     expchar = _expchar
    return expchar;
    
}


$("#up").click(function(){
    y += 1
    console.log(x,y)
    });
$("#down").click(function(){
    y -= 1
    console.log(x,y)
    });
$("#left").click(function(){
    x -= 1
    console.log(x,y)
    });
$("#right").click(function(){
    x += 1
    console.log(x,y)
    });  