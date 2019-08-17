$(function () {
		
		/***
        $('#btnWrite').click(function () {
            $('#write_input').css('display', 'block')
        })***/


        //逐渐改变字体颜色
        var colors = ['F00','FF7F00','FF0','0F0','0FF','00F','8B00FF','000']

        var oWel = document.getElementById('welcome')
        var aLi = oWel.getElementsByTagName('span')
        var index = 1;
        function changeColor () {
            for(var i=0;i<aLi.length;i++){
                aLi[i].style.color = '#' + colors[Math.abs(i-index)%8]
            }
            index++;
        }
        setInterval(changeColor,1000)
        $(".card .close").click(function(){
        	if('WebkitAnimation' in document.documentElement.style){
                $(".card").css({"-webkit-animation":"cardOut 1s 1","left":"-400px"})
            }else if('animation' in document.documentElement.style){
                $(".card").css({"animation":"cardOut 1s 1","left":"-400px"})
            }else{
                $(".card").css("animation","none")
            }
        })
        //if( 'MozTransform' in document.documentElement.style || 'WebkitTransform' in
        //        document.documentElement.style || 'OTransform' in document.documentElement.style
        //        || 'msTransform' in document.documentElement.style)
    }
)