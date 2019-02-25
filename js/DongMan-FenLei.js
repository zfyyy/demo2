window.onload=function(){
				//星期栏目的效果
				//鼠标移入效果
				$(".right li").mouseenter(function(){
					$(this).css({"background":"white","border-bottom":"none","color":"red"}).siblings("li").css({"background":"deepskyblue","color":"white"})
				})
				//鼠标移出效果
				$(".right li").mouseleave(function(){
					$(this).css({"color":"red"}).siblings("li").css({"color":"white"})
				})
				
				//移入周一的效果
				$(".right .right_week_content .zero").mouseenter(function(){
					$(".zero").css({"background":"white"})
					$(".right .dispy0").css({"display":"block"})
					$(".right .prog").css({"display":"block"})
					$(".right .dispy1").css({"display":"none"})
					$(".right .dispy2").css({"display":"none"})
					$(".right .dispy3").css({"display":"none"})
					$(".right .dispy4").css({"display":"none"})
					$(".right .dispy5").css({"display":"none"})
					$(".right .dispy6").css({"display":"none"})
				})
				//移入周二的效果
				$(".right .right_week_content .one").mouseenter(function(){
					$(".right .dispy0").css({"display":"none"})
					$(".right .dispy1").css({"display":"block"})
					$(".right .prog").css({"display":"none"})
					$(".right .dispy2").css({"display":"none"})
					$(".right .dispy3").css({"display":"none"})
					$(".right .dispy4").css({"display":"none"})
					$(".right .dispy5").css({"display":"none"})
					$(".right .dispy6").css({"display":"none"})
				})
				//移入周三的效果
				$(".right .right_week_content .two").mouseenter(function(){
					$(".right .dispy0").css({"display":"none"})
					$(".right .dispy1").css({"display":"none"})
					$(".right .dispy2").css({"display":"block"})
					$(".right .prog").css({"display":"none"})
					$(".right .dispy3").css({"display":"none"})
					$(".right .dispy4").css({"display":"none"})
					$(".right .dispy5").css({"display":"none"})
					$(".right .dispy6").css({"display":"none"})
				})
				//移入周四的效果
				$(".right .right_week_content .three").mouseenter(function(){
					$(".right .dispy0").css({"display":"none"})
					$(".right .dispy1").css({"display":"none"})
					$(".right .dispy2").css({"display":"none"})
					$(".right .dispy3").css({"display":"block"})
					$(".right .prog").css({"display":"none"})
					$(".right .dispy4").css({"display":"none"})
					$(".right .dispy5").css({"display":"none"})
					$(".right .dispy6").css({"display":"none"})
				})
				//移入周五的效果
				$(".right .right_week_content .four").mouseenter(function(){
					$(".right .dispy0").css({"display":"none"})
					$(".right .dispy1").css({"display":"none"})
					$(".right .dispy2").css({"display":"none"})
					$(".right .dispy3").css({"display":"none"})
					$(".right .dispy4").css({"display":"block"})
					$(".right .dispy5").css({"display":"none"})
					$(".right .dispy6").css({"display":"none"})
				})
				//移入周六的效果
				$(".right .right_week_content .five").mouseenter(function(){
					$(".right .dispy0").css({"display":"none"})
					$(".right .dispy1").css({"display":"none"})
					$(".right .dispy2").css({"display":"none"})
					$(".right .dispy3").css({"display":"none"})
					$(".right .dispy4").css({"display":"none"})
					$(".right .dispy5").css({"display":"block"})
					$(".right .prog").css({"display":"none"})
					$(".right .dispy6").css({"display":"none"})
				})
				//移入周日的效果
				$(".right .right_week_content .six").mouseenter(function(){
					$(".right .dispy0").css({"display":"none"})
					$(".right .dispy1").css({"display":"none"})
					$(".right .dispy2").css({"display":"none"})
					$(".right .dispy3").css({"display":"none"})
					$(".right .dispy4").css({"display":"none"})
					$(".right .dispy5").css({"display":"none"})
					$(".right .dispy6").css({"display":"block"})
					$(".right .prog").css({"display":"none"})
				})
				
//					显隐轮播图
				var a=0;
				function run(){
					a++;
					if(a==4){
						a=0;
					}
					//让a号元素显示
					$(".right .carousel #toggle img").eq(a).fadeIn(1000)
					//让c号元素的同级元素隐藏
					$(".right .carousel #toggle img").eq(a).siblings("img").fadeOut(1000)
					$(".right .carousel #toggle span").eq(a).fadeIn(1000)
					$(".right .carousel #toggle span").eq(a).siblings("span").fadeOut(1000)
				}
			time = setInterval(run,3000)
//				显隐轮播图结束
				
//				滑动轮播图
				var b=0
				function run2(){
					b++
					if(b==5){
						$(".run").css({"left":"0px"})
						b=0;
					}
					var left =b*-70;
					$(".right .small_pic .run").animate({"left":left+"px"},500)
				}
				setInterval(run2,2000)
//				滑动轮播图结束
				
				//蓝色进度条
				setInterval(function(){
							$(".right .prog").animate({"width":"289px"},3000)
							$(".right .prog").animate({"width":"0px"},0)
						},3000)
				//蓝色进度条结束
				
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