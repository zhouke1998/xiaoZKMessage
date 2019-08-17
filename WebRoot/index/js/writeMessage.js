$(function(){

	var intervalTime = 5
	//写留言
	//
	var btnSub = $("#btnSub")
	$(btnSub).click(function(){
		var loginState = $("#login_btn").attr("state")
		if(loginState != 1){
    		alert("请先登录！")
    		return false
    	}
		if(intervalTime!=5){
			alert("操作太快！！！")
			return false
		}
		
		var content = $("#messageContent").val()
		var length = content.length
    	if(length<1 || length>999){
    		alert('内容输入错误！')
    		return false
    	}
		writeMessage(content)
		intervalTime = 0
		setTimeout(function(){
    			intervalTime = 5
    	},5000)
    })
    //留言
    function writeMessage(content){
		if(!canSub){
			return	
		}
		var formdata = new FormData();
		formdata.append("content",encodeURIComponent(content))
		if(filesArr!=null && filesArr.length>0){
			for(i=0;i<filesArr.length;i++){
				formdata.append("messImages",filesArr[i])	
			}
		}
		$.ajax({ url:"/ajax/writeMessage",
			type:"post",
			data: formdata,
			cache: false,
			timeout : 15000,
			processData:false,  //tell jQuery not to process the data
            contentType: false,  //tell jQuery not to set contentType
			success:function(state){
				clearAll()
				if(state == "1"){
					alert("留言成功！")
					$("#update_index").click()
					$("#messageContent").val("")
					$(btnSub).attr("Mess1Ok")
				}else{
					alert("留言失败!")
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
	            console.log(textStatus);},
			dataType: "json"})
	}
	
	//*********** 上传图片 ***************//
	
	var filesArr = new Array()
	var canSub = true
	var file_legal = false
	var finish_deal_img = false

	$(".up_img input[name='up_img_message']").on('click',function(){

		if(!canSub){
			return false
		}
		if($(this).attr("active")!="true"){
			clearAll()
			$(this).attr("active","true")
		}else{
			//console.log("图片数量："+filesArr.length)
			if(filesArr.length>=4){
				alert("最多4张图片！")
				return false
			}
		}
	})
	
	$(".up_img input[name='up_img_message']").on('change',function(){

		var file = $(this)[0].files[0]
		if(file==undefined||file==null){
			return false
		}
		file_legal = false
		finish_deal_img = false
		//console.log(file)
		var tipSpan = $(this).parent().next()
		tipSpan.css('display','inline-block')
		canSub = false
		var fileName = file.name
		img = new Image()
		img.onload=function(){

		}
		if(file.size>1024*1024*2){
            getPhotoOrientation(file,fileName,true)
		}else{
            getPhotoOrientation(file,fileName,false)
		}
		//var fatherNode =  $(this).parent().parent().next().find('ul')
		
		
		var finish_up  = setInterval(function(){
			if(file_legal){
				//console.log(filesArr)
				tipSpan.css('display','none')
				//createLi(src,fatherNode)
				//var padding_node = $(fatherNode).find('li').eq(filesArr.length-1)
				//setHeighWidth(src,padding_node,200)
                canSub=true
				clearInterval(finish_up)
			}else if(finish_deal_img){
				//console.log(filesArr)
				canSub=true
				finish_deal_img=false
				clearInterval(finish_up)
				alert("失败！文件过大，请重试！")
				tipSpan.css('display','none')
			}
		},1000)
	})
	
	function getObjectURL(file) {
    	var url = null ; 
		if (window.createObjectURL!=undefined) { // basic
			url = window.createObjectURL(file) ;
		} else if (window.URL!=undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(file) ;
		} else if (window.webkitURL!=undefined) { // webkit or chrome
			url = window.webkitURL.createObjectURL(file) ;
		}
		//window.location.href = url
		return url ;
	}
	
	
	function setHeighWidth(padding_node,w_h,width,height){
		//alert('width:'+width+',height:'+height)
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
	
	function clearAll(){
		$(".up_img .img_preview ul").html("")
		$(".up_img input").attr('active','false')
		$(".up_img>p span").css('display','none')
		filesArr=[]
	}
	//获取orientation
    function getPhotoOrientation(img,name,isCut){
		console.log(img)
        EXIF.getData(img, function () {
            console.log(EXIF.getAllTags(this))
        	orien = EXIF.getTag(this,'Orientation');
            getWidthAndHeight(img,name,isCut,orien)

            //console.log(EXIF.getAllTags(this))
        });
    }


	//创建li
	function createLi(src,width,height){
		var img_pre_ul = $("#img_pre_ul")
        img_pre_ul.append( $('<li><div class="img_mask"><a></a><span>删除图片</span></div><img src="'+src+'"/></li>') )
        var padding_node = $(img_pre_ul).find('li').eq(filesArr.length-1)
        setHeighWidth(padding_node,200,width,height)
	}
	
	$(".up_img .img_preview").on('click','a',function(){
		var liNode = $(this).parent().parent()
		
		var index = $(liNode).prevAll().length
		if(filesArr.length>0){
			filesArr.splice(index,1)
		}
	})
	
	  // 对图片进行压缩
    function rotateAndCut(file ,name , isRotate ,isCut , angle ,width ,height) {

		try {
			var that = file
			var tempFile = null
			var scale =1 //图片裁剪比例
			var newWidth = width
			var newHeight = height
			if(isCut) {
				var scale = 2
				if (newWidth > 4000 || newHeight > 4000) {
					scale = 2.5
				}
				//定义画布的大小，也就是图片压缩之后的像素
				newWidth = Math.round(newWidth / scale)
				newHeight = Math.round(newHeight / scale)
			}
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');

			canvas.width = newWidth;
			canvas.height = newHeight;
			//alert(newWidth+'---'+newHeight)

            //ctx.translate(newHeight, 0)
            if(isRotate){
                ctx.rotate(angle*Math.PI/180);
                if(angle==90){
                    ctx.drawImage(that, 0, -newWidth, newHeight, newWidth);
				}else if(angle==-90){
                    ctx.drawImage(that, -newHeight, 0, newHeight, newWidth);
				}
            }else{
                ctx.drawImage(that, 0, 0, newWidth, newHeight);
			}
			// 图像质量
			quality = 0.8;
			// quality值越小，所绘制出的图像越模糊
			var base64 = canvas.toDataURL('image/jpeg', quality);

			tempFile = dataURLtoFile(base64,name);
			if(tempFile.size>1024*1024*2){
				var base64 = canvas.toDataURL('image/jpeg', 0.8);
				tempFile = dataURLtoFile(base64,name);
				//if(tempFile.size>1024*1024*2){}
				file_legal = false
				finish_deal_img = true

			}else{
                filesArr.push(tempFile)
				src = getObjectURL(tempFile)
                createLi(src,newWidth,newHeight)
				file_legal = true
			}
		}catch(e){  
			console.log("压缩失败!");  
			console.log(e);
			file_legal = false 
			finish_deal_img = true 
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
	function getWidthAndHeight(file,name,isCut,orien){
		var fileReader = new FileReader();
		fileReader.readAsDataURL(file);//根据图片路径读取图片
		fileReader.onload = function(e) {
			var base64 = this.result;
			var img = new Image();
			img.src = base64;
			img.onload = function() {
				width = img.naturalWidth
				height = img.naturalHeight
				console.log(width+'---'+height + "---"+orien)
                if( orien=='6'|| orien=='8' || orien=='3'){//需要旋转
                    if(orien=='6') {
                        rotateAndCut(img, name, true, isCut, 90, height, width)
                    }else if(orien=='8'){
                        rotateAndCut(img, name, true, isCut, -90, height, width)
                    }
                }
                else{//不需要旋转
                    rotateAndCut(img ,name , false ,isCut , 0 ,width ,height)
                }
				delete this
			}
		}
	}
    
})

