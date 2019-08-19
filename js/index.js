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
var lis=ulIdexs.children;
function moveTo(to){
    // 若用户没有传入值，执行默认操作
    if(i==undefined){
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
    ulImgs.style.marginLeft=-i*liWidth+"px";
    if(i==liCount){
        i=0;
        setTimeout(function(){
            ulImgs.className="";
            ulImgs.style.marginLeft=0;
        },duration);
    }
    lis[i].className="active";
}