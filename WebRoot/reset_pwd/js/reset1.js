$(function(){
	
	$("#next_step").click(function(){
		if(check_id()){
			var find_id = $('#input_find_qq').val()
			check_exist2(find_id)
		}
	})
	function check_id(){
		var find_id = $('#input_find_qq').val()
		if(RegExp("^[0-9]{5,10}$").test(find_id)){
			return true
		}else{
			if(find_id!='')
				$("#tipdiv_input_find_qq").css("display","block")
			return false
		}
	}
	//失焦事件
	$("#input_find_qq").blur(function(){
		check_id()
	})
	$("#input_find_qq").focus(function(){
		$("#tipdiv_input_find_qq").css("display","none")
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
	getName()
	function check_exist2(id){
		data = {'id':id}
		$.ajax({ url:"/ajax/check_exist2",
			type:"post",
			data:data,
			cache: true,
			timeout : 5000,
			success:function(state){
				if(state=='2'){
					window.location.href ='/reset_pwd/reset_pwd_verify'
				}else{
					$("#tipdiv_input_find_qq").css("display","block")
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){},
			dataType: "json"})
    }
	
	$("#input_account_form").keypress(function(e) {
  		if (e.which == 13) {
		$("#next_step").click()
   		return false;
  	}
});
	
})

