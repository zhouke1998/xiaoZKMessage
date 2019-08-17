window.onload = function () {

    //侧边导航效果
    $("#side_nav label").each(function () {
        $(this).mouseover(function (e) {

            $(this).stop(true)
            $(this).animate({top:'-60px'},300)

        })
    })

    $("#side_nav label").each(function () {
        $(this).mouseout(function (e) {
            $(this).stop(true)
            $(this).animate({top:'0px'},300)
        })

    })

    //导航点击
    var index = 1


    function changeNone() {
        $('#personalMessage').css('display','none')
        $('.hisBoard').css('display','none')
        $('#return_top').css('display','none')
    }

    $('#btn_perMess').click(function () {
        if(index == 1){
            return
        }
        document.title = '小ZK-查看信息'
        changeNone()
        $('#personalMessage').css('display','block')
        index = 1
    })

    $('#btn_hisBoard').click(function () {
        if(index == 2){
            return
        }
        document.title = '小ZK-查看留言'
        changeNone()
        $('#return_top').css('display','block')
        $('.hisBoard').css('display','block')
        index = 2
    })
    
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
}

