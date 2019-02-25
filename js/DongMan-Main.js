			window.onload=function(){
				//公告的效果
				var c=0;
				function run(){
				c++;
				//判断
				if(c==6){
					$(".zixun").css({"top":"0px"})
					c=1
				}
				//计算top的值
				var t=c*-40;
				//让.zixun的ul向上运动
				$(".zixun").animate({"top":t+"px"},500);
			}	
				//设置定时器s
				setInterval(run,1000)
			
			
			//动漫之家logo滑动效果
			$(".dmlogo").mouseenter(function(){
				$(".dmlogo").stop().animate({"left":"360px"},200)
			})
			$(".dmlogo").mouseleave(function(){
					$(".dmlogo").stop().animate({"left":"380px"},200)
				})
			
			//导航条效果
			$(".zhongjian .daohang a").mousemove(function(){
				$(this).addClass("organ").siblings("a").removeClass("organ")
			})
			$(".zhongjian .daohang").mouseleave(function(){
				$("a").removeClass("organ")
			})
			
			//中间部分左边图片滑动效果
			var a=0;
		function huadong(){
			if(a==0){
				$("#center .ZuoBian .haizei").animate({"left":"-6530px"},40000);
				a=1;
			}
			if(a==1){
				$("#center .ZuoBian .haizei").delay(2000).animate({"left":"0px"},40000);
				a=0;
			}
		}	
		//定时器
		var time = setInterval(huadong,1000)
		//鼠标点击事件
//			$("#center .ZuoBian").click(function(){
//				$(".haizei").css({"opacity":"1"})
//			})
		//鼠标移入事件
			$("#center .ZuoBian").mouseenter(function(){
				$(".haizei").css({"opacity":"1"})
			})
		//鼠标移出事件
			$("#center .ZuoBian").mouseleave(function(){
				$(".haizei").css({"opacity":"0.4"})
			})
		
			//中间部分右边图片滑动效果
			var b=0;
		function huadongrig(){
			if(b==0){
				$("#center .YouBian .haizeit").animate({"right":"-6530px"},40000);
				b=1;
			}
			if(b==1){
				$("#center .YouBian .haizeit").delay(2000).animate({"right":"0px"},40000);
				b=0;
			}
		}
		setInterval(huadongrig,1000)

		//鼠标点击事件
//		$("#center .YouBian").click(function(){
//				$(".haizeit").css({"opacity":"1"})
//			})
		//鼠标移入事件
			$("#center .YouBian").mouseenter(function(){
				$(".haizeit").css({"opacity":"1"})
			})
		//鼠标移出事件
			
			$("#center .YouBian").mouseleave(function(){
				$(".haizeit").css({"opacity":"0.4"})
			})
			
			
			//中间4张图效果
			//第一张
			$("#center .fangkuai .tupianz").mouseenter(function(){
				$(this).stop().animate({"width":"420px","height":"540"},100).fadeTo(100,0.8)
			})
			$("#center .fangkuai .tupianz").mouseleave(function(){
				$(this).stop().animate({"width":"380px","height":"500"},100).fadeTo(100,1)
			})
			//第二张
			$("#center .fangkuai .tupiano").mouseenter(function(){
				$(this).stop().animate({"width":"400px","height":"442px"},100).fadeTo(100,0.8)
			})
			$("#center .fangkuai .tupiano").mouseleave(function(){
				$(this).stop().animate({"width":"380px","height":"422"},100).fadeTo(100,1)
			})
			//第三张
			$("#center .fangkuai .tupians").mouseenter(function(){
				$(this).stop().animate({"width":"400px","height":"328px"},100).fadeTo(100,0.8)
			})
			$("#center .fangkuai .tupians").mouseleave(function(){
				$(this).stop().animate({"width":"380px","height":"308"},100).fadeTo(100,1)
			})
			//第四张
			$("#center .fangkuai .tupiant").mouseenter(function(){
				$(this).stop().animate({"width":"420px","height":"320px"},100).fadeTo(100,0.8)
			})
			$("#center .fangkuai .tupiant").mouseleave(function(){
				$(this).stop().animate({"width":"400px","height":"300"},100).fadeTo(100,1)
			})
			
			//热门活动图片效果
			$("#bottom .remenhuodong .huodong .f").mouseenter(function(){
				$(this).stop().animate({"width":"460px","height":"321px","top":"-10px","left":"-10px","opacity":"0.8","background":"black"},100)
			})
			$("#bottom .remenhuodong .huodong .f").mouseleave(function(){
				$(this).stop().animate({"width":"440px","height":"301px","top":"0px","left":"0px","opacity":"1"},100)
			})
			
			//返回图标效果
			$(".fix").mouseenter(function(){
				$(".fanhui").addClass(".fixcss").text("TOP")
				
			})
			$(".fix").mouseleave(function(){
				$(".fanhui").text("顶部")
				
			})
			
			//登录注册close效果
			$(".mydenglu").click(function(){
				$("#beijing").slideToggle(1000)
							$(".bottomCont").css({"display":"block"})
							$(".bottomCont2").css({"display":"none"})
						$("#beijing .leftDL").mouseenter(function(){
							$(".leftDL").css({"background":"white"})
							$(".bottomCont").css({"display":"block"})
							$(".rightZC").css({"background":"#DFE6ED"})
							$(".bottomCont2").css({"display":"none"})
				})
						$("#beijing .rightZC").mouseenter(function(){
							$(".rightZC").css({"background":"white"})
							$(".bottomCont2").css({"display":"block"})
							$(".leftDL").css({"background":"#DFE6ED"})
							$(".bottomCont").css({"display":"none"})
							
					})
					$("#beijing .leftDL").css({"background":"white"})
					$("#beijing .rightZC").css({"background":"#DFE6ED"})
			})
			
			$(".myzhuce").click(function(){
				$("#beijing").slideToggle(1000)
							$(".bottomCont2").css({"display":"block"})
							$(".bottomCont").css({"display":"none"})
					$("#beijing .rightZC").mouseenter(function(){
						$(".rightZC").css({"background":"white"})
						$(".bottomCont2").css({"display":"block"})
						$(".leftDL").css({"background":"#DFE6ED"})
						$(".bottomCont").css({"display":"none"})
							
					})
					$("#beijing").css({"display":"block"})
						$("#beijing .leftDL").mouseenter(function(){
							$(".leftDL").css({"background":"white"})
							$(".bottomCont").css({"display":"block"})
							$(".rightZC").css({"background":"#DFE6ED"})
							$(".bottomCont2").css({"display":"none"})
					})
					$("#beijing .rightZC").css({"background":"white"})
					$("#beijing .leftDL").css({"background":"#DFE6ED"})
				})
				
			$(".myclose").click(function(){
					$("#beijing").fadeToggle(500)
			})
	}
