$(function(){	
	//获取用户名
	!function getName(){
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
    }()
	
	$('#passChange .reset').click(function () {
        if(confirm('确定重置密码吗？')){
            $('#pass')[0].reset()
        }
    })
	
})

