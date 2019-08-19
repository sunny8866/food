SET NAMES UTF8;
DROP DATABASE IF EXISTS food;
CREATE DATABASE food CHARSET=UTF8;
USE food;
/**用户信息**/
CREATE TABLE animal_user(
	#编号
	uid INT PRIMARY KEY AUTO_INCREMENT,
	#昵称
	uname VARCHAR(32),
	#用户名
	user_name VARCHAR(32),
	#密码
	upwd VARCHAR(32),
	#头像
	avatar VARCHAR(128),
	#性别
	gender BOOL,
	#年龄
	age int,
	#邮箱
	email VARCHAR(64),
	#电话
	phone VARCHAR(16),
	#地址
	address VARCHAR(50)
);
INSERT INTO food_user VALUES(NULL,'foggy','李华','123456','NULL',1,20,'lihua@163.com','13125140286','山东省济南市');
INSERT INTO food_user VALUES(NULL,'sunny','王楠','123456','NULL',0,18,'wangnan@163.com','13376380703','山东省烟台市');
INSERT INTO food_user VALUES(NULL,'rainy','余盛','123456','NULL',1,22,'yusheng@126.com','15966533335','山东省青岛市');
INSERT INTO food_user VALUES(NULL,'sweet','周涛','123456','NULL',1,6,'zhoutao@qq.com','13245638546','山东省威海市');
INSERT INTO food_user VALUES(NULL,'sunny','李琳','123456','NULL',0,18,'lilin@163.com','13563124563','山东省烟台市');
INSERT INTO food_user VALUES(NULL,'sunny','司浩','123456','NULL',1,16,'sihao@163.com','15214263564','山东省烟台市');
INSERT INTO food_user VALUES(NULL,'sunny','周锐','123456','NULL',1,24,'zhourui@126.com','17854632354','山东省烟台市');
INSERT INTO food_user VALUES(NULL,'sunny','王然','123456','NULL',0,20,'wangran@163.com','18314536569','山东省烟台市');
INSERT INTO food_user VALUES(NULL,'sunny','杨颖','123456','NULL',0,22,'yangying@163.com','15956487895','山东省烟台市');
INSERT INTO food_user VALUES(NULL,'sunny','赵馨','123456','NULL',0,14,'zhaoxin@163.com','13214563258','山东省烟台市');