$(function(){
	
	var comms = $(".comment_input")
	var loginState = 0;
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
	
	$(".comment").click(function(){
		//初始设置
		initComment(false)
		
		$(".commList ul").html("")
		var textArea = $(this).parent().next()
		if(textArea.css("display") == "none"){
			
			var mesId = $(this).prev().find(".isLike").attr("messid")
			comms.css("display","none")
			textArea.css("display","block")
			
			quertComment(mesId,textArea)
			
			
		}else{
			textArea.css("display","none")
			
		}
		
    })
	
	$(".writeCommBtn").click(function(){
		loginState = $("#login_btn").attr("state")
		
		if(loginState != 1){
    		alert("请先登录！")
    		$("#login_btn").click()
			return false
    	}
		var state = $(this).attr("state")
		var textArea = $(this).parent().next()
		if(state == null || state==""){
			textArea.css("display","block")
			$(this).find("a").html("关闭编辑")
			$(this).attr("state","true")	
			textArea.find(".textArea").focus()
		}else{
			$(this).attr("state","")
			$(this).parent().next().css("display","none")
			$(this).find("a").html("我也说一句")
		}	
	})
	
	//加载评论系列
	//请求评论信息
	function quertComment(mesId,textArea){
		var data = {"messId":mesId}
		$.ajax({ 	
			url:"/ajax/comment/query",
			type:"get",
			data: data,
			success:function(json){
				setTimeout(function(){
					successLoadComment(textArea,json) 
					set_login_warp()
				},1000)
			},
			error:function(xhr){
				alert(xhr.responseText+"88888888")
			},
			dataType: "json"
		})
	}
	//加载信息成功
	function successLoadComment(jqObj,json){
		if(json.length == 0){
			jqObj.find('.noComment').html("暂时没有评论!")
			return
		}
		jqObj.find('.noComment').css("display","none")
		loginState = $("#login_btn").attr("state")
		var loadDel = false
		if(loginState != 0){
			loadDel = true
    	}
		for(i=0;i<json.length;i++){
			var li = document.createElement("li")
			var div1 = document.createElement("div")
			var div2 = document.createElement("div")
			var p1 = document.createElement("p")
			var p2 = document.createElement("p")
			var time = document.createElement("time")
			p1.innerHTML = '<a href="/userInfo/'+json[i].userName+'">'+json[i].userName+'</a>:'
			p1.className = "comm_user_name"
			time.innerHTML = json[i].time.substr(0,19)
			div2.innerHTML = '<a href="javascript:"><i class="ico_del"></i>删除</a>'
			var canDel = json[i].canDel=="false"?false:true
			if(canDel && loadDel){
				div2.className = "del clear"
			}else{
				div2.className = "del clear playNo"
			}
			div1.appendChild(p1)
			div1.appendChild(time)
			div1.appendChild(div2)
			div1.className = "comm_user_info"
			p2.className = "aComm"
			p2.innerHTML=json[i].commcontent
			li.appendChild(div1)
			li.appendChild(p2)
			li.setAttribute("commentId",json[i].id)
			jqObj.find("ul")[0].appendChild(li)
		}
		addDeleteEvent()
			
	}
	//评论成功重新加载评论
	$(".update_comment").click(function(){
		initComment(true)
		$(this).parent().parent().parent().find(".comment").click()
	})
	//删除评论
	function addDeleteEvent(){
		$(".del").click(function(){
			loginState = $("#login_btn").attr("state")
		
			if(loginState != 1){
				alert("请先登录！")
				$("#login_btn").click()
				return false
			}
			if(!confirm("确定删除此评论吗？（不可恢复！）")){
				return false;
			}
			var li = $(this).parent().parent()
			//li.addClass("activeDel")
			var commentId = li.attr("commentid")
			delectComment(commentId,li)
			
		})
	}
	//删除评论的Ajax请求
	function delectComment(mesId,li){
		var data = {"id":mesId}
		$.ajax({ url:"/ajax/comment/deleteComment",
			type:"post",
			data: data,
			success:function(state){
				if(state == "1"){
					updateCommentsNum(li.parent().parent().parent().parent().find(".commentNum"))
					alert("删除成功!")
					li.parent().parent().parent().find(".update_comment").click()
					li.remove()
					
				}else{
					alert("删除失败！")
				}
				
			},
			error:function(xhr){
				alert(xhr.responseText+"88888888")
			},
			dataType: "json"})
	}
	
	//设置遮罩层的高度
	function set_login_warp(){
		var body_width = $("body").width()
		var body_height = $("body").height()
		$(".login_wrap").eq(0).width(body_width)
		$(".login_wrap").eq(0).height(body_height)
	}
	
	//更新评论数量
	function updateCommentsNum(commentNumNode){
		var num = parseInt(commentNumNode.html().replace(/[^0-9]/ig,""))-1
		commentNumNode.html("("+num+")")
	}
})

