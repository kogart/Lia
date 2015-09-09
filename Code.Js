var x = 0;
var y = 0;
var lvlcurrent = 1;
var exptotal = 100;
var expchar = 0;
var hptotal = 50;
var mptotal = 50;
var lvlGain = false;





var lvlup = function(_exptotal,_expchar){
    if (_expchar => _exptotal) {
        return true;
    }else{return false}
    if (lvlGain) {
    lvlcurrent++
    expchar = expchar - exptotal;
    exptotal = 1.1*(exptotal*1.6+10);
}
}

var expgain = function(expdrop, exptotal, expchar)
{

    expchar += expdrop;
    expdrop = 0;
   // lvlGain = lvlup(exptotal,_expchar);
    
    if (expchar => exptotal) {
    lvlcurrent++
    expchar -= exptotal;
    exptotal = 1.1*(exptotal*1.6+10);
    lvlGain = false;
    }
   //
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