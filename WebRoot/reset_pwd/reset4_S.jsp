<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="小ZK留言"/>
    <meta name="description" content="小ZK留言网-重置密码！" />
    <link href="../index/css/page_header.css" rel="stylesheet">
    <link href="./css/reset.css" rel="stylesheet">
    <link href="./css/reset_4.css" rel="stylesheet">
    <link href="./css/copyright.css" rel="stylesheet">
    <link href="../index/img/ico_img/index.ico" rel="shortcut  icon" type="image/x-icon">
    <script type="text/javascript" src="../index/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="./js/reset4.js"></script>
	<script>

    </script>

    <title>小ZK-重置密码-重置结果</title>
</head>
<body style="background-color:#fff;">
    <div id="header">
        <div class="wrap clear">
            <h1 id="logo"><a href="/"><img src="../index/img/logo_img/logo.png"/> </a> </h1>
            <ul class="nav">
                <li><a href="/">首页</a> </li>
                <li><a href="/messageBoard">留言板</a> </li>
                <li><a href="/personalCenter">个人中心</a> </li>
            </ul>
            <p>
                您好,<a href="/login" id="login_btn">请登录</a>
            </p>
        </div>
    </div>
    <div style="height:50px;"></div>
    <div >
        <div class="reset_head">
            <div class="head_contain">
                <ul class="subnav_process">
                    <li class="active">
                        <div>
                            <i>1</i>
                            <p>填写帐号</p>
                        </div>
                        <i></i>
                    </li>
                    <li class="active">
                        <div>
                            <i>2</i>
                            <p>身份验证</p>
                        </div>
                        <i></i>
                    </li>
                    <li class="active">
                        <div>
                            <i>3</i>
                            <p>设置新密码</p>
                        </div>
                        <i></i>
                    </li>
                    <li class="last active">
                        <div>
                            <i>4</i>
                            <p>完成</p>
                        </div>
                        <i></i>
                    </li>
                </ul>
            </div>
        </div>
        <div id="reset_body">     
            <div class="section_main" id="container">        
                <div class="success">
                    <div class="completed_pic"> </div>
                    <p class="completed_text">重置密码成功!去<a href="/login">登录</a></p>
                </div>
            </div>
        </div>
    </div>
    <div id="footer">
        <p class="copyright">
            Copyright © ZK All Rights Reserved.
        </p>
    </div>
</body>
</html>