$(function () {
    
	function getLoginState(){
    	//var data = {"action":"getLoginState"}
		$.ajax({ url:"/ajax/getLoginState",
			type:"get",
			//data: data,
			cache: false,
			timeout : 5000,
			success:function(json){
				var state = json.state
				if(state == '0' || state==''){
					
				}
				else{
					window.location.href = "/"
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
    getLoginState()
       
})

