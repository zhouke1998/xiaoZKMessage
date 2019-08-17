$(function(){
	$("#check_name").click(function(){
		var user_l = $('#user').val()
        if(checkLength(user_l,10,5) && RegExp("^[a-zA-Z]{1}[0-9a-zA-Z_]{2,}$").test(user_l)){
        	check_exist()
        	return 
        }else {
        	alert("账号不符合规则！")
        }
	})
	
	//检测长度
    function checkLength(str,max,min){
    	var length = str.length
    	if(length<=max && length>=min){
    		return true;
    	}else{
    		return false;
    	}
    }
	
	function check_exist(){
    	var user_l = $('#user').val()
        var data = {"username":user_l}
		$.ajax({ url:"/ajax/check_exist",
			type:"get",
			data: data,
			cache:false,
			success:function(state){
				if(state != '1'){
					alert("此用户名不可用！")
				}
				else{
					alert("此用户名可用！")
				}
			},
			error:function(xhr){alert(xhr.responseText+"5555555")},
			dataType: "text"})
    }
	
	$("#user").keydown(function(){
		setTimeout(function(){
			var user_l = $('#user').val()
			if(! RegExp("^[0-9a-zA-Z_]{1,}$").test(user_l) && checkLength(user_l,10,5)){
				$("#illegal").css("display","block")
			}else{
				$("#illegal").css("display","none")
			}
		},100)
	})
	
})

