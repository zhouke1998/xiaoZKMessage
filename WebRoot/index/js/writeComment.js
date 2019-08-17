$(function(){
	var intervalTime = 5
	//写评论
	$(".btnCommSub").click(function(){
		var loginState = $("#login_btn").attr("state")
		if(loginState != 1){
    		alert("请先登录！")
    		return false
    	}
		if(intervalTime!=5){
			alert("操作太快！！！")
			return false
		}
		var updateNoad = $(this).parent().find(".update_comment")//找到当前留言的更新评论按钮
		var content = $(this).parent().find(".textArea").val()
		var length = content.length
    	if(length<1 || length>999){
    		alert('内容输入错误！')
    		return false
    	}
		var messId = $(this).parent().parent().parent().find(".isLike").attr("messid")
		subCommMessage(content,messId,updateNoad)
		intervalTime = 0
		setTimeout(function(){
    			intervalTime = 5
    	},5000)
    })
    //评论
    function subCommMessage(content,messId,updateNoad){
		var formdata = new FormData();
		formdata.append("commcontent",encodeURIComponent(content))
		formdata.append("contentId",messId)
		if(filesArr!=null && filesArr.length>0){
			for(i=0;i<filesArr.length;i++){
				formdata.append("messImages",filesArr[i])	
			}
		}
		$.ajax({ url:"/ajax/comment/writeComment",
			type:"post",
			data: formdata,
			cache: false,
			timeout : 5000,
			processData:false,  //tell jQuery not to process the data
            contentType: false,  //tell jQuery not to set contentType
			success:function(state){
				if(state == "1"){
					updateNoad.click()
					$(".textArea").val("")
					updateCommentsNum(updateNoad)
					alert("评论成功！")
				}else{
					alert("评论失败!")
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
	            console.log(textStatus);},
			dataType: "json"})
	}
	//更新评论数量
	function updateCommentsNum(updateNoad){
		commentNumNode = $(updateNoad).parent().parent().parent().find(".commentNum")
		//alert(commentNumNode.html())
		var num = parseInt(commentNumNode.html().replace(/[^0-9]/ig,""))+1
		commentNumNode.html("("+num+")")
	}
	

    
})

