$(function(){
	
	$("#next_step").click(function(){
		var pwd_A = $("#answer_input").val()
		if(pwd_A.length<2 || pwd_A.length>10){
			alert("答案填写错误！")	
		}else{
			checkPwd_A(pwd_A)	
		}
	})
	
	//获取用户名
	function getName(){
		$.ajax({ url:"/ajax/getLoginState",
			type:"get",
			//data: data,
			cache: false,
			timeout : 5000,
			success:function(json){
				var state = json.state
				var name = json.user
				if(state == '0' || state==''){
					
				}
				else{
					$("#login_btn").removeAttr("href")
					$("#login_btn").html(name) 
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
    }
	getPwd_Q()
	function getPwd_Q(){
		$.ajax({ url:"/ajax/getPwd_Q",
			type:"post",
			cache: true,
			timeout : 5000,
			success:function(question){
				//alert(question)
				if(question=="error"){
					alert("服务器繁忙，请稍后再试！")
					window.location.href = "/reset_pwd/input_account"
				}
				getName()
				arr = question.split("-")
				if(arr[1]=="null"){
					$(".content").css('display','none')
					$("#no_find").css('display','inline-block')
					
				}else{
					$("#question_con").html(arr[1])	
				}
				$(".user_id").html(arr[0])
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
	}
	
	function checkPwd_A(pwd_A){
		data = {'pwd_A':pwd_A}
		$.ajax({ url:"/ajax/checkPwd_A",
			type:"post",
			data:data,
			cache: false,
			timeout : 5000,
			success:function(state){
				if(state=="0"){
					alert("答案错误！")
				}else if(state=="1"){
					alert("答案正确！")
					window.location.href = "/reset_pwd/reset_pwd_set_new_pwd"	
				}else{
					alert("error 请稍后再试！")	
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
	}
	$("#pwd_on_off").click(function(){
		if($(this).hasClass("pwd_on_off_active")){
			$(this).removeClass("pwd_on_off_active")
			$("#answer_input").attr('type','password')
		}else{
			$(this).addClass("pwd_on_off_active")
			$("#answer_input").attr('type','text')
			}
	})
})

