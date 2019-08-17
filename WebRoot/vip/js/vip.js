$(function(){
	$("#answer_input").val("")
	$("#next_step").click(function(){
		var answer = $("#answer_input").val()
		if(!RegExp("^[A-Za-z0-9\u4e00-\u9fa5]{2,10}$").test(answer)){
			$("#answer_tips").css('display','block')
			return false
		}else{
			var userId = $("#question_con").val()
			var password = $("#answer_input").val()
			vipService(userId,password)
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
					$("#login_btn").removeAttr("href")
					$("#login_btn").html(name) 
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
    }
	getName()
	
	function vipService(userId,password){
		$.ajax({ url:"/ajax/vipService",
			type:"post",
			cache: false,
			data:{"userId":userId,"password":password},
			timeout : 5000,
			success:function(tips){
				alert(tips)
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

