$( function () {
	//查询总条数
	var totalPage = 0 //总页数
	var totalNum = 0 //总条数
	var nowPage = 1 //当前页 
	var number1_value = 1 //number_1_page的value值
	var isjump = false //是否是跳转
	var next_page = $("#content .pages .next_page")
	var last_page = $("#content .pages .last_page")
	var number_last_page = $("#content .pages .number_last_page")
	var mid_pages = $("#content .pages .mid_pages")
	var number_4_page = $("#content .pages .number_4_page")
	var number_3_page = $("#content .pages .number_3_page")
	var number_2_page = $("#content .pages .number_2_page")
	var number_1_page = $("#content .pages .number_1_page")
	var first_page = $("#content .pages .first_page")
	var front_mid_pages = $("#content .pages .front_mid_pages")
	var front_page = $("#content .pages .front_page")
	var input_certain = $("#content .pages .input_certain")
	var input_num = $("#content .pages .input_num")
	var allBtn=[number_1_page,number_2_page,number_3_page,number_4_page,number_last_page,next_page,last_page,first_page,front_page]
	
	//获取url中的参数
	function getUrlParam() {
        var name = window.location.pathname.substr(10)
        return name
    }
    
    var N = getUrlParam()//访问者名字
	
	//自动滚到留言头部
	function auto_slide(){
		 var time = setInterval(function(){
			 var top = $(document).scrollTop()
			 if(top>200){
				 $(document).scrollTop(top-100)
			 }else{
				 $(document).scrollTop(100)
				 clearInterval(time)
			 }
		 },20)
		 if(isjump){
			 
			 jumpNumberPage()
			 return false
		 }
		 changeNumberPage()
	}
	//跳转具体页面
	function jumpNumberPage(){
		//if(nowPage == 1)
		if(number1_value<=nowPage && nowPage<=number1_value+3){
			allBtn[nowPage-number1_value].click()
		}else if((totalPage-nowPage)<=3){
			number1_value = totalPage-4
			setAllHref()
			delHref([allBtn[nowPage-number1_value]])
			front_mid_pages.removeClass("over")
			mid_pages.addClass("over")
			for(i=0;i<4;i++){
				allBtn[i].attr("value",totalPage-4+i)
				allBtn[i].html(totalPage-4+i)
			}
			isjump = false
		}else if(nowPage<number1_value){
			if(nowPage==2){
				front_mid_pages.addClass("over")
				mid_pages.removeClass("over")
				for(i=0;i<4;i++){
					allBtn[i].attr("value",i+1)
					allBtn[i].html(i+1)
				}
				QueryVisitorPage(2)
				delHref([allBtn[1]])
				number1_value=1
			}else{
				for(i=0;i<4;i++){
					allBtn[i].attr("value",nowPage-1+i)
					allBtn[i].html(nowPage-1+i)
				}
				QueryVisitorPage(nowPage)
				number1_value= nowPage-1
				setAllHref()
				delHref([allBtn[1]])
			}
		}else if(nowPage>parseInt(allBtn[3].attr("value"))){
			front_mid_pages.removeClass("over")
			mid_pages.removeClass("over")
			number1_value = nowPage-1
			for(i=0;i<4;i++){
				allBtn[i].attr("value",nowPage-1+i)
				allBtn[i].html(nowPage-1+i)
			}
			QueryVisitorPage(nowPage)
			setAllHref()
			delHref([allBtn[1]])
		}
		if((totalPage-parseInt(number_4_page.attr("value")))<=1){
			mid_pages.addClass("over")
		}else{
			mid_pages.removeClass("over")
		}
	}
	//数字按钮自动。。。
	function changeNumberPage(){
		if(totalPage<6 ){
			return false;
		}
		
		initPage = parseInt(number_1_page.attr("value"))
		if((nowPage-initPage)>=2 && (totalPage-parseInt(number_4_page.attr("value")))>1 && totalPage>=6){
			if((nowPage-initPage)==3){
				for(i=0;i<4;i++){
					allBtn[i].attr("value",nowPage-2+i)
					allBtn[i].html(nowPage-2+i)
				}
			}else if(nowPage == totalPage){
				for(i=0;i<4;i++){
					allBtn[i].attr("value",totalPage-4+i)
					allBtn[i].html(totalPage-4+i)
				}
				number1_value = parseInt(number_1_page.attr("value"))
				front_mid_pages.removeClass("over")
				mid_pages.addClass("over")
				return false
			}else{
				
				for(i=0;i<4;i++){
					allBtn[i].attr("value",nowPage-1+i)
					allBtn[i].html(nowPage-1+i)
				}
			}
			front_mid_pages.removeClass("over")
			setHref([allBtn[nowPage-initPage]])
			delHref([allBtn[nowPage-initPage-1]])
			number1_value = parseInt(number_1_page.attr("value"))
		}
		
		//首页

		if(nowPage ==1){
	
			for(i=0;i<4;i++){
				allBtn[i].attr("value",i+1)
				allBtn[i].html(i+1)
			}
			//QueryVisitorPage(1)
			setAllHref()
			delHref([first_page,front_page])
			delHref([allBtn[0]])
			front_mid_pages.addClass("over")
			mid_pages.removeClass("over")
			number1_value = 1
			
			return false
		}
		//显示前一个数字页面按钮
		if(nowPage == number1_value && number1_value>1){
			if(nowPage == 2){
				front_mid_pages.addClass("over")
				mid_pages.removeClass("over")
			}
			for(i=0;i<4;i++){
				allBtn[i].attr("value",nowPage+i-1)
				allBtn[i].html(nowPage+i-1)
			}
			//setHref([allBtn[nowPage]])
			delHref([allBtn[1]])
			
			number1_value--
		}
		if((totalPage-parseInt(number_4_page.attr("value")))<=1){
			mid_pages.addClass("over")
		}else{
			mid_pages.removeClass("over")
		}
		
	}
	//判断输入的跳转的数字
	input_num.keyup(function(event){
		var jump_num = parseInt(input_num.val().replace("\.","","g"))
		if(!isNaN(jump_num)){
			if(jump_num<1){
				jump_num = 1
			}else if(jump_num>totalPage){
				jump_num = totalPage
			}
			input_num.val(jump_num)
		}else{
			input_num.val("")
		}
		var keynum = (event.keyCode ? event.keyCode : event.which);
		if(keynum == 13){
			input_certain.click()
		}
		return false
	})
	
	input_certain.click(function(){
		var jump_num = parseInt(input_num.val())
		if(nowPage==jump_num){
			return false
		}
		if(isNaN(jump_num)){
			alert("请正确填写数字！")
		}else if(jump_num<1 || jump_num>totalPage){
			alert("请正确填写页数！")
		}else if(jump_num>=1 && jump_num<=totalPage && totalPage<6){
			allBtn[jump_num-1].click()
		}else if(jump_num == totalPage){
			last_page.click()
		}else if(jump_num == 1){
			first_page.click()
		}else if(totalPage>5){
			nowPage = jump_num
			setAllHref()
			isjump = true
			auto_slide()
			isjump = false
			delHref([allBtn[nowPage-number1_value]])
		}
	})
	
	function delHref(obj){
		for (i=0;i<obj.length;i++){
			$(obj[i]).removeAttr("href")
			$(obj[i]).addClass("active")
		}
	}
	function delAllHref(){
		delHref[allBtn]
	}
	
	function setHref(obj){
		for (each in obj){
			obj[each].attr("href","javascript:")
			obj[each].removeClass("active")
			obj[each].removeClass("over")
		}
	}
	function setAllHref(){
		for (each in allBtn){
			allBtn[each].attr("href","javascript:")
			allBtn[each].removeClass("active")
		}
	}
	
	function setNone(obj){
		for (each in obj){
			obj[each].addClass("over")
		}
	}
	
	function setPages(totalPage){
		if(totalPage > 5){
			number_last_page.html(totalPage)
			number_last_page.attr("value",totalPage)
			setHref([number_2_page,number_3_page,number_4_page,number_last_page])
		}else if(totalPage==2){
			setNone([mid_pages])
			setHref([number_2_page])
		}else if(totalPage==3){
			setNone([mid_pages])
			setHref([number_2_page,number_3_page])
		}else if(totalPage==4){
			setNone([mid_pages])
			setHref([number_2_page,number_3_page,number_4_page])
		} else if(totalPage==5){
			setNone([mid_pages])
			setHref([number_2_page,number_3_page,number_4_page,number_last_page])
			number_last_page.attr("value",totalPage)
			number_last_page.html(5)
		}else if(totalPage==1){
			setNone([mid_pages,$("#content .pages .jump")])
			delHref([next_page,last_page,first_page,front_page])
		}
	}
	
	function QueryVisitorMessageNum(N){
		var data = {"N":N}
		$.ajax({ url:"/ajax/QueryVisitorMessageNum",
			type:"get",
			data: data,
			cache: false, 
			timeout : 50000,
			success:function(total){
				totalNum = total
				totalPage = Math.ceil(total/10)
				setPages(totalPage)
				number_btn()//添加页面按钮事件
				QueryVisitorFirstPage()//查询第一页
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
            console.log(textStatus);},
			dataType: "text"})
	}
	//查询首页
	function QueryVisitorFirstPage(){
		var data = {"N":N}
		$.ajax({ url:"/ajax/QueryVisitorFirstPage",
			type:"get",
			data: data,
			success:function(json){
				$("#content .leaveMessageContent li").css("display","none")
				nowPage = 1
				first_page.click()
				loadMessage(json)
			},
			error:function(xhr){console.log(xhr.responseText+"88888888")},
			dataType: "json"})
	}
	//查询指定页面
	function QueryVisitorPage(pageNum){
		var data = {"N":N,"page":pageNum}
		$.ajax({ url:"/ajax/QueryVisitorPage",
			type:"get",
			data: data,
			success:function(json){
				$("#content .leaveMessageContent li").css("display","none")
				loadMessage(json)
			},
			error:function(xhr){console.log(xhr.responseText+"777777777")},
			dataType: "json"})
	}
	
	setTimeout(QueryVisitorMessageNum(N),100)	
	
	function htmlDecode(str){
        var s = "";
        if(str.length == 0) return "";
        s = str.replace(/\n/g, "<br/>");
        s = s.replace("\\r", "\r");
        return s;
    }
	
	//进入首页，载入内容
	function loadMessage(objs){
		$(".ul_content_imgs li").css("display","none")
		for(i=0;i<objs.length;i++){
			var element = $("#content .leaveMessageContent>ul>li").eq(i)
			$(element).css("display","block")
			var user_name = $(element).find(".user_name a")
			user_name.html(objs[i].username)
			user_name.attr("href","/userInfo/"+objs[i].username)
			$(element).find(".user_info time").html(objs[i].time.substr(0,19))
			$(element).find(".messageContent p").html(htmlDecode(objs[i].content))
			$(element).find(".like span").html('('+objs[i].likeNum+')')
			$(element).find(".isLike").attr("messId",objs[i].messageId)
			var urls = objs[i].img_urls
			if(urls!=null){
				var img_li = $(element).find(".ul_content_imgs img")
				var urlArr = urls.split("-")
				for(j=0;j<urlArr.length;j++){
					temp = $(img_li).eq(j)
					setObjectURL("/contentImg"+urlArr[j],temp)
					temp.parent().css('display','block')	
				}
			}
			$(element).find(".floor span").html((totalNum-10*(nowPage-1))-i)
		}
	}
	//
	function setObjectURL(src,$img) {
		var image = new Image()  
		image.src = src
		image.onload = function(){
			var that = this
			oriWidth = this.width 
			oriHeight = this.height

			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');

			canvas.width = oriWidth;
			canvas.height = oriHeight;
			ctx.drawImage(that, 0, 0, oriWidth, oriHeight);
			var base64 = canvas.toDataURL('image/jpeg'); 
			var file = dataURLtoFile(base64,"1")
			var url = null
			if (window.createObjectURL!=undefined) { // basic
				url = window.createObjectURL(file) ;
			} else if (window.URL!=undefined) { // mozilla(firefox)
				url = window.URL.createObjectURL(file) ;
			} else if (window.webkitURL!=undefined) { // webkit or chrome
				url = window.webkitURL.createObjectURL(file) ;
			}
			$img.attr("src",url)
			setImgsPadding(oriWidth,oriHeight,$img,200)
		}
		
	}
	function dataURLtoFile(dataurl, filename) {
		var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
		while(n--){
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, {type:mime});
	}
	function setImgsPadding(width,height,img_node,w_h){
		img_node.css("width","200px")
		img_node.css("height","200px")
		padding_node = img_node.parent()
		if(height<50 && width<50){
			//alert("图片太小，不能上传！")
		}
		if(width<=w_h && height <=w_h){
			padding_top = (w_h-height)/2+'px'
			padding_left = (w_h-width)/2+'px'
			$(padding_node).find("img").css('height',height)
			$(padding_node).find("img").css('width',width)
			$(padding_node).css({"padding-top":padding_top,"padding-left":padding_left})
		}else if(width>height && width>w_h){
			padding_top = (w_h-height/(width/w_h))/2+'px'
			$(padding_node).find("img").css('height','auto')
			$(padding_node).css({'padding-top':padding_top})
		}else if(width<height && height>200){
			padding_left = (w_h-width/(height/w_h))/2+'px'
			$(padding_node).find("img").css('width','auto')
			$(padding_node).css({'padding-left':padding_left})
		}
	}
	//最后一页按钮
	last_page[0].onclick = function(){number_last_page[0].onclick()}
	number_last_page[0].onclick= function(){
		if(nowPage==totalPage){
			return false
		}
		nowPage = totalPage
		setAllHref()
		QueryVisitorPage(totalPage)
		delHref([last_page,number_last_page,next_page])
		if(totalPage<6){
			delHref([allBtn[totalPage-1]])
		}
		auto_slide()
	}
	//首页按钮
	first_page[0].onclick=function(){
		if(nowPage==1){
			return false
		}
		nowPage = 1
		QueryVisitorPage(1)
		setAllHref()
		delHref([first_page,front_page])
		delHref([allBtn[0]])
		auto_slide()
	}
	//下一页按钮
	next_page.click(function(){
		if(nowPage==totalPage){
			return false
		}
		setAllHref()
		if(number1_value>1){
			delHref([allBtn[nowPage-number1_value+1]])
		}else{
			delHref([allBtn[nowPage]])
		}
		nowPage++
		QueryVisitorPage(nowPage)
		if(totalPage==nowPage){
			delHref([last_page,number_last_page,next_page])
		}
		auto_slide()
	})
	//上一页按钮
	front_page.click(function(){
		if(nowPage==1){
			return false
		}
		setAllHref()
		nowPage--
		QueryVisitorPage(nowPage)
		if(nowPage!=number1_value ||number1_value ==1){
			delHref([allBtn[nowPage-number1_value]])
		}
		if(1==nowPage){
			delHref([first_page,front_page])
		}
		auto_slide()
	})
	//具体页面按钮
	function number_btn(){
		for(i=0;i<4;i++){
			allBtn[i].click(function(){
				temp = parseInt($(this).attr("value"))
				if(temp==nowPage && isjump==false){
					return false
				}
				isjump = false
				if(temp==1){
					first_page[0].onclick()
					nowPage = temp
				}else if(temp==totalPage){
					last_page[0].onclick()
					delHref([allBtn[3]])
					nowPage = temp
				}else{
					nowPage = temp
					setAllHref()
					if(nowPage!=number1_value){
						delHref([allBtn[nowPage-number1_value]])
					}
					QueryVisitorPage(nowPage)
				}
				auto_slide()
			})
		}
	}
	
})

