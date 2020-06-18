# 安装 MySql

## 下载 MySQL

打开 MySQL 的官网 www.mysql.com，发现有一个 DOWNLOADS

<img src="/sql1.png"/>

下载完成后，它是一个压缩文件，把它放到想要放置的位置，如 D 盘，用解压软件解压到当前文件夹，D 盘就会多了一个文件夹，如下图

<img src="/mysql2.png" />

## 配置环境变量

环境变量的配置，和 java 的配置方式一致，就是把 MySQL 的 bin 路径 D:\mysql-5.7.20-winx64\bin，放到环境变量中。配置完成后，打开 cmd 命令窗口，输入 mysql -V, 如果输出版本号，表示配置成功。

## MySQL 配置

打开我们解压后的文件夹，就是 D 盘下的 mysql-5.7.20-winx64 文件夹，新建一个 my.ini 文件

<img src="/mysql3.png" />

::: tip
然后双击它，用记事本打开， 输入如下内容
:::

```js

[mysql]
default-character-set=utf8
[mysqld]
port = 3306
basedir=D:\Software\MySQL
datadir=D:\Software\MySQL\data
max_connections=200
character-set-server=utf8
default-storage-engine=INNODB

#跳过密码
#skip-grant-tables

```

:::tip
使用 cmd 运行命令，完成配置，这里一定用管理员身份运行 cmd.

:::

1. 启动 cmd 命令窗口。win10 系统下，桌面状态栏中有一个圆圈（下图底部的圆圈）表示搜索，点击，出来搜索框，在搜索框中输入 cmd，出来以下内容

<img src="/mysql4.png" />

::: tip
在上图中的命令提示符中，单击右键，出来如下内容，选择以管理员身份运行就可以了
:::

<img src="/mysql5.png" />

2. 在 powershell 或 cmd 窗口中，切换到 mysql 的 bin 目录, 完成配置。

::: tip
首先输入 mysqld --initialize 命令，它表示初始化 mysql，生成 data 文件夹中的文件。如果没有报错，就表示初始化完成。

输入 mysqld -install 命令，安装 MySQL. 如果出现 Service successfully installed 说明注册成功了 因为我的已经注册好了，所以会出现下图， 已存在。
:::

<img src="/mysql6.png" />

::: tip
现在终于可以启动服务器了 net start mysql 命令启动服务器。关闭服务器用 net stop mysql
:::

<img src="/mysql7.png" />

## MySQL 登录和退出

这涉及到 MySQL 命令的常用参数： -u: u 代表 username, 表示用户名; -p: p 代表 password, 表示登录密码； -h: host-name 主机名； -P: port 端口。

所以我们要登录 MySQL，需要提供用户名，密码，主机名，端口号信息。语法 mysql [-u username][-h host] [-p[password]]; 安装 MySQL 后，我们会得到初始的用户名 root, 但没有初始密码，但输入密码怎么办？我们只需键入 mysql 即可。如果访问本地服务器的话和使用 mysql 的默认端口时，-h 和-P 可以不写。 现在我们就登录一下， 在这之前要先启动 mysql 服务器。这里还是要以管理员的身份运行 powershell

当我们在命令行中输入 mysql -u root -p 后，提示我们输入密码，这时输入 mysql， 就可以登录到 mysql 了。

<img src="/mysql8.png" />

现在我们就可以操作数据库了。

当然操作完成后还是要退出的，mysql 退出有如下三种方法。注意，每一行语句要以; 分号结尾。如果按 enter，你会发现它会另起一行，有一个箭头，表法该语句并没有结束。 exit; quit; \q;

<img src="/mysql9.png" />

::: tip
但某一天，启动 mysql 时，突然报错发生系统错误，系统找不到指定的文件。当时有点懵，安装 mysql 之后，一直就没有修改过，怎么会报错呢？上网搜索了一下，重新安装一下 mysql 服务就可以了，现在也不知道什么原因。

以管理员身份打开 CMD 命令窗口，切换到 mysql 的 bin 目录下, 注意，以管理员身份运行时，cd 命令后面要加 /d 才能切换目录。

:::

<!-- <img src="https://images2018.cnblogs.com/blog/1013082/201803/1013082-20180319100641635-567289716.png" /> -->

::: tip
执行 mysqld --remove 命令，把以前的服务删除
:::

<!-- <img src="https://images2018.cnblogs.com/blog/1013082/201803/1013082-20180319101517372-1916469527.png" /> -->

::: tip
执行 mysqld --install 命令，重新安装 mysql 服务。
:::

<!-- <img src="https://images2018.cnblogs.com/blog/1013082/201803/1013082-20180319101612452-1895201616.png" /> -->

::: tip
现在执行 net start mysql 启动服务器。
:::

<!-- <img src="https://images2018.cnblogs.com/blog/1013082/201803/1013082-20180319101655444-601638618.png" /> -->
