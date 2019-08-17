<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="小ZK留言"/>
    <meta http-equiv="Content-Language" content="zh-cn" />
    <meta name="description" content="小ZK留言网-个人中心！" />
    <link href="index/img/ico_img/index.ico" rel="shortcut  icon" type="image/x-icon">
    <link href="index/css/page_header.css" rel="stylesheet">
    <!---footCss --->
    <link href="messageBoard/css/messageBoardFoot.css" rel="stylesheet">
    <script type="text/javascript" src="index/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="personalCenter/js/personalCenter.js"></script>
    <!---载入登录者信息，我的留言板点赞功能等 --->
    <script type="text/javascript" src="messageBoard/js/messageBoard.js"></script>
    <!---个人信息 --->
    <script type="text/javascript" src="personalCenter/js/personalMessage.js"></script>
    <link type="text/css" href="personalCenter/css/personalMessage.css" rel="stylesheet" >
    <!---信息修改 --->
    <script src="personalCenter/js/angularjs.js"></script>
    <script src="personalCenter/js/changeMessage_ng.js"></script>
    <link type="text/css" href="personalCenter/css/changeMessage.css" rel="stylesheet" >
    <!---修改密码 --->
    <link type="text/css" href="personalCenter/css/passChange.css" rel="stylesheet" >
    <!---我的留言板 --->
    <link href="index/css/board.css" rel="stylesheet">
    <link href="index/css/viewer.min.css" rel="stylesheet">
    <script type="text/javascript" src="personalCenter/js/loadPersonalMessage.js"></script>
    <script type="text/javascript" src="index/js/viewer.min.js"></script>
    <script type="text/javascript" src="index/js/exif.js"></script>
    <script type="text/javascript" src="index/js/return_top.js"></script>
    <script type="text/javascript" src="index/js/writeComment.js"></script>
    <script type="text/javascript" src="index/js/commentEvents.js"></script>
    <!---本页面css --->
    <link href="personalCenter/css/personalCenter.css" rel="stylesheet">

    <title>小ZK-个人中心</title>
</head>
<body  ng-app ="myApp" class="clear">
    <div id="header">
        <div class="wrap clear">
            <h1 id="logo"><a href="/"><img src="index/img/logo_img/logo.png"/> </a> </h1>
            <ul class="nav">
                <li><a href="/">首页</a> </li>
                <li><a href="messageBoard">留言板</a> </li>
                <li style="background-color:#fff;"><a href="personalCenter">个人中心</a> </li>
            </ul>
            <p>
                您好,<a id="login_btn">???</a>
            </p>
        </div>
    </div>
    <div id="side_nav">
        <ul>
            <li>
                <a id="btn_perMess" href="javascript:">
                    <label>
                        <span class="nor">个人信息</span>
                        <span class="active">个人信息</span>
                    </label>
                </a>
            </li>
            <li>
                <a  id="btn_changeMess"  href="javascript:">
                    <label>
                        <span class="nor">信息修改</span>
                        <span class="active">信息修改</span>
                    </label>
                </a>
            </li>
            <li>
                <a  id="btn_passChange"  href="javascript:">
                    <label>
                        <span class="nor">密码修改</span>
                        <span class="active">密码修改</span>
                    </label>
                </a>
            </li>
            <li>
                <a  id="btn_myBoard"  href="javascript:">
                    <label>
                        <span class="nor">我的留言</span>
                        <span class="active">我的留言</span>
                    </label>
                </a>
            </li>
        </ul>
    </div>

    <div id="personalMessage">
        <form action="#" id="mes">
            <div class="form_group">
                <label>用户名:</label>
                <div class="inline">
                    <span>？</span>
                </div>
            </div>
            <div class="form_group">
                <label>账号:</label>
                <div class="inline">
                    <span>？</span>
                </div>
            </div>
            <div class="form_group">
                <label>邮箱:</label>
                <div class="inline">
                    <span>？</span>
                </div>
            </div>
            <div class="form_group">
                <label>年龄:</label>
                <div class="inline">
                    <span>？</span>
                </div>
            </div>
            <div class="form_group">
                <label>性别:</label>
                <div class="inline">
                    <span>？</span>
                </div>
            </div>
            <div class="form_group">
                <label>爱好:</label>
                <div class="inline">
                    <span>？</span>
                </div>
            </div>
            <div class="form_group">
                <label>所在地:</label>
                <div class="inline">
                    <span>？</span>
                </div>
            </div>
        </form>
    </div >
    <div id="changeMessage">
        <form ng-controller="form_con" method="post" name="myForm" action="/form/changeMessage" id="reg">

            <div class="form_group" ng-class="{'have_error':myForm.email.$dirty && myForm.email.$invalid}">
                <label>邮箱:</label>
                <div class="inline">
                    <input placeholder="邮箱" type="email" autocomplete="off" name="email" ng-pattern="/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/" ng-required="true" ng-maxlength="20" ng-minlength="5" ng-model="data.email"/>
                    <div ng-show="myForm.email.$dirty && myForm.email.$error.minlength ">邮箱不能小于5位</div>
                    <div ng-show="myForm.email.$dirty && myForm.email.$error.maxlength">邮箱不能大于20位</div>
                    <div ng-show="myForm.email.$dirty && myForm.email.$error.email && !myForm.email.$error.minlength && !myForm.email.$error.maxlength && myForm.email.$error.pattern">邮箱格式不正确</div>
                </div>
            </div>
            <div class="form_group" ng-class="{'have_error':myForm.age.$dirty && myForm.age.$invalid}">
                <label>年龄:</label>
                <div class="inline">
                    <input placeholder="年龄" type="number" autocomplete="off" name="age" ng-required="true" max="99" min="10" ng-model="data.age"/>
                    <div ng-show="myForm.age.$dirty && (myForm.age.$error.min || myForm.age.$error.max)">年龄为10~99</div>
                </div>
            </div>
            <div class="form_group">
                <label>性别:</label>
                <div class="inline">
                    <span><input type="radio" ng-required="true" name="sex" ng-model="data.sex" value="男"/>男</span>
                    <span><input type="radio" ng-required="true" name="sex" ng-model="data.sex" value="女"/>女</span>
                </div>
            </div>
            <div class="form_group">
                <label>爱好:</label>
                <div class="inline">
                <span ng-repeat="hobby in hobbies">
                    <input class="checkbox" type="checkbox" name="likes" ng-value="hobbies[$index].id" ng-checked ="data.hobbies == undefine ? false : data.hobbies.indexOf(hobby.id) !== -1" ng-click="changeCheck(hobby.id)" />{{hobby.name}}
                </span>
                    <div ng-show="data.hobbies === undefined || data.hobbies.length === 0">您没有爱好吗？</div>
                </div>
            </div>
            <div class="form_group">
                <label>所在地:</label>
                <div class="inline">
                    <input placeholder="所在地(3-20位)" type="text" autocomplete="off" name="adress" ng-required="true" ng-maxlength="20" ng-minlength="3" ng-model="data.location"/>
                    <div ng-show="myForm.location.$dirty && myForm.location.$error.minlength">所在地不能小于3位</div>
                    <div ng-show="myForm.location.$dirty && myForm.location.$error.maxlength">所在地不能大于20位</div>
                </div>
            </div>
            <div class="form_group">
                <div class="sub_reset">
                    <input class="reset" type="button" ng-click="reset()" value="重置">
                    <input class="sub" type="submit" ng-disabled="myForm.$invalid" value="确定修改">
                    <input type="hidden" name="action" value="changeMessage" />
                </div>
            </div>
        </form>
    </div>
    <div id="passChange">
        <form name="myForm" method="post" action="/form/changePassword" id="pass">
            <div style="position:relative;" class="form_group" ng-class="{'have_error':myForm.password.$dirty && myForm.password.$invalid}">
                <label>新密码：</label>
                <div class="inline">
                    <input placeholder="新密码" type="password" autocomplete="off" name="password" ng-required="true" ng-pattern="/^[0-9a-zA-Z_]{1,}$/" ng-maxlength="16" ng-minlength="6" ng-model="data.password"/>
                    <div ng-show="myForm.password.$dirty && myForm.password.$error.minlength && !myForm.password.$error.pattern">密码不能小于6位</div>
                    <div ng-show="myForm.password.$dirty && myForm.password.$error.maxlength && !myForm.password.$error.pattern">密码不能大于16位</div>
                    <div ng-show="myForm.password.$dirty && myForm.password.$error.pattern">密码只能含有数字，字母，下划线</div>
                </div>
                <p id="set_pwdManage"><a href="/pwdManage/index">密保设置</a></p>
            </div>
            <div class="form_group" ng-class="{'have_error':myForm.passwordConfirm.$dirty && myForm.passwordConfirm.$invalid || data.password != data.passwordConfirm}">
                <label>确认新密码：</label>
                <div class="inline">
                    <input placeholder="确认新密码" type="password" autocomplete="off" name="passwordConfirm" ng-pattern="/^[0-9a-zA-Z_]{1,}$/" ng-required="true" ng-maxlength="10" ng-minlength="5" ng-model="data.passwordConfirm"/>
                    <div ng-show="myForm.passwordConfirm.$dirty && myForm.passwordConfirm.$error.minlength || myForm.passwordConfirm.$error.maxlength || myForm.passwordConfirm.$error.pattern" >密码不符合规则</div>
                    <div ng-show="myForm.passwordConfirm.$dirty && data.password != data.passwordConfirm && !myForm.passwordConfirm.$error.minlength && !myForm.passwordConfirm.$error.maxlength && !myForm.passwordConfirm.$error.pattern">密码输入不一致</div>
                </div>
            </div>

            <div class="form_group">
                <div class="sub_reset">
                    <input class="reset" type="button" value="重置">
                    <input class="sub" type="submit" ng-disabled="myForm.$invalid || data.password !== data.passwordConfirm" value="确定修改">
                    <input type="hidden" name="action" value="changePassword" />
                </div>
            </div>
        </form>
    </div>
    <div id="content" class="myBoard">
        <div class="title leaveMessage">
            <h2><em>MY MESSAGE</em><span>我的留言</span></h2>
            <div class="leaveMessageContent">
                <ul>
	                    <li>
	                        <div class="messageHeader clear">
	                            <div class="user_info">
	                                <p class="user_name"><a href="#">XXXX</a>：</p>
	                                <time>X月X日 X</time>
	                            </div>
	                            <div class="floor">
	                                <span>X</span>楼
	                            </div>
	                        </div>
	                        <div class="messageContent">
	                            <p> XXXXXXXXXXXXXXXXX </p>
	                        </div>
	                       
	                        <div class="content_img">
                            	<ul class="ul_content_imgs">
                                	<li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                    <li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                </ul>
                            </div>
	                        <div class="messageFooter clear">
	                        	<div class="delMessage clear">
                                	<a href="javascript:"><i class="ico_del"></i>删除</a>
                            	</div>
	                            <div class="like clear">
	                                <a href="javascript:"><i class="isLike notLike"></i></a>
	                                <span>(XX)</span>
	                            </div>
	                            <div class="comment">
	                                	<a href="javascript:"><span>评论</span></a>
	                                	<span class="commentNum">(XX)</span>
                               	</div> 
	                        </div>
	                        <div  class="comment_input grad">
                                <div class="noComment">正在加载...</div>
                                <div class="commList">
                                	<ul>
                                    	
                                    </ul>
                                    <p class="writeCommBtn"><a href="javascript:">我也说一句</a></p>
                                </div>
                                <div class="commTextArea clear">
                                    <textarea  class="textArea" placeholder="说点什么!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
                                    <input class="update_comment" type="hidden"/>
                                    <span class="redTip">(请文明评论)</span>
                                    <a class="btnCommSub" href="javascript:">评论</a>
                                </div>
                            </div>
	                    </li>
	                    <li>
	                        <div class="messageHeader clear">
	                            <div class="user_info">
	                                <p class="user_name"><a href="#">XXXX</a>：</p>
	                                <time>X月X日 X</time>
	                            </div>
	                            <div class="floor">
	                                <span>X</span>楼
	                            </div>
	                        </div>
	                        <div class="messageContent">
	                            <p> XXXXXXXXXXXXXXXXX </p>
	                        </div>
	                        <div class="content_img">
                            	<ul class="ul_content_imgs">
                                	<li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                    <li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                </ul>
                            </div>
	                        <div class="messageFooter clear">
	                        	<div class="delMessage clear">
                                	<a href="javascript:"><i class="ico_del"></i>删除</a>
                            	</div>
	                            <div class="like clear">
	                                <a href="javascript:"><i class="isLike notLike"></i></a>
	                                <span>(XX)</span>
	                            </div>
	                            <div class="comment">
	                                	<a href="javascript:"><span>评论</span></a>
	                                	<span class="commentNum">(XX)</span>
                               	</div>
	                        </div>
	                        <div  class="comment_input grad">
                                <div class="noComment">正在加载...</div>
                                <div class="commList">
                                	<ul>
                                    	
                                    </ul>
                                    <p class="writeCommBtn"><a href="javascript:">我也说一句</a></p>
                                </div>
                                <div class="commTextArea clear">
                                    <textarea  class="textArea" placeholder="说点什么!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
                                    <input class="update_comment" type="hidden"/>
                                    <span class="redTip">(请文明评论)</span>
                                    <a class="btnCommSub" href="javascript:">评论</a>
                                </div>
                            </div>
	                    </li>
	                    <li>
	                        <div class="messageHeader clear">
	                            <div class="user_info">
	                                <p class="user_name"><a href="#">XXXX</a>：</p>
	                                <time>X月X日 X</time>
	                            </div>
	                            <div class="floor">
	                                <span>X</span>楼
	                            </div>
	                        </div>
	                        <div class="messageContent">
	                            <p> XXXXXXXXXXXXXXXXX </p>
	                        </div>
	                        <div class="content_img">
                            	<ul class="ul_content_imgs">
                                	<li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                    <li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                </ul>
                            </div>
	                        <div class="messageFooter clear">
	                        	<div class="delMessage clear">
                                	<a href="javascript:"><i class="ico_del"></i>删除</a>
                            	</div>
	                            <div class="like clear">
	                                <a href="javascript:"><i class="isLike notLike"></i></a>
	                                <span>(XX)</span>
	                            </div>
	                            <div class="comment">
	                                	<a href="javascript:"><span>评论</span></a>
	                                	<span class="commentNum">(XX)</span>
                               	</div>
	                        </div>
	                        <div  class="comment_input grad">
                                <div class="noComment">正在加载...</div>
                                <div class="commList">
                                	<ul>
                                    	
                                    </ul>
                                    <p class="writeCommBtn"><a href="javascript:">我也说一句</a></p>
                                </div>
                                <div class="commTextArea clear">
                                    <textarea  class="textArea" placeholder="说点什么!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
                                    <input class="update_comment" type="hidden"/>
                                    <span class="redTip">(请文明评论)</span>
                                    <a class="btnCommSub" href="javascript:">评论</a>
                                </div>
                            </div>
	                    </li>
	                    <li>
	                        <div class="messageHeader clear">
	                            <div class="user_info">
	                                <p class="user_name"><a href="#">XXXX</a>：</p>
	                                <time>X月X日 X</time>
	                            </div>
	                            <div class="floor">
	                                <span>X</span>楼
	                            </div>
	                        </div>
	                        <div class="messageContent">
	                            <p> XXXXXXXXXXXXXXXXX </p>
	                        </div>
	                        <div class="content_img">
                            	<ul class="ul_content_imgs">
                                	<li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                    <li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                </ul>
                            </div>
	                        <div class="messageFooter clear">
	                        	<div class="delMessage clear">
                                	<a href="javascript:"><i class="ico_del"></i>删除</a>
                            	</div>
	                            <div class="like clear">
	                                <a href="javascript:"><i class="isLike notLike"></i></a>
	                                <span>(XX)</span>
	                            </div>
	                            <div class="comment">
	                                	<a href="javascript:"><span>评论</span></a>
	                                	<span class="commentNum">(XX)</span>
                               	</div>
	                        </div>
	                        <div  class="comment_input grad">
                                <div class="noComment">正在加载...</div>
                                <div class="commList">
                                	<ul>
                                    	
                                    </ul>
                                    <p class="writeCommBtn"><a href="javascript:">我也说一句</a></p>
                                </div>
                                <div class="commTextArea clear">
                                    <textarea  class="textArea" placeholder="说点什么!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
                                    <input class="update_comment" type="hidden"/>
                                    <span class="redTip">(请文明评论)</span>
                                    <a class="btnCommSub" href="javascript:">评论</a>
                                </div>
                            </div>
	                    </li>
	                    <li>
	                        <div class="messageHeader clear">
	                            <div class="user_info">
	                                <p class="user_name"><a href="#">XXXX</a>：</p>
	                                <time>X月X日 X</time>
	                            </div>
	                            <div class="floor">
	                                <span>X</span>楼
	                            </div>
	                        </div>
	                        <div class="messageContent">
	                            <p> XXXXXXXXXXXXXXXXX </p>
	                        </div>
	                        <div class="content_img">
                            	<ul class="ul_content_imgs">
                                	<li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                    <li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                </ul>
                            </div>
	                        <div class="messageFooter clear">
	                        	<div class="delMessage clear">
                                	<a href="javascript:"><i class="ico_del"></i>删除</a>
                            	</div>
	                            <div class="like clear">
	                                <a href="javascript:"><i class="isLike notLike"></i></a>
	                                <span>(XX)</span>
	                            </div>
	                            <div class="comment">
	                                	<a href="javascript:"><span>评论</span></a>
	                                	<span class="commentNum">(XX)</span>
                               	</div>
	                        </div>
	                        <div  class="comment_input grad">
                                <div class="noComment">正在加载...</div>
                                <div class="commList">
                                	<ul>
                                    	
                                    </ul>
                                    <p class="writeCommBtn"><a href="javascript:">我也说一句</a></p>
                                </div>
                                <div class="commTextArea clear">
                                    <textarea  class="textArea" placeholder="说点什么!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
                                    <input class="update_comment" type="hidden"/>
                                    <span class="redTip">(请文明评论)</span>
                                    <a class="btnCommSub" href="javascript:">评论</a>
                                </div>
                            </div>
	                    </li>
	                    <li>
	                        <div class="messageHeader clear">
	                            <div class="user_info">
	                                <p class="user_name"><a href="#">XXXX</a>：</p>
	                                <time>X月X日 X</time>
	                            </div>
	                            <div class="floor">
	                                <span>X</span>楼
	                            </div>
	                        </div>
	                        <div class="messageContent">
	                            <p> XXXXXXXXXXXXXXXXX </p>
	                        </div>
	                        <div class="content_img">
                            	<ul class="ul_content_imgs">
                                	<li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                    <li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                </ul>
                            </div>
	                        <div class="messageFooter clear">
	                        	<div class="delMessage clear">
                                	<a href="javascript:"><i class="ico_del"></i>删除</a>
                            	</div>
	                            <div class="like clear">
	                                <a href="javascript:"><i class="isLike notLike"></i></a>
	                                <span>(XX)</span>
	                            </div>
	                            <div class="comment">
	                                	<a href="javascript:"><span>评论</span></a>
	                                	<span class="commentNum">(XX)</span>
                               	</div>
	                        </div>
	                        <div  class="comment_input grad">
                                <div class="noComment">正在加载...</div>
                                <div class="commList">
                                	<ul>
                                    	
                                    </ul>
                                    <p class="writeCommBtn"><a href="javascript:">我也说一句</a></p>
                                </div>
                                <div class="commTextArea clear">
                                    <textarea  class="textArea" placeholder="说点什么!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
                                    <input class="update_comment" type="hidden"/>
                                    <span class="redTip">(请文明评论)</span>
                                    <a class="btnCommSub" href="javascript:">评论</a>
                                </div>
                            </div>
	                    </li>
	                    <li>
	                        <div class="messageHeader clear">
	                            <div class="user_info">
	                                <p class="user_name"><a href="#">XXXX</a>：</p>
	                                <time>X月X日 X</time>
	                            </div>
	                            <div class="floor">
	                                <span>X</span>楼
	                            </div>
	                        </div>
	                        <div class="messageContent">
	                            <p> XXXXXXXXXXXXXXXXX </p>
	                        </div>
	                        <div class="content_img">
                            	<ul class="ul_content_imgs">
                                	<li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                    <li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                </ul>
                            </div>
	                        <div class="messageFooter clear">
	                        	<div class="delMessage clear">
                                	<a href="javascript:"><i class="ico_del"></i>删除</a>
                            	</div>
	                            <div class="like clear">
	                                <a href="javascript:"><i class="isLike notLike"></i></a>
	                                <span>(XX)</span>
	                            </div>
	                            <div class="comment">
	                                	<a href="javascript:"><span>评论</span></a>
	                                	<span class="commentNum">(XX)</span>
                               	</div>
	                        </div>
	                        <div  class="comment_input grad">
                                <div class="noComment">正在加载...</div>
                                <div class="commList">
                                	<ul>
                                    	
                                    </ul>
                                    <p class="writeCommBtn"><a href="javascript:">我也说一句</a></p>
                                </div>
                                <div class="commTextArea clear">
                                    <textarea  class="textArea" placeholder="说点什么!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
                                    <input class="update_comment" type="hidden"/>
                                    <span class="redTip">(请文明评论)</span>
                                    <a class="btnCommSub" href="javascript:">评论</a>
                                </div>
                            </div>
	                    </li>
	                    <li>
	                        <div class="messageHeader clear">
	                            <div class="user_info">
	                                <p class="user_name"><a href="#">XXXX</a>：</p>
	                                <time>X月X日 X</time>
	                            </div>
	                            <div class="floor">
	                                <span>X</span>楼
	                            </div>
	                        </div>
	                        <div class="messageContent">
	                            <p> XXXXXXXXXXXXXXXXX </p>
	                        </div>
	                        <div class="content_img">
                            	<ul class="ul_content_imgs">
                                	<li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                    <li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                </ul>
                            </div>
	                        <div class="messageFooter clear">
	                        	<div class="delMessage clear">
                                	<a href="javascript:"><i class="ico_del"></i>删除</a>
                            	</div>
	                            <div class="like clear">
	                                <a href="javascript:"><i class="isLike notLike"></i></a>
	                                <span>(XX)</span>
	                            </div>
	                            <div class="comment">
	                                	<a href="javascript:"><span>评论</span></a>
	                                	<span class="commentNum">(XX)</span>
                               	</div>
	                        </div>
	                        <div  class="comment_input grad">
                                <div class="noComment">正在加载...</div>
                                <div class="commList">
                                	<ul>
                                    	
                                    </ul>
                                    <p class="writeCommBtn"><a href="javascript:">我也说一句</a></p>
                                </div>
                                <div class="commTextArea clear">
                                    <textarea  class="textArea" placeholder="说点什么!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
                                    <input class="update_comment" type="hidden"/>
                                    <span class="redTip">(请文明评论)</span>
                                    <a class="btnCommSub" href="javascript:">评论</a>
                                </div>
                            </div>
	                    </li>
	                    <li>
	                        <div class="messageHeader clear">
	                            <div class="user_info">
	                                <p class="user_name"><a href="#">XXXX</a>：</p>
	                                <time>X月X日 X</time>
	                            </div>
	                            <div class="floor">
	                                <span>X</span>楼
	                            </div>
	                        </div>
	                        <div class="messageContent">
	                            <p> XXXXXXXXXXXXXXXXX </p>
	                        </div>
	                        <div class="content_img">
                            	<ul class="ul_content_imgs">
                                	<li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                    <li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                </ul>
                            </div>
	                        <div class="messageFooter clear">
	                        	<div class="delMessage clear">
                                	<a href="javascript:"><i class="ico_del"></i>删除</a>
                            	</div>
	                            <div class="like clear">
	                                <a href="javascript:"><i class="isLike notLike"></i></a>
	                                <span>(XX)</span>
	                            </div>
	                            <div class="comment">
	                                	<a href="javascript:"><span>评论</span></a>
	                                	<span class="commentNum">(XX)</span>
                               	</div>
	                        </div>
	                        <div  class="comment_input grad">
                                <div class="noComment">正在加载...</div>
                                <div class="commList">
                                	<ul>
                                    	
                                    </ul>
                                    <p class="writeCommBtn"><a href="javascript:">我也说一句</a></p>
                                </div>
                                <div class="commTextArea clear">
                                    <textarea  class="textArea" placeholder="说点什么!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
                                    <input class="update_comment" type="hidden"/>
                                    <span class="redTip">(请文明评论)</span>
                                    <a class="btnCommSub" href="javascript:">评论</a>
                                </div>
                            </div>
	                    </li>
	                    <li>
	                        <div class="messageHeader clear">
	                            <div class="user_info">
	                                <p class="user_name"><a href="#">XXXX</a>：</p>
	                                <time>X月X日 X</time>
	                            </div>
	                            <div class="floor">
	                                <span>X</span>楼
	                            </div>
	                        </div>
	                        <div class="messageContent">
	                            <p> XXXXXXXXXXXXXXXXX </p>
	                        </div>
	                        <div class="content_img">
                            	<ul class="ul_content_imgs">
                                	<li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                    <li>
                                    	<img />
                                    </li>
                                    <li>
                                        <img />
                                    </li>
                                </ul>
                            </div>
	                        <div class="messageFooter clear">
	                        	<div class="delMessage clear">
                                	<a href="javascript:"><i class="ico_del"></i>删除</a>
                            	</div>
	                            <div class="like clear">
	                                <a href="javascript:"><i class="isLike notLike"></i></a>
	                                <span>(XX)</span>
	                            </div>
	                            <div class="comment">
	                                	<a href="javascript:"><span>评论</span></a>
	                                	<span class="commentNum">(XX)</span>
                               	</div>
	                        </div>
	                        <div  class="comment_input grad">
                                <div class="noComment">正在加载...</div>
                                <div class="commList">
                                	<ul>
                                    	
                                    </ul>
                                    <p class="writeCommBtn"><a href="javascript:">我也说一句</a></p>
                                </div>
                                <div class="commTextArea clear">
                                    <textarea  class="textArea" placeholder="说点什么!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
                                    <input class="update_comment" type="hidden"/>
                                    <span class="redTip">(请文明评论)</span>
                                    <a class="btnCommSub" href="javascript:">评论</a>
                                </div>
                            </div>
	                    </li>
	                </ul>
                <div class="pages clear" id="pages">
                		<input id="update_index" type="hidden"/>
	                    <span class="jump">转到<input class="input_num" type="number"/>页<input class="input_certain" type="button" value="确定"/> </span>
	                    <a href="javascript:" class="next_page">下一页</a>
	                    <a href="javascript:" class="last_page">尾页</a>
	                    <span class="count">
	                        <a href="javascript:" class="num number_last_page over" >99</a>
	                        <a class="mid_pages" >...</a>
	                        <a value="4" href="javascript:" class="num number_4_page over" >4</a>
	                        <a value="3" href="javascript:" class="num number_3_page over" >3</a>
	                        <a value="2" href="javascript:" class="num number_2_page over" >2</a>
	                        <a value="1" class="num number_1_page active" >1</a>
	                        <a class="front_mid_pages over" >...</a>
	                    </span>
	                    <a class="first_page active">首页</a>
	                    <a class="front_page active">上一页</a>
	                </div>
            </div>
        </div>
    </div>
    <div id="return_top" style="display:none;">
        <a href="javascript:">
        	<i class="ico_top"></i>
        	<span>顶部</span>
        </a>
    </div>
    <div id="footer">
        <p class="copyright">
            Copyright © ZK All Rights Reserved.
        </p>
    </div>
    <script>
    	var uls = document.getElementsByClassName('ul_content_imgs')
    	for(i=0;i<uls.length;i++){
    		var viewer = new Viewer(uls[i],{
    			url: 'data-original',
    			maxZoomRatio:2,
    			title:false,
    			toolbar:false,
    			movable:false
    		});
    	}
    </script>
</body>
</html>