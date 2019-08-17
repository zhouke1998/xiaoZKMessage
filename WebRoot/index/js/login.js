$(function () {
    
	var userName = null
	var likesArr = [] //存储点赞id
	var next_page = $("#content .pages .next_page")
	var last_page = $("#content .pages .last_page")
	var number_last_page = $("#content .pages .number_last_page")
	var number_4_page = $("#content .pages .number_4_page")
	var number_3_page = $("#content .pages .number_3_page")
	var number_2_page = $("#content .pages .number_2_page")
	var number_1_page = $("#content .pages .number_1_page")
	var first_page = $("#content .pages .first_page")
	var front_page = $("#content .pages .front_page")
	var input_certain = $("#content .pages .input_certain")
	var allBtn=[number_1_page,number_2_page,number_3_page,number_4_page,number_last_page,next_page,last_page,first_page,front_page,input_certain]
	
    //登录弹出框
    var body_width = $("body").width()
    var body_height = $("body").height()

    $(".login_wrap").eq(0).width(body_width)
    $(".login_wrap").eq(0).height(body_height)

    //弹出框居中
    chang_mid()
    $(document).scroll(chang_mid)
    $(window).resize(chang_mid)
    function chang_mid () {
        $("#login").css('left',($("body").width()-$("#login").width())/2)
        $("#login").css('top',($(window).height()-$("#login").height())/2+$(document).scrollTop())
    }

    //点击登录
    $('#login_btn').click(function () {
        $('.login_wrap').css('display','block')
        $("#login").css('display','block')
    })

    //关闭登录框
    $('.shut').eq(0).click(function () {
        $('.login_wrap').css('display','none')
        $("#login").css('display','none')
    })
    //登录成功/失败动画
    function loginSuccess(){
    	$("#success_login").css("display","block")
    	setTimeout(function(){
    		$('.login_wrap').css('display','none')
            $("#login").css('display','none')
            $("#success_login").css("display","none")
            $('#user').val("")
            $('#pass').val("")
    	},2000)
    } 
    function loginFail(){
    	$("#fail_login").css("display","block")
    	setTimeout(function(){
    		$("#fail_login").css("display","none")
    	},2000)
    }
    //登录按钮
    
    $('#sub_login').click(function () {
        var user_l = $('#user').val().length
        var pass_l = $('#pass').val().length
        if(user_l<5 || user_l>10 || pass_l<6 || pass_l>16 ){
        	let state = $.cookie("zk1998_state")
        	if(state!=null){
        		realLogin(1)
        	}
            //$('#hidden_sub').click()
            return false
        }else {
        	realLogin(0)
        }
    }) 
    //登录ajax
    function realLogin(type){
    	console.log(type)
    	var id = $('#user').val()
        var pass_l = type==1?$('#pass').val():$.sha1($('#pass').val())
        
        var data = {"id":id,"password":pass_l}
		$.ajax({ url:"/ajax/login",
			type:"post",
			data: data,
			success:function(state){
				if(state == '0' || state==''){
					$("#login").css('display','block')
					loginFail()
					//$(".login_wrap").css("display","none")
				}
				else{
					loginState = 1
					userName = state
					loginSuccess()
					setTimeout(function(){changeHTML()},2000)
					savePass_autoLogin()
					queryIsLike()
					initComment(true)
				}
			},
			error:function(xhr){
				//alert(xhr.responseText+"5555555")
				},
			dataType: "text"})
    }
    //查询登陆者的点赞信息
    $("#update_index").click(function(){
    	setTimeout(function(){
			initComment(true)//关闭评论
    		setAllnotLike()
    		setLikes(likesArr)
    		},100)
    	})
    function queryIsLike(){
        //var data = {"action":"queryLikeMessageId"}
		$.ajax({ url:"/ajax/queryLikeMessageId",
			type:"post",
			//data: data,
			success:function(data){
				if(data == '0'){
					//alert("错误")
				}
				else{
					likesArr = data.split("-")
					setTimeout(function(){
						setLikes(data)
					},100)
				}
			},
			error:function(xhr){
				//alert(xhr.responseText+"1111111111")
				},
			dataType: "text"})
    }
    //将字符串转变为点赞ID并比较
    function setLikes(str){
    	var elements = $("#content .leaveMessageContent > ul > li")
    	for(i=0;i<likesArr.length;i++){
    		for(j=0;j<elements.length;j++){
    			var messid = likesArr[i]
    			var element = elements.eq(j)
    			var elementId = element.find(".isLike").eq(0).attr("messid")
    			if(messid == elementId){
    				element.find(".isLike").removeClass("notLike")
    			}
    		}
    	}
    }
    //翻页更新赞
    function updateLike(){
    	for(i=0;i<allBtn.length;i++){
    		allBtn[i].click(function(){
    			setTimeout(function(){
    				setAllnotLike()
        			setLikes(likesArr)
    			},100)
    		})
    	}
    }
    updateLike()
    //退出设置全不赞
    function setAllnotLike(){
    	var elements = $("#content .leaveMessageContent > ul > li")
    	for(j=0;j<elements.length;j++){
			elements.find(".isLike").addClass("notLike")
		}
    }
    //点赞按钮功能
    var intervalTime = 5 //点赞按钮间隔时间
    //回调函数
    function callback1(node,tempId){
		if(likesArr.indexOf(tempId) == -1){
			likesArr.push(tempId)
		}
		$(node).removeClass("notLike")
    }
    function callback2(node,tempId){
    	if(likesArr.indexOf(tempId) != -1){
			likesArr.splice(likesArr.indexOf(tempId),1)
		}
		$(node).addClass("notLike")
    }
    //更新点赞数量
    function setLikesCount(node,operate){
    	var a = $(node)
    	var count = parseInt(a.html().replace(/[^0-9]/ig,""))
    	if(operate){
    		count++
    	}else{
    		count--
    	}
    	a.html("("+count+")")
    	
    }
    function clickLike(){
    	var elements = $("#content .isLike")
    	elements.click(function(){
    		
    		if(loginState == 0){return}
    		
    		if(intervalTime!=5){
    			alert("操作太快！！！")
    			return
    		}
    		intervalTime = 0
    		var tempId = $(this).attr("messid")
    		var index = likesArr.indexOf(tempId)
    		
    		if($(this).hasClass("notLike")){
    			
    			passSqlData(tempId,"1",[this,tempId])
    			
    		}else{
    			passSqlData(tempId,"2",[this,tempId])
    		}
    		setTimeout(function(){
    			intervalTime = 5
    		},5000)
    	})
    }
    clickLike()
    //点赞数据传递到数据库
    function passSqlData(messId,state,arr){
        var data = {"id":messId,"state":state}
		$.ajax({ url:"/ajax/passSqlData",
			type:"post",
			data: data,
			success:function(likeState){
				if(likeState == '0' || likeState==''){
					alert("操作失败！")
				}
				else{
					var node = $(arr[0])
					var node2 = node.parent().next()
					var id = arr[1]
					if(state=="1"){
						callback1(node,id)
						setLikesCount(node2,true)
					}else{
						callback2(node,id)
						setLikesCount(node2,false)
					}
					
					
				}
			},
			error:function(xhr){
				//alert(xhr.responseText+"22222222222")
				},
			dataType: "text"})
    }
    //登录成功后改变HTML
    function changeHTML(){
    	$("#login_btn").attr("state",loginState)
    	$("#login_btn").css("display","none")
    	$("#personal_btn").css("display","inline-block")
    	$("#personal_btn").html(userName)
    	//$("#login_btn").attr("href","personalCenter")
    	$("#logout_btn").css("display","inline-block")
    	
    }
    //回车键登录
    $("#form_login").keypress(function(event){
    	
		var keynum = (event.keyCode ? event.keyCode : event.which);
		if(keynum == 13){
			$('#sub_login').click()
			return false
		}
	})
	//登出按钮
	$("#logout_btn").click(function(){
		var firm = confirm("确认退出登录?")
		if(!firm){
			return false
		}
        //var data = {"action":"logout"}
		$.ajax({ url:"/ajax/logout",
			type:"post",
			//data: data,
			success:function(state){
				if(state == '1'){
					loginState = 0
					userName = null
					changeHTML2()
					setAllnotLike()
					$("#write_input").css("display","none")
					
					initComment(true)
					
			    	if($.cookie("zk1998_state") == "1"){
			    		$("#user").val($.cookie("zk1998_user"))
			    		$("#pass").val($.cookie("zk1998_pass"))
			    		$('#memory_pass').prop('checked',true)
			    	}else if($.cookie("zk1998_state") == "2"){
			    		$("#user").val($.cookie("zk1998_user"))
			    		$("#pass").val($.cookie("zk1998_pass"))
			    		$('#memory_pass').prop('checked',true)
			    		$('#auto_login').prop('checked',true)
			    	}
				}
				else{
					alert("退出失败！")
				}
			},
			error:function(xhr){
				//alert(xhr.responseText)
				},
			dataType: "text"})
	})
	//退出登录更改HTML
    function changeHTML2(){
    	$("#login_btn").attr("state",loginState)
    	$("#login_btn").html("请登录")
    	$("#login_btn").css("display","inline-block")
    	$("#personal_btn").css("display","none")
    	//$("#login_btn").attr("href","javascript:")
    	$("#logout_btn").css("display","none")
    }
    //获取登录状态
    var loginState = 0
    
    function getLoginState(){
		$.ajax({ url:"/ajax/getLoginState",
			type:"get",
			cache: false,
			timeout : 3000,
			success:function(json){
				var state = json.state
				var user = json.user
				if(state == '0' || state==''){
					savePass_autoLogin2()
				}
				else{
					queryIsLike()
					loginState = 1
					userName = user
					changeHTML()
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				//alert(XMLHttpRequest.status);
	            // 状态
	            //alert(XMLHttpRequest.readyState);
	            // 错误信息   
	            console.log(textStatus);},
			dataType: "json"})
    }
    getLoginState()
    
    //留言按钮和点赞按钮判断是否登录
    $("#btnWrite").click(function(){
    	if(loginState == 0){
    		alert("请先登录！")
    		$("#login_btn").click()
    	}else{
    		$("#write_input").css("display","block")
    		$("#messageContent").focus()
    	}
    	
    })
    $(".like a").click(function(){
    	if(loginState == 0){
    		alert("请先登录！")
    		$("#login_btn").click()
    	}else{
    		
    	}
    })
	//评论栏初始化
	var comms = $(".comment_input")
	
	function initComment(shutdownComm){
		$(".commTextArea").css("display","none")
		$(".noComment").html("正在加载...")
		$(".noComment").css("display","block")
		$(".writeCommBtn").attr("state","")
		$(".writeCommBtn").find("a").html("我也说一句")
		if(shutdownComm){
			comms.css("display","none")
		}
	}
    
    //保存密码及自动登录
    function savePass_autoLogin(){
    	if($("#auto_login").is(':checked')){
    		$.cookie("zk1998_user",$("#user").val(), { expires: 30 })
    		$.cookie("zk1998_pass",$("#pass").val().length>20?$("#pass").val():$.sha1($("#pass").val()), { expires: 30 })
    		$.cookie("zk1998_state","2", { expires: 7 })
    		return false
    	}else if($("#memory_pass").is(':checked')){
    		$.cookie("zk1998_user",$("#user").val(), { expires: 30 })
    		$.cookie("zk1998_pass",$("#pass").val().length>20?$("#pass").val():$.sha1($("#pass").val()), { expires: 30 })
    		$.cookie("zk1998_state","1", { expires: 30 })
    	}else{
    		$.cookie("zk1998_user",null)
    		$.cookie("zk1998_pass",null)
    		$.cookie("zk1998_state",null)
    	}
    }
    //自动补充密码或者自动登录
    function savePass_autoLogin2(){
    	var state = $.cookie("zk1998_state")
    	if(state == "1"){
    		$("#user").val($.cookie("zk1998_user"))
    		$("#pass").val($.cookie("zk1998_pass"))
    		$('#memory_pass').prop('checked',true)
    	}else if(state == "2"){
    		$(".login_wrap").css("display","block")
    		$("#user").val($.cookie("zk1998_user"))
    		$("#pass").val($.cookie("zk1998_pass"))
    		$('#auto_login').prop('checked',true)
    		$('#memory_pass').prop('checked',true)
    		realLogin(1)
    	}
    	return
    }
    
    
})

