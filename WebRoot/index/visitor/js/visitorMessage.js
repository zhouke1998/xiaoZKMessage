$(function(){
	//获取访问者信息
	function getVisitorMessage(name){
    	var data = {"N":name}
		$.ajax({ url:"/ajax/getVisitorMessage",
			type:"get",
			data: data,
			cache: false,
			timeout : 5000,
			traditional: true,
			success:function(message){
				setVisitorMessage(message)
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
			},
			dataType: "json"})
    }
	//getVisitorMessage()
	//设置个人信息HTML
	function setVisitorMessage(message){
		if(message=="") return
		var aSpan = $("#personalMessage .form_group span")
		aSpan[0].innerHTML = message.username
		aSpan[1].innerHTML = message.id
		aSpan[2].innerHTML = message.email
		aSpan[3].innerHTML = message.age
		aSpan[4].innerHTML = message.sex
		aSpan[5].innerHTML = message.hobbies.replace(/-/g, ",").replace("1", "玩游戏").replace("2", "睡觉").replace("3", "唱歌").replace("4", "敲代码")
		
		aSpan[6].innerHTML = message.adress
	}
	
	//获取url中的用户名
    function getUrlParam() {
        var name = window.location.pathname.substr(10)
        return name
    }
    
    function check_exist(N){
        var data = {"username":N}
		$.ajax({ url:"/ajax/check_exist",
			type:"get",
			data: data,
			success:function(state){
				if(state != 2){					
					alert("查无此人！！！")
					window.location.href="/"
				}
				else{
					getVisitorMessage(N)
				}
			},
			error:function(xhr){alert(xhr.responseText+"5555555")},
			dataType: "text"})
    }
    
    var N = getUrlParam();
    if(N == null){
    	window.location.href="/"
    }else{
    	check_exist(N)
    }
})

