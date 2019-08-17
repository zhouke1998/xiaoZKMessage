$(function(){
	$("#answer_input").val("")
	$("#next_step").click(function(){
		var pwd_A = $("#answer_input").val()
		checkPwdManage_A(pwd_A)
	})
	
	$("#pwd_on_off").click(function(){
			if($(this).hasClass("pwd_on_off_active")){
				$(this).removeClass("pwd_on_off_active")
				$("#answer_input").attr('type','password')
			}else{
				$(this).addClass("pwd_on_off_active")
				$("#answer_input").attr('type','text')
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
					$("#login_first").css('display','block')
				}
				else{
					checkHsaPwd()
					$("#login_btn").removeAttr("href")
					$("#login_btn").html(name) 
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
    }
	getName()
	function checkHsaPwd(){
		$.ajax({ url:"/ajax/checkHasPwd",
			type:"post",
			cache: false,
			timeout : 5000,
			success:function(question){
				if(question=="error"){
					alert("服务器繁忙，请稍后再试！")
					window.location.href = "/pwdManage/change_pwdManage_verify"
				}
				arr = question.split("-")
				if(arr[1]=="null"){
					$("#not_set").css('display','block')					
				}else{
					$(".content").css('display','block')
					$("#question_con").html(arr[1])	
				}
				$(".user_id").html(arr[0])
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
    }
	
	function checkPwdManage_A(pwd_A){
		data = {'pwd_A':pwd_A}
		$.ajax({ url:"/ajax/checkPwdManage_A",
			type:"post",
			data:data,
			cache: false,
			timeout : 5000,
			success:function(state){
				if(state=="0"){
					alert("答案错误！")
				}else if(state=="1"){
					alert("答案正确！")
					window.location.href = "/pwdManage/change_pwdManage"	
				}else{
					alert("error 请稍后再试！")	
					window.location.href = "/"
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
	}
	
})

