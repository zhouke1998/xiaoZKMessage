$(function () {
	var oA = $("#return_top a")
	var oSpan = $("#return_top span")
	var oIco_top = $("#return_top .ico_top")
	oA.mouseover(function(){
		oIco_top.css("display","none")
		oSpan.css("display","block")
	})
	
	oA.mouseout(function(){
		oIco_top.css("display","block")
		oSpan.css("display","none")
	})
	
	oA.click(function(){
		$(document).scrollTop(0)
	})
	
})

