
function onkey(){
  console.log("onclick");
  const len = document.getElementById('pwd').value;

if(len.length ==0){
  document.getElementById('emoji').innerHTML = '&#128580;';
  document.getElementById('strength').innerHTML="Try your password"
}
else if(len.length >0 && len.length<2){
    document.getElementById('emoji').innerHTML = '&#128515';
    document.getElementById('strength').innerHTML="try stronger"
  }
  else if(len.length >4 && len.length <8){
    document.getElementById('emoji').innerHTML = '&#128552;';
    document.getElementById('strength').innerHTML="weak";
  }
  else if (len.length >8 && len.length<16) {
    document.getElementById('emoji').innerHTML = '&#128561;';
    document.getElementById('strength').innerHTML='strong';
  }

  else if (len.length >=16) {
    document.getElementById('emoji').innerHTML = '&#128526;';
    document.getElementById('strength').innerHTML='super strong';
  }
}
