const express=require('express');
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//注册路由
router.post('/reg',function(req,res){
	//获取数据
	var obj=req.body;
	//console.log(obj);
	//遍历访问对象
	var i=400;
	for(var key in obj){
		i++;
		//判断是否为空
		if(!obj[key]){
			res.send({code:i,msg:key+'required'});
			//结束函数执行
			return;
		}
	}
	//执行SQL代码
	pool.query('INSERT INTO	animal_user SET ?',[obj],function(err,result){
		//有错误则抛出
		if(err){
			throw err;
		}
		//console.log(result);
		//如果修改的行数大于0，则注册成功
		if(result.affectedRows>0){
			res.send({code:200,msg:'successful'});
		}
	});
});
//登录路由
router.post('/login',function(req,res){
	//获取数据
	var obj=req.body;
	//验证昵称是否为空
	if(!obj.uname){
		res.send({code:401,msg:'uname required'});
		//结束函数执行
		return;
	}
	//验证密码是否为空
	if(!obj.upwd){
		res.send({code:402,msg:'upwd required'});
		//结束函数执行
		return;
	}
	//执行SQL语句
	//查询是否有用户名和密码同时匹配的数据
	pool.query('SELECT * FROM animal_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
		//有错误，则抛出
		if(err){
			throw err;
		}
		console.log(result);
		//判断登录成功还是失败
		if(result.length>0){
			res.send({code:200,msg:'login success'});
		}
		else{
			//没有元素，失败
			res.send({code:201,msg:'uname or upwd error'});
		}
	});
});
//检索用户
router.get('/detail',function(req,res){
	//获取数据
	var obj=req.query;
	//验证数据是否为空
	if(!obj.uid){
		res.send({code:401,msg:'uid required'});
		return;
	}
	//执行SQL语句
	pool.query('SELECT * FROM animal_user WHERE animal=?',[obj.uid],function(err,result){
		//有错误，则抛出
		if(err){
			throw err;
		}
		res.send(result);
	});
});
//修改用户
router.post('/update',function(req,res){
	//获取数据
	var obj=req.body;
	//console.log(obj);
	//验证数据是否为空
	//遍历对象，访问每个属性
	var i=400;
	for(var key in obj){
		i++;
		//console.log(key,obj[key]);
		//如果属性值为空，提示属性名必须
		if(!obj[key]){
			res.send({code:i,msg:key+'required'});
			return;
		}
	}
	//执行SQL语句
	//取出用户编号
	var uid=obj.uid;
	//删除对象中的编号属性
	delete obj.uid;
	console.log(obj);
	//SQL语句
	pool.query('UPDATE animal_user SET ? WHERE uid=?',[obj,uid],function(err,result){
		if(err){
			throw err;
		}
		//console.log(result);
		//判断是否修改成功
		if(result.affectedRows>0){
			res.send({code:200,msg:'update success'});
		}
		else{
			res.send({code:201,msg:'update error'});
		}
	});
});
//导出路由器
module.exports=router;