// 轮播图js效果
// i表示现在正在显示第几张图片
var i=0;
// 每个li的固定宽度
var liWidth=1000;
// 每次轮播动画持续的时间
var duration=500;
// li的总个数
var liCount=4;
// 要移动的ul
var ulImgs=document.getElementById("ul_imgs");
// 包含小圆点列表的ul
var ulIdxs=document.getElementById("ul_idxs");
// 小圆点的元素列表
var lis=ulIdxs.children;
// 移动的函数
function moveTo(to){
    // 若用户没有传入值，执行默认操作
    if(to==undefined){
        to=i+1;
    }
    if(i==0){
        if(to>i){
            ulImgs.className="transition";
        }
        else{
            ulImgs.className="";
            ulImgs.style.marginLeft=-liWidth*liCount+"px";
            setTimeout(function(){
                moveTo(liCount-1);
            },100);
            return;
        }
    }
    i=to;
    ulImgs.style.marginLeft=-i*liwidth+"px";
    for(var li of lis){
        li.className="";
    }
    if(i==liCount){
        i=0;
        setTimeout(function(){
            ulImgs.className="";
            ulImgs.style.marginLeft=0;
        },duration);
    }
    lis[i].className="active";
}
// 用DOM查找左右按钮
var btnLeft=document.getElementById("btn_left");
var btnRight=document.getElementById("btn_right");
// 开关
var canClick=true;
btnRight.onclick=function(){
    moveTo(1);
}
// 左右按钮共用的移动函数
function move(n){
    if(canClick){
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
            canClick=true;
        },duration+100);
    }
}
var interval=3000;
var timer=setInterval(function(){
    moveTo();
},3000);
var banner=document.getElementById("banner");
banner.onmouseover=function(){
    clearInterval(timer);
}
banner.onmouseout=function(){
    timer=setInterval(function(){
        moveTo();
    },3000);
}
// 小圆点的点击效果
var ulIdxs=document.getElementById("ul_idxs");
ulIdxs.onclick=function(e){
    if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
            if(li.className!=="active"){
                for(var i=0;i<lis.length;i++){
                    if(lis[i]==li){
                        break;
                    }
                }
                moveTo(i);
                setTimeout(function(){
                    canClick=true;
                },duration);
            }
        }
    }
}