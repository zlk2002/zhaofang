var sp=document.getElementById('sp');

window.onload=function(){
    sp.innerHTML=getCookie('手机号');
}

var but=document.getElementById('but');

but.onclick=function(){
    window.location.href='./deng lu.html';
}