$(function(){
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
					//window.location.href = "/Result/xiandenglu.html"
					$("#login_btn").html("???")
					return
				}
				else{
					$("#login_btn").attr("state",1)
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
	
	
	var likesArr = [] //存储点赞id
	var next_page = $("#content .pages .next_page")
	var last_page = $("#content .pages .last_page")
	var number_last_page = $("#content .pages .number_last_page")
	var number_4_page = $("#content .pages .number_4_page")
	var number_3_page = $("#content .pages .number_3_page")
	var number_2_page = $("#content .pages .number_2_page")
	var number_1_page = $("#content .pages .number_1_page")
	var first_page = $("#content .pages .first_page")
	var front_page = $("#content .pages .front_page")
	var input_certain = $("#content .pages .input_certain")
	var allBtn=[number_1_page,number_2_page,number_3_page,number_4_page,number_last_page,next_page,last_page,first_page,front_page,input_certain]
	
	//查询登陆者的点赞信息
    $("#update_index").click(function(){
    	setTimeout(function(){
    		initComment(true)//关闭评论
    		setAllnotLike()
    		setLikes(likesArr)
    		},100)
    	})
	var comms = $(".comment_input")
	function initComment(shutdownComm){
		$(".commTextArea").css("display","none")
		$(".noComment").html("正在加载...")
		$(".noComment").css("display","block")
		$(".writeCommBtn").attr("state","")
		$(".writeCommBtn").find("a").html("我也说一句")
		if(shutdownComm){
			comms.css("display","none")
		}
	}
    function queryIsLike(){
        var data = {"action":"queryLikeMessageId"}
		$.ajax({ url:"/ajax/queryLikeMessageId",
			type:"post",
			data: data,
			success:function(data){
				if(data == '0'){
					//alert("错误")
				}
				else{
					likesArr = data.split("-")
					setTimeout(function(){
						setLikes(data)
					},100)
				}
			},
			error:function(xhr){alert(xhr.responseText+"1111111111")},
			dataType: "text"})
    }
	queryIsLike()
    //将字符串转变为点赞ID并比较
    function setLikes(str){
    	var elements = $("#content .leaveMessageContent li")
    	for(i=0;i<likesArr.length;i++){
    		for(j=0;j<elements.length;j++){
    			var messid = likesArr[i]
    			var element = elements.eq(j)
    			var elementId = element.find(".isLike").eq(0).attr("messid")
    			if(messid == elementId){
    				element.find(".isLike").removeClass("notLike")
    			}
    		}
    	}
    }
    //翻页更新赞
    function updateLike(){
    	for(i=0;i<allBtn.length;i++){
    		allBtn[i].click(function(){
    			setTimeout(function(){
    				setAllnotLike()
        			setLikes(likesArr)
    			},100)
    		})
    	}
    }
    updateLike()
  //设置全不赞
    function setAllnotLike(){
    	var elements = $("#content .leaveMessageContent li")
    	for(j=0;j<elements.length;j++){
			elements.find(".isLike").addClass("notLike")
		}
    }
    //点赞按钮功能
    var intervalTime = 5 //点赞按钮间隔时间
    //回调函数
    function callback1(node,tempId){
		if(likesArr.indexOf(tempId) == -1){
			likesArr.push(tempId)
		}
		$(node).removeClass("notLike")
    }
    function callback2(node,tempId){
    	if(likesArr.indexOf(tempId) != -1){
			likesArr.splice(likesArr.indexOf(tempId),1)
		}
		$(node).addClass("notLike")
    }
    //更新点赞数量
    function setLikesCount(node,operate){
    	var a = $(node)
    	var count = parseInt(a.html().replace(/[^0-9]/ig,""))
    	if(operate){
    		count++
    	}else{
    		count--
    	}
    	a.html("("+count+")")
    	
    }
    
    function clickLike(){
    	var elements = $("#content .isLike")
    	elements.click(function(){
    		
    		if(intervalTime!=5){
    			alert("操作太快！！！")
    			return
    		}
    		intervalTime = 0
    		var tempId = $(this).attr("messid")
    		var index = likesArr.indexOf(tempId)
    		
    		if($(this).hasClass("notLike")){
    			
    			passSqlData(tempId,"1",[this,tempId])
    			
    		}else{
    			passSqlData(tempId,"2",[this,tempId])
    		}
    		setTimeout(function(){
    			intervalTime = 5
    		},5000)
    	})
    }
    clickLike()
    //点赞数据传递到数据库
    function passSqlData(messId,state,arr){
        var data = {"action":"passSqlData","id":messId,"state":state}
		$.ajax({ url:"/ajax/passSqlData",
			type:"post",
			data: data,
			success:function(likeState){
				if(likeState == '0' || likeState==''){
					alert("操作失败！")
				}
				else{
					var node = $(arr[0])
					var node2 = node.parent().next()
					var id = arr[1]
					if(state=="1"){
						callback1(node,id)
						setLikesCount(node2,true)
					}else{
						callback2(node,id)
						setLikesCount(node2,false)
					}
					
					
				}
			},
			error:function(xhr){alert(xhr.responseText+"22222222222")},
			dataType: "text"})
    }
	
})

