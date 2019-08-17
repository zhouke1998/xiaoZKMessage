$(function(){
	function foot_Mid () {
        $("#footer").css('left',($("body").width()-$("#footer").width())/2)
    }
    foot_Mid()
    
  //获取用户名
	function getName(){
    	//var data = {"action":"getLoginState"}
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
			error:function(XMLHttpRequest, textStatus, errorThrown){
				alert(XMLHttpRequest.status);
	            // 状态
	            alert(XMLHttpRequest.readyState);
	            // 错误信息   
	            console.log(textStatus);},
			dataType: "json"})
    }
	
	getName()
})

