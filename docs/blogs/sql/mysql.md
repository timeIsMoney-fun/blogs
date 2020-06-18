# MySql

## 启动 mysql 服务器

```sql
net start mysql
```

## 关闭 mysql

```sql
net stop mysql
```

## 连接数据库

```js
mysql -h 主机地址 -u 用户名 －p 用户密码

```

## 退出

```js
exit;
```

status;
显示当前 mysql 的 version 的各种信息。

## 修改密码:首先在 DOS 下进入 mysql 安装路径的 bin 目录下，然后键入以下命令:

```js

mysqladmin -uroot -p123 password 456;

```

## 增加用户

```js

#格式:grant 权限 on 数据库.* to 用户名@登录主机 identified by '密码'
/*
如，增加一个用户user1密码为password1，让其可以在本机上登录， 并对所有数据库有查询、插入、修改、删除的权限。首先用以root用户连入mysql，然后键入以下命令：
grant select,insert,update,delete on *.* to user1@localhost Identified by "password1";
如果希望该用户能够在任何机器上登陆mysql，则将localhost改为"%"。
如果你不想user1有密码，可以再打一个命令将密码去掉。
grant select,insert,update,delete on mydb.* to user1@localhost identified by "";
*/

grant all privileges on wpj1105.* to sunxiao@localhost identified by '123';   #all privileges 所有权限

```

## MySql 数据库操作基础

### 关键字:create 创建数据库(增)

```js

create database 数据库名 [数据库选项];

例如: create database test default charset utf8 collate utf8_bin;
```

数据库选项:字符集和校对规则
字符集:一般默认 utf8;
校对规则常见: ⑴ci 结尾的:不分区大小写 ⑵cs 结尾的:区分大小写 ⑶bin 结尾的：二进制编码进行比较

关键字:show 查看当前有哪些数据库(查)
show databases;

查看数据库的创建语句

show create database 数据库名

关键字:alter 修改数据库的选项信息(改)

```js
alter database 数据库名 [新的数据库选项];
例如: alter database test default charset gbk;
```

关键字:drop 删除数据库(删)
drop database 数据库名;

关键字:use 进入指定的数据库

use 数据库名

## 表的操作

``` js
/*关键字:create 创建数据表(增)*/
create table 表名(
字段1  字段1类型 [字段选项],
字段2  字段2类型 [字段选项],
字段n  字段n类型 [字段选项]
)表选项信息;

例如: create table test(
  id int(10) unsigned not null auto_increment comment 'id',
  content varchar(100) not null default '' comment '内容',
  time int(10) not null default 0 comment '时间',
  primary key (id)
)engine=InnoDB default charset=utf8 comment='测试表';

语法解析(下文MySQL列属性单独解析):
如果不想字段为NULL可以设置字段的属性为NOT NUL,在操作数据库时如果输入该字段的数据为NULL,就会报错.
AUTO_INCREMENT定义列为自增的属性,一般用于主键,数值会自动加1.
PRIMARY KEY关键字用于定义列为主键.可以使用多列来定义主键,列间以逗号分隔.
ENGINE 设置存储引擎,CHARSET 设置编码, comment 备注信息.

```


# 数据操作

## 关键字:insert 插入数据(增)
``` js

/*关键字:insert 插入数据(增)*/
insert into 表名(字段列表) values(值列表);
例如: create table user(
  id int(10) unsigned not null auto_increment comment 'id',
  name char(10) not null default '' comment '名字',
  age int(3) not null default 0 comment '年龄',
  primary key (id)
)engine=InnoDB default charset=utf8 comment='用户表';
--插入数据
insert into user(id,name,age) values(1,'admin_a',50);
insert into user(name) values('admin_b');

```

## 关键字:select 查询数据(查)

``` js

select *[字段列表] from 表名[查询条件];
例如: select * from user;--查全部字段用*代替

select name from user where age>0;--查name字段,age大于0




```


## 关键字:delete 删除数据(删)

``` js
delete from 表名[删除条件];
例如: delete from user where age<1;--删除age小于1数据

```

## 关键字:update 修改数据(改)

``` js

update 表名 set 字段1=新值1,字段n=新值n [修改条件];
例如: update user set age=100 where name='admin_a';

```

## MySQL数据类型

<img :src="$withBase('/sqltype.png')" alt="dock">

数值类型

<img :src="$withBase('/sqltype1.png')" alt="dock">

字符串类型

<img :src="$withBase('/sqltype2.png')" alt="dock">

时间日期类型

<img :src="$withBase('/sqltype3.png')" alt="dock">



## MySQL列属性

``` js

/*null、not null、default、primary key、auto_increment、comment*/
MySQL真正约束字段的是数据类型,但是数据类型的约束太单一,需要有一些额外的约束,来更加保证数据的合法性.
MySQL常用列属性有：null、not null、default、primary key、auto_increment、comment.

/*空属性: null和not null*/
空属性: null(空,默认) 和 not null(不为空). mysql数据库默认字段都是为null的,实际开发过程中尽可能保证所有的数据都不应该为null,空数据没有意义.
例如: create table test(
    a int not null,
    b int
);
insert into test (a,b) values(10,null);
insert into test (a,b) values(null,10);--报错




default: 自定义默认值属性,通常配合not null一起使用.
例如: create table test1(
    a int not null default 200,
    b int
);
insert into test1(b) values(20);--或 insert into test1(a,b) values(default,20);

```



## 主键|唯一索引

``` js

Mysql中提供了多种索引? (下文索引更多解析)
1.主键索引:primary key
2.唯一索引:unique key
3.全文索引:fulltext index
4.普通索引:key 或 index

主键:primary key  一张表中只能有一个字段可以使用对应的主键,用来唯一的约束该字段里面的数据,不能重复和不能为null.
设置主键有两种方式：
(1)在定义一个字段的时候直接在后面进行设置primary key
例如: create table test2(
  id int(10) unsigned not null primary key,
  name char(20) not null default ''
);

```






