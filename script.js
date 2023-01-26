var wynik=document.getElementById("wynik");
var przycisk1=document.getElementById("1").value;
var przycisk2=document.getElementById("2").value;
var przycisk3=document.getElementById("3").value;
var przycisk4=document.getElementById("4").value;
var przycisk5=document.getElementById("5").value;
var przycisk6=document.getElementById("6").value;
var przycisk7=document.getElementById("7").value;
var przycisk8=document.getElementById("8").value;
var przycisk9=document.getElementById("9").value;
var przycisk10=document.getElementById("10").value;
var przycisk11=document.getElementById("11").value;
var przycisk12=document.getElementById("12").value;
var przycisk13=document.getElementById("13").value;
var przycisk14=document.getElementById("14").value;
var przycisk15=document.getElementById("15").value;
var przycisk16=document.getElementById("16").value;
function dodaj1(){
    if(przycisk1.value="0"){
        przycisk1.innerHTML="1";
        wynik+=32768;
    }
    else if(przycisk1.value="1"){
        przycisk1.innerHTML="0";
        wynik-=32768;
    }
}
function dodaj2(){
    if(przycisk2.value="0"){
        przycisk2.innerHTML="1";
        wynik+=16384;
    }
    else if(przycisk2.value="1"){
        przycisk2.innerHTML="0";
        wynik-=16384;
    }
}
function dodaj3(){
    if(przycisk3.value="0"){
        przycisk3.innerHTML="1";
        wynik+=8192;
    }
    else if(przycisk3.value="1"){
        przycisk3.innerHTML="0";
        wynik-=8192;
    }
}
function dodaj4(){
    if(przycisk4.value="0"){
        przycisk4.innerHTML="1";
        wynik+=4096;
    }
    else if(przycisk4.value="1"){
        przycisk4.innerHTML="0";
        wynik-=4096;
    }
}
function dodaj5(){
    if(przycisk5.value="0"){
        przycisk5.innerHTML="1";
        wynik+=2048;
    }
    else if(przycisk5.value="1"){
        przycisk5.innerHTML="0";
        wynik-=2048;
    }
}
function dodaj6(){
    if(przycisk6.value="0"){
        przycisk6.innerHTML="1";
        wynik+=1024;
    }
    else if(przycisk6.value="1"){
        przycisk6.innerHTML="0";
        wynik-=1024;
    }
}
function dodaj7(){
    if(przycisk7.value="0"){
        przycisk7.innerHTML="1";
        wynik+=512;
    }
    else if(przycisk7.value="1"){
        przycisk7.innerHTML="0";
        wynik-=512;
    }
}
function dodaj8(){
    if(przycisk8.value="0"){
        przycisk8.innerHTML="1";
        wynik+=256;
    }
    else if(przycisk8.value="1"){
        przycisk8.innerHTML="0";
        wynik-=256;
    }
}
function dodaj9(){
    if(przycisk9.value="0"){
        przycisk9.innerHTML="1";
        wynik+=128;
    }
    else if(przycisk9.value="1"){
        przycisk9.innerHTML="0";
        wynik-=128;
    }
}
function dodaj10(){
    if(przycisk10.value="0"){
        przycisk10.innerHTML="1";
        wynik+=64;
    }
    else if(przycisk10.value="1"){
        przycisk10.innerHTML="0";
        wynik-=64;
    }
}
function dodaj11(){
    if(przycisk11.value="0"){
        przycisk11.innerHTML="1";
        wynik+=32;
    }
    else if(przycisk11.value="1"){
        przycisk11.innerHTML="0";
        wynik-=32;
    }
}
function dodaj12(){
    if(przycisk12.value="0"){
        przycisk12.innerHTML="1";
        wynik+=16;
    }
    else if(przycisk12.value="1"){
        przycisk12.innerHTML="0";
        wynik-=16;
    }
}
function dodaj13(){
    if(przycisk13.value="0"){
        przycisk13.innerHTML="1";
        wynik+=8;
    }
    else if(przycisk13.value="1"){
        przycisk13.innerHTML="0";
        wynik-=8;
    }
}
function dodaj14(){
    if(przycisk14.value="0"){
        przycisk14.innerHTML="1";
        wynik+=4;
    }
    else if(przycisk14.value="1"){
        przycisk14.innerHTML="0";
        wynik-=4;
    }
}
function dodaj15(){
    if(przycisk15.value="0"){
        przycisk15.innerHTML="1";
        wynik+=2;
    }
    else if(przycisk15.value="1"){
        przycisk15.innerHTML="0";
        wynik-=2;
    }
}
function dodaj16(){
    if(przycisk16.value="0"){
        przycisk16.innerHTML="1";
        wynik+=1;
    }
    else if(przycisk16.value="1"){
        przycisk16.innerHTML="0";
        wynik-=1;
    }
}