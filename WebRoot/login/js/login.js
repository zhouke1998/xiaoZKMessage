$(function(){

	    //登录按钮
	    $('#sub_login').click(function () {
	        var user_l = $('#user').val().length
	        var pass_l = $('#pass').val().length
	        if(user_l<5 || user_l>10 || pass_l<6 || pass_l>16){
	        	var state = $.cookie("zk1998_state")
	        	if(state!=null){
	        		$('#hidden_sub').click()
	        		return
	        	}
	            alert("账号或密码不符合要求！")
	            return false
	        }else {
	        	savePass_autoLogin()
	        	$('#hidden_sub').click()
	        }
	    })
	    
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
	    		$("#user").val($.cookie("zk1998_user"))
	    		$("#pass").val($.cookie("zk1998_pass"))
	    		$('#auto_login').prop('checked',true)
	    		$('#memory_pass').prop('checked',true)
	    	}else{
	    		return
	    	}
	    	return
	    }
	    savePass_autoLogin2()
})
