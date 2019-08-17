$(function () {
	
	
	//删除图片效果
	$(".up_img .img_preview").on('mouseover','li',function(){
		$(this).find('.img_mask').css('display','block')	
	})
	$(".up_img .img_preview").on('mouseout','li',function(){
		$(this).find('.img_mask').css('display','none')	
	})
	
	$(".up_img .img_preview").on('click','a',function(){
		//console.log(filesArr)
		var liNode = $(this).parent().parent()
		
		var index = $(liNode).prevAll().length
		$(liNode).remove()
		//console.log(index)
		//filesArr.splice(index,1)
		//console.log(filesArr)
		
	})

})