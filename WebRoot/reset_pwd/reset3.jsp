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
    <link href="./css/reset_3.css" rel="stylesheet">
    <link href="./css/copyright.css" rel="stylesheet">
    <link href="../index/img/ico_img/index.ico" rel="shortcut  icon" type="image/x-icon">
    <script type="text/javascript" src="../index/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="./js/angularjs.js"></script>
    <script type="text/javascript" src="./js/setNewPwd.js"></script>
    <script type="text/javascript" src="./js/reset3.js"></script>
	<script>

    </script>

    <title>小ZK-重置密码-回答密保</title>
</head>
<body ng-app ="myApp" style="background-color:#fff;">
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
                    <li class="active">
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
            <div id="passChange">
        <form name="myForm" method="post" action="/form/setNewPwd" id="pass">
            <div class="form_group" ng-class="{'have_error':myForm.password.$dirty && myForm.password.$invalid}">
                <label>密码:</label>
                <div class="inline">
                    <input placeholder="密码" type="password" autocomplete="off" name="password" ng-required="true" ng-maxlength="16" ng-minlength="6" ng-model="data.password2"/>
                    <div ng-show="myForm.password.$dirty && myForm.password.$error.minlength">密码不能小于6位</div>
                    <div ng-show="myForm.password.$dirty && myForm.password.$error.maxlength">密码不能大于16位</div>
                </div>
            </div>
            <div class="form_group" ng-class="{'have_error':myForm.passwordConfirm.$dirty && myForm.passwordConfirm.$invalid || data.password != data.passwordConfirm}">
                <label>确认密码:</label>
                <div class="inline">
                    <input placeholder="确认密码" type="password" autocomplete="off" name="passwordConfirm" ng-required="true" ng-maxlength="10" ng-minlength="5" ng-model="data.passwordConfirm2"/>
                    <div ng-show="myForm.passwordConfirm.$dirty && myForm.passwordConfirm.$error.minlength || myForm.passwordConfirm.$error.maxlength">密码不符合规则</div>
                    <div ng-show="myForm.passwordConfirm.$dirty && data.password2 !== data.passwordConfirm2 && !myForm.passwordConfirm.$error.minlength && !myForm.passwordConfirm.$error.maxlength">密码输入不一致</div>
                </div>
            </div>

            <div class="form_group">
                <div class="sub_reset">
                    <input class="reset" type="button" value="重置">
                    <input class="sub" type="submit" ng-disabled="myForm.$invalid || data.password2 !== data.passwordConfirm2" value="确定修改">
                </div>
            </div>
        </form>
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