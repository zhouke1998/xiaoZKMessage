$(function(){
	//获取用户信息
	function getPersonalMessage(){
    	//var data = {"action":"personalMessage"}
		$.ajax({ url:"/ajax/personalMessage",
			type:"post",
			//data: data,
			cache: false,
			timeout : 5000,
			traditional: true,
			success:function(message){
				setPersonalMessage(message)
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				//alert(XMLHttpRequest.status);
	            // 状态
	            //alert(XMLHttpRequest.readyState);
	            // 错误信息   
	            //console.log(textStatus);
	            },
			dataType: "json"})
    }
	getPersonalMessage()
	//设置个人信息HTML
	function setPersonalMessage(message){
		var aSpan = $("#personalMessage .form_group span")
		aSpan[0].innerHTML = message.username
		aSpan[1].innerHTML = message.id
		aSpan[2].innerHTML = message.email
		aSpan[3].innerHTML = message.age
		aSpan[4].innerHTML = message.sex
		aSpan[5].innerHTML = message.hobbies.replace(/-/g, ",").replace("1", "玩游戏").replace("2", "睡觉").replace("3", "唱歌").replace("4", "敲代码")
		
		aSpan[6].innerHTML = message.adress
	}
})

