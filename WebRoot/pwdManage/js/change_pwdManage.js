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
			changePwdManage(pwd_Q,pwd_A)
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
				}
				else{
					getUserId()
					$("#login_btn").removeAttr("href")
					$("#login_btn").html(name) 
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
    }
	getName()
	
	
	function changePwdManage(pwd_Q,pwd_A){
		data={'pwd_Q':pwd_Q,'pwd_A':pwd_A}
		$.ajax({ url:"/ajax/changePwdManage",
			type:"post",
			cache: false,
			timeout : 5000,
			data:data,
			success:function(state){
				if(state=="error"){
					alert("服务器繁忙，请稍后再试！")
				}else if(state=="1"){
					alert("密码保护修改成功！")
					window.location.href = '/pwdManage/index'
					return
				}else{
					alert("密码保护设置失败！请重试")
				}
				window.location.href = '/pwdManage/change_pwdManage_verify'
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
    }
	
	function getUserId(){
		$.ajax({ url:"/ajax/getUserId",
			type:"get",
			cache: false,
			timeout : 5000,
			success:function(id){
				if(id=="error"){
					alert("服务器繁忙，请稍后再试！")
				}else {
					$(".user_id").html(id)
				}
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

