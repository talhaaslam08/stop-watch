var mins=0;
var secs=0;
var msecs=0;

var getmin=document.getElementById('min')
var getsec=document.getElementById('sec')
var getmsec=document.getElementById('msec')
var stoop;

function start(){
 stoop=setInterval(function(){
    msecs++
    getmsec.innerHTML=msecs
    if(msecs>=100){
        secs++
        getsec.innerHTML=secs
        msecs=0
    }else if(secs>=59){
        mins++
        getmin.innerHTML=mins
        secs=0

    }
    
},10)
document.getElementById("Start").disabled=true

}

function stop(){
    clearInterval(stoop)
    document.getElementById("Start").disabled=false



}

function reset(){
    msecs=0;
    secs=0;
    mins=0;
    getmin.innerHTML=0;
    getsec.innerHTML=0;
    getmsec.innerHTML=0;
}