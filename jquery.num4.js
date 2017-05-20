// JavaScript Document
/*
*功能: jd 数量框
*   日期:
*  作者:v10
*  bug:
*/

$.fn.num=function(){
	return this.each(function(){
		var that=this;
	//$("li").on("beforeselect",function(e){ e.preventDefault();})
	//$("li").on("select",function(e){ e.preventDefault();})
	
	$(that).find("ul li:first-child").click(function(){
		var obox=$(this).parent().parent();
		var oVal=obox.find("input").val()
		oVal++;
		obox.find("ul li:last-child").attr("class","on");
		obox.find("input").val(oVal);
		});
	$(that).find("ul li:last-child").click(function(){	
	   var obox=$(this).parent().parent();
	    var oVal=obox.find("input").val();
		oVal--;		
		if(oVal<=1){
			oVal=1;
			$(this).attr("class","off")
		}
			
		obox.find("input").val(oVal);
		});			
		
		})
	}	
