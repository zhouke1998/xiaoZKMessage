$(function(){
	$("#answer_input").val("")
	$("#next_step").click(function(){
		var answer = $("#answer_input").val()
		if(!RegExp("^[A-Za-z0-9\u4e00-\u9fa5]{2,10}$").test(answer)){
			$("#answer_tips").css('display','block')
			return false
		}else{
			var pwd_Q = $("#question_con").val()
			var pwd_A = $("#answer_input").val()
			setPwdManage(pwd_Q,pwd_A)
		}
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
					window.location.href = "/pwdManage/index"
				}
				arr = question.split("-")
				if(arr[1]=="null"){
					//$("#has_set").css('display','none')
					$(".content").css('display','block')
					
				}else{
					$("#has_set").css('display','block')
				}
				$(".user_id").html(arr[0])
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
    }
	
	function setPwdManage(pwd_Q,pwd_A){
		data={'pwd_Q':pwd_Q,'pwd_A':pwd_A}
		$.ajax({ url:"/ajax/setPwdManage",
			type:"post",
			cache: false,
			timeout : 5000,
			data:data,
			success:function(state){
				if(state=="error"){
					alert("服务器繁忙，请稍后再试！")
				}else if(state=="1"){
					alert("密码保护设置成功！")

				}else{
					alert("密码保护设置失败！请重试")
				}
				window.location.href = "/pwdManage/index"
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
    }
	
	$("#answer_input").keyup(function(e) {
		var answer = $("#answer_input").val()
		if(!RegExp("^[A-Za-z0-9\u4e00-\u9fa5]{2,10}$").test(answer)){
			$("#answer_tips").css('display','block')
		}else{
			$("#answer_tips").css('display','none')
			if (e.which == 13) {
				$("#next_step").click()
				return false;
			}
		}
		
	});
	
})

