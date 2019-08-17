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
        $('#changeMessage').css('display','none')
        $('#passChange').css('display','none')
        $('.myBoard').css('display','none')
        $('#return_top').css('display','none')
    }

    $('#btn_perMess').click(function () {
        if(index == 1){
            return
        }
        document.title = '小ZK留言网-个人中心-个人信息'
        changeNone()
        $('#personalMessage').css('display','block')
        index = 1
    })

    $('#btn_changeMess').click(function () {
        if(index == 2){
            return
        }
        document.title = '小ZK留言网-个人中心-信息修改'
        changeNone()
        $('#changeMessage').css('display','block')
        index = 2
    })

    $('#btn_passChange').click(function () {
        if(index == 3){
            return
        }
        document.title = '小ZK留言网-个人中心-密码修改'
        changeNone()
        $('#passChange').css('display','block')
        index = 3
    })

    $('#btn_myBoard').click(function () {
        if(index == 4){
            return
        }
        document.title = '小ZK留言网-个人中心-我的留言'
        changeNone()
        $('#return_top').css('display','block')
        $('.myBoard').css('display','block')
        index = 4
    })

    $('#passChange .reset').click(function () {
        if(confirm('确定重置密码吗？')){
            $('#pass')[0].reset()
        }
    })
    //删除留言功能
    var intervalTime = 5 //删除按钮间隔时间
    function deleteMessage(messId){
        var data = {"messageId":messId}
		$.ajax({ url:"/ajax/deleteMessage",
			type:"post",
			data: data,
			success:function(state){
				if(state == '0' || state==''){
					alert("操作失败！")
				}
				else{					
					alert("删除成功！")
					$("#update_index").click();
				}
			},
			error:function(xhr){/*alert(xhr.responseText+"22222222222")*/},
			dataType: "text"})
    }
    //点击删除按钮
    function clickLike(){
    	var elements = $("#content .delMessage")
    	elements.click(function(){
    		
    		if(intervalTime!=5){
    			alert("操作太快！！！")
    			return
    		}
    		setTimeout(function(){
    			intervalTime = 5
    		},5000)
    		intervalTime = 0
    		var conf = confirm('确认删除吗？其评论也会删除!(不可恢复)')
    		if(!conf){
    			return;
    		}
    		var messid = $(this).next().find('i').attr('messid')
    		deleteMessage(messid)
    		setTimeout(function(){
    			intervalTime = 5
    		},5000)
    	})
    }
    clickLike()
    
    //提醒设置密保
    $.ajax({ url:"/ajax/remindSetPwdManage",
		type:"get",
		success:function(state){
			if(state == '0'){
				if(confirm("您还未设置密码保护，要去设置吗？")){
					window.location.href = '/pwdManage/index'
				}
			}
		},
		error:function(xhr){/*alert(xhr.responseText+"22222222222")*/},
		dataType: "text"
	})
}

