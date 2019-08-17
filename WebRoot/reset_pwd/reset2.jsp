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
    <link href="./css/reset_2.css" rel="stylesheet">
    <link href="./css/copyright.css" rel="stylesheet">
    <link href="../index/img/ico_img/index.ico" rel="shortcut  icon" type="image/x-icon">
    <script type="text/javascript" src="../index/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="./js/reset2.js"></script>
	<script>

    </script>

    <title>小ZK-重置密码-设置密码</title>
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
                    <li  class="active">
                        <div>
                            <i>2</i>
                            <p>身份验证</p>
                        </div>
                        <i></i>
                    </li>
                    <li>
                        <div>
                            <i>3</i>
                            <p>设置新密码</p>
                        </div>
                        <i></i>
                    </li>
                    <li class="last">
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
            <div class="content">
                <div class="tips">
                    <p>
                        <i></i>
                        <span>经过检测，账号<b class="user_id">*****</b>可通过下面的密保问题找回密码</span>
                    </p>
                </div>
                <div class="question_wrap">
                    <div class="question">
                        <p>
                            <span class="box_left">问题：</span>
                            <span class="box_right" id="question_con">****</span>
                         </p>
                    </div>
                    <div class="answer">
                        <p>
                            <span class="box_left">请输入答案：</span>
                            <span class="box_right"><input id="answer_input" maxlength="10"  type="password"/><a id="pwd_on_off" class="pwd_on_off"></a></span>
                         </p>
                    </div>
                    <div style="text-align:center;"><a class="mod-btn" href="###" id="next_step" style="margin-top:10px"><span>确定</span></a></div>
                </div>
                
            </div>
            <div id="no_find" style="display:none;">
                	<p><i></i>经检测，账号<b class="user_id">*****</b>未设置密保问题，请联系管理员修改。。。</p>
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