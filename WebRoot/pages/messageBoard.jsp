﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-cn" />
    <meta name="keywords" content="小ZK留言板"/>
    <meta name="description" content="小ZK留言板,欢迎留言！" />
    <link href="index/css/page_header.css" rel="stylesheet">
    <link href="index/css/board.css" rel="stylesheet">
    <link href="messageBoard/css/messageBoardFoot.css" rel="stylesheet">
    <link href="index/css/viewer.min.css" rel="stylesheet">
    <link href="index/img/ico_img/index.ico" rel="shortcut  icon" type="image/x-icon">
    <script type="text/javascript" src="index/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="index/js/viewer.min.js"></script>
    <script type="text/javascript" src="index/js/exif.js"></script>
    <script type="text/javascript" src="index/js/loadMessage.js"></script>
    <script type="text/javascript" src="index/js/writeMessage.js"></script>
    <script type="text/javascript" src="index/js/writeComment.js"></script>
    <script type="text/javascript" src="index/js/commentEvents.js"></script>
    <script type="text/javascript" src="messageBoard/js/messageBoard.js"></script>
    <script type="text/javascript" src="index/js/return_top.js"></script>
    <script type="text/javascript" src="index/js/up_img.js"></script>

    <title>小ZK-留言板</title>
</head>
<body>
    <div id="header">
        <div class="wrap clear">
            <h1 id="logo"><a href="/"><img src="index/img/logo_img/logo.png"/> </a> </h1>
            <ul class="nav">
                <li><a href="/">首页</a> </li>
                <li style="background-color:#fff;"><a href="">留言板</a> </li>
                <li><a href="personalCenter">个人中心</a> </li>
            </ul>
            <p>
                您好,<a id="login_btn">???</a>
            </p>
        </div>
    </div>

    <div id="content">
    	<div class="contentMargin">
	        <div class="write clear">
	            <div class="clear wrap">
	                <p class="tip">闲来没事就来写个留言吧！</p>
	            </div>
	            <div id="write_input">
	                <textarea id="messageContent" class="textArea" placeholder="开始你的留言!" maxlength="999" wrap="soft" cols="50" rows="20"></textarea>
	                <div id="up_img" class="up_img">
                    	<p>
                        	<a class="up_img_btn" href="javascript:" title="添加图片">
                            	<input type="file" accept="image/gif,image/jpg,image/jpeg,image/png" btn="message" name="up_img_message"/>
                            </a>
                            <span style="display:none">处理中...</span>
                        </p>
                        <div class="img_preview">
                        	<ul id="img_pre_ul">
                            	
                            </ul>
                        </div>
                    </div>
	                <input id="update_index" type="hidden"/>
	                <span class="redTip">(请文明留言)</span>
	                <a id="btnSub" href="javascript:">发表</a>
	            </div>
	        </div>
	        <div class="title leaveMessage">
            <h2><em>NEW MESSAGE</em><span>最新留言</span></h2>
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
    </div>
    <div id="return_top">
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