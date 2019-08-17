<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="小ZK留言-密码保护！"/>
    <meta name="description" content="小ZK留言网-密码保护！" />
    <link href="../index/css/page_header.css" rel="stylesheet">
    <link href="./css/pwdManage.css" rel="stylesheet">
    <link href="./css/copyright.css" rel="stylesheet">
    <link href="../index/img/ico_img/index.ico" rel="shortcut  icon" type="image/x-icon">
    <script type="text/javascript" src="../index/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="./js/change_pwdManage_verify.js"></script>
	<script>

    </script>

    <title>小ZK-重置密码-修改密保</title>
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
    <div>
        <p id="location">
            <a href="/">首页</a>
            >
            <a>修改密保</a> 
        </p>
    </div>
    <div >
        <div id="reset_body">
            <div class="content"  style="display:none;">
                <div class="tips">
                    <p>
                        <i></i>
                        <span>修改账号<b class="user_id">*****</b>的密保问题,请先回答下面的密保问题：</span>
                    </p>
                </div>
                <div class="question_wrap">
                    <div class="question">
                        <p>
                            <span class="box_left">问题：</span>
                            <span class="box_right" ><span id="question_con" style="display:inline-block;text-align:left;">****</span></span>
                         </p>
                    </div>
                    <div  style="position:relative;" class="answer">
                        <p>
                            <span class="box_left">请输入答案：</span>
                            <span class="box_right">
                            	<input id="answer_input" maxlength="10"  type="password"/>
                            	<a id="pwd_on_off" class="pwd_on_off"></a>
                            </span>
                        </p>
                        <div style="display:none" id="answer_tips">
                            <p>2-10位，答案只能含有字母，数字，汉字</p>
                        </div>
                    </div>
                    <div style="text-align:center;"><a class="mod-btn" href="###" id="next_step" style="margin-top:10px"><span>确定</span></a></div>
                </div>
                
            </div>
            <div class="tips" id="login_first" style="display:none;">
                	<p><i></i>请先<a href="/login">登录</a></p>
            </div>
            <div class="tips" id="not_set" style="display:none;">
                	<p><i></i>经检测，账号<b class="user_id">*****</b>未设置密保问题，您可<a href="/pwdManage/index">设置密保</a></p>
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