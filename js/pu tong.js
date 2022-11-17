var tiao=document.getElementsByClassName('tiao');
var but=document.getElementById('but');
var div1=document.getElementsByClassName('deng_putong_2')[0];
var div2=document.getElementsByClassName('deng_putong_3')[0];

// for(var i=0;i<tiao.length;i++){
//      tiao[i].setAttribute('index',i);
//      tiao[i].onclick=function(){
//         var inde=this.getAttribute('index');
//         // console.log(inde);
//        div1
//      }
// }

tiao[0].onclick=function(){
    div1.style.display='block';
    div2.style.display='none';
    tiao[0].style.borderBottom='.2rem solid rgb(255,138,0)';
    tiao[1].style.borderBottom='.2rem solid gray'
}

tiao[1].onclick=function(){
    div2.style.display='block';
    div1.style.display='none';
    tiao[1].style.borderBottom='.2rem solid rgb(255,138,0)';
    tiao[0].style.borderBottom='.2rem solid gray'
}

var shouji=document.getElementById('shouji');
shouji.value=getCookie('手机号');
window.onload=function(){
    
    
}

var dd=document.getElementsByClassName('dd')[0];

shouji.onblur=function(){
     reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

    if(shouji.value==''){
        dd.style.display='block';
        dd.style.top='10rem';
          dd.innerHTML='不能为空';
    }else if(reg.test(shouji.value)){
        dd.style.display='block';
        dd.style.top='10rem';
          dd.innerHTML='输入正确';
    }else{
        dd.style.display='block';
        dd.style.top='14rem';
          dd.innerHTML='输入错误';
    }

}

var pass=document.getElementById('pass');

pass.onblur=function(){
    if(pass.value==''){
        dd.style.display='block';
        dd.style.top='14rem';
          dd.innerHTML='不能为空';
    }else if(pass.value==getCookie('密码')){
        dd.style.display='block';
        dd.style.top='14rem';
          dd.innerHTML='输入正确';
    }else{
        dd.style.display='block';
        dd.style.top='14rem';
          dd.innerHTML='输入错误';
    }
}

var ss=document.getElementById('ss');

window.onload=function(){
    ss.value=getCookie('手机号');
   
}



var sss=document.getElementById('sss');

var num=5;
var time=null;
sss.onclick=function(){
    sss.setAttribute('disabled',true);
  clearInterval(time);
 time=setInterval(function(){
    num--;
    sss.innerHTML=num;
   if(num==3){
    sum= Math.floor(Math.random()*(9999-1000))+1000;
    alert(sum);
   }

   if(num==0){
       sss.removeAttribute('disabled');
       sss.innerHTML='重新获取验证码';
       clearInterval(time);
       num=5;
   }
 },1000)
}

ss.onblur=function(){
     reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

    if(ss.value==''){
        dd.style.display='block';
        dd.style.top='10rem';
          dd.innerHTML='不能为空';
    }else if(reg.test(ss.value)){
        dd.style.display='block';
        dd.style.top='10rem';
          dd.innerHTML='输入正确';
    }else{
        dd.style.display='block';
        dd.style.top='10rem';
          dd.innerHTML='输入错误';
    }

}

var yan=document.getElementById('yan');
yan.onblur=function(){
    if(yan.value==''){
        dd.style.display='block';
        dd.style.top='14rem';
          dd.innerHTML='不能为空';
    }else if(yan.value==sum){
        dd.style.display='block';
        dd.style.top='14rem';
          dd.innerHTML='输入正确';
    }else{
        dd.style.display='block';
        dd.style.top='14rem';
          dd.innerHTML='输入错误';
    }
}



// touch.on(but,'tap',function(){
//     if(reg.test(ss.value) && yan.value==sum){
//        window.location.href='../cheng gong.html';
//     }
// })

but.onclick=function(){
    // console.log(reg);
    if(reg.test(ss.value) && yan.value==sum){
        window.location.href='./cheng gong.html';
    }
}








