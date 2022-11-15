var span_=document.getElementsByClassName('sp')[0];

var but=document.getElementById('but');

var in1=document.getElementById('in1');

var num=5;

var time=null;

touch.on(span_,'tap',function(){

    span_.setAttribute('disabled',true);
    clearInterval(time);
    time=setInterval(function(){
        num--;
        span_.innerHTML=num;

        if(num==3){
            sum= Math.floor(Math.random()*(9999-1000))+1000;
            alert(sum);
        }
        if(num==0){
             span_.removeAttribute('disabled');
             span_.innerHTML='重新获取验证码';
             clearInterval(time);
            //  span_[1].innerHTML=num;
            num=5;
        }
    },1000)
})

var dd_=document.getElementsByClassName('dd')[0];

in1.onblur=function(){
   
    reg1=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

    if(in1.value==''){
        dd_.style.top='6rem';
         dd_.innerHTML='不能为空';
         dd_.style.display='block';
    }else if(reg1.test(in1.value)){
        dd_.style.top='6rem';
        dd_.style.display='block';
           dd_.innerHTML='输入正确';
    }else{
        dd_.style.top='6rem';
        dd_.style.display='block';
        dd_.innerHTML='长度不对或有非法字符';
    }
}

var in2=document.getElementById('in2');

in2.onblur=function(){

    if(in2.value==''){
       dd_.style.top='10rem';
       dd_.style.display='block';
       dd_.innerHTML='不能为空';
    }else if(in2.value==sum){
        dd_.style.top='10rem';
        dd_.style.display='block';
        dd_.innerHTML='输入正确';
    }else{
        dd_.style.top='10rem';
       dd_.style.display='block';
       dd_.innerHTML='输入错误';
    }
}

var in3=document.getElementById('in3');

in3.onblur=function(){
     reg2=/^\w{6,8}$/;

    if(in3.value==''){
        dd_.style.top='14rem';
       dd_.style.display='block';
       dd_.innerHTML='不能为空';
    }else if(reg2.test(in3.value)){
        dd_.style.top='14rem';
       dd_.style.display='block';
       dd_.innerHTML='输入正确';
    }else{
        dd_.style.top='14rem';
       dd_.style.display='block';
       dd_.innerHTML='输入错误';
    }
}

var in4=document.getElementById('in4');

in4.onblur=function(){

    if(in4.value==''){
        dd_.style.top='18rem';
       dd_.style.display='block';
       dd_.innerHTML='不能为空';
    }else if(reg2.test(in4.value)){
        dd_.style.top='18rem';
       dd_.style.display='block';
       dd_.innerHTML='输入正确';
    }else{
        dd_.style.top='18rem';
       dd_.style.display='block';
       dd_.innerHTML='输入错误';
    }
}

but.onclick=function(){
    if(reg1.test(in1.value) && in2.value==sum && reg2.test(in3.value)){
        setCookie('手机号',in1.value);
        setCookie('密码',in4.value);
        window.location.href='./pu tong .html';
     }
}

// but.onclick=function(){
//         if(in1.onblur() && in2.onblur() && in3.onblur()){
//             setCookie('手机号',in1.value);
//             setCookie('密码',in3.value);
//             window.location.href='./pu tong .html';
//          }
//     }
   