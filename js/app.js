const express=require('express');
//引入用户路由器
const userRouter=require('./router/user.js');
//引入body-parser中间件
const bodyParse=require('body-parser');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);
//托管静态资源
app.use(express.static('public'));
//使用body-parser中间件
app.use(bodyParse.urlencoded({
	extended:false
})); 
//使用路由器
app.use('/user',userRouter);