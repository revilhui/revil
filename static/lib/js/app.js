var App = "app.js";
window._wxReady=false;
//$(document).ready(function(){
//	$.ajaxSetup({cache: false});
//});
var _debug = false;
var allUrl=document.location.href;
if(allUrl.indexOf("truedian.com") >= 0 )
{
	_debug = false;
}else{
	_debug = true;
}

if (_debug)
{
	if(allUrl.indexOf("81851.net") >= 0){
		window.location_href="http://www.81851.net/";
		window.agency_url ="http://mp.weixin.qq.com/s?__biz=MzAxNzI4OTEyMg==&mid=205561259&idx=1&sn=c84af9d25da9a9101b891ba849def03d&scene=1&from=singlemessage&isappinstalled=0#rd";
		window.service_invite_url="http://mp.weixin.qq.com/s?__biz=MzAxNzI4OTEyMg==&mid=208033737&idx=1&sn=cf050cc6ae1696ae32b460999a9f5477#rd";
	}else{
		window.location_href="http://www.szwego.com/";
		window.agency_url ="http://mp.weixin.qq.com/s?__biz=MjM5NjcyNjU0Nw==&mid=203959063&idx=1&sn=1b2949a8acd2d257ab3c6e9150a5b70c#rd";
		window.service_invite_url="http://mp.weixin.qq.com/s?__biz=MjM5NjcyNjU0Nw==&mid=208448925&idx=1&sn=4628741c1c8ea2bdad168f08889c3e56#rd";
	}
}
else
{
	window.location_href="http://www.truedian.com/";
	window.agency_url ="http://mp.weixin.qq.com/s?__biz=MzA5NTkzMTkzMA==&mid=216374272&idx=1&sn=ec7fdf1369a2bbb2630ea41681399158#rd";
	window.service_invite_url="http://mp.weixin.qq.com/s?__biz=MzA5NTkzMTkzMA==&mid=213523931&idx=1&sn=e416793c2b686cf9ff1792a98b82c70a#rd";
}

$("#J_GoTop").click(function() {

	$("html, body").animate({ scrollTop: 0 }, "fast");
});

motify = {
	show:function(text,times) {

		if (!$("body").is(".motify"))
		{
			$("body").append("<div class='motify'><div class='motify-inner'></div></div>")
		}
		$(".motify").css("display","block")
		$(".motify-inner").text(text)
		if(typeof times == "undefined"||times<=0){
			times=2500;
		}
		setTimeout(function() {$(".motify").css("display","none");},times)
	}
}

function getBtnLoadingSrc()
{
	return "data:image/gif;base64,R0lGODlhEAAQAMQRACYmJri4u5CQkKGhoVxcXLq6ugYGBm5ubisrKzY2Nri4uI2NjWpqalhYWJ+fnwAAAP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4NTZDOEExMEMyMjI2ODExODhDNjg0NzQyMTc1OEU5OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RTIzQzY2RUJCMDExMUUxOEM4RkFCQ0U5MUQxQjAzQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RTIzQzY2REJCMDExMUUxOEM4RkFCQ0U5MUQxQjAzQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhCNkM4QTEwQzIyMjY4MTE4OEM2ODQ3NDIxNzU4RTk4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg1NkM4QTEwQzIyMjY4MTE4OEM2ODQ3NDIxNzU4RTk4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQcAEQAsAAAAABAAEAAABU9gJI4RBJGkopAm+Tyiuoqt+MKxSp/Rjcqlkw8V0Y1exGTSwWQSAVBo04mKQpXY0WJBajSSWy6DEfESUGHRWGTWbkdrduMcecPJI68yjgoBACH5BAUHABEALAAAAAAQABAAAAVPYCSOkaKQpOOQJglBorqKrfjCsUqf0Y3KpZMPFdGNXsRkcsFkEh9QaNOJikKV2BGDQQIAkltuoxHxIlBh0Vhk1m5HazbgHHnDySOvMo4KAQAh+QQFBwARACwAAAAAEAAQAAAFT2AkjpHjkOSykCapKKK6iq34wrFKn9GNyqWTDxXRjV7EZJLBZBIhUGjTiYpCldhRo0F6PJJbbiIR8RpQYdFYZNZuR2v24xx5w8kjrzKOCgEAIfkEBQcAEQAsAAAAABAAEAAABU5gJI7RspAkw5Am6Tiiuoqt+MKxSp/Rjcqlkw8V0Y1exGSywWQSFVBo04mKQpXYUSJBgkCSW+7jEfF+SWHRWGTWbkdrtlf0hpNH82QcFQIAIfkEBQcAEQAsAAAAABAAEAAABU9gJI4Rw5Bk05AmuSyiuoqt+MKxSp/Rjcqlkw8V0Y1exGQywWQSHVBo04mKQpXY0eNBUiiSWy4EEvEWUGHRWGTWbkdrtuIcecPJI68yjgoBACH5BAUHABEALAAAAAAQABAAAAVPYCSOUdOQZJKQJskworqKrfjCsUqf0Y3KpZMPFdGNXsRk8sFkEhdQaNOJikKV2BEEQnI4kluuQhHxDlBh0Vhk1m5Ha7bjHHnDySOvMo4KAQAh+QQFBwARACwAAAAAEAAQAAAFT2AkjlGSkOTzkCbZNKK6iq34wrFKn9GNyqWTDxXRjV7EZBLCZBIZUGjTiYpCldhRIEBaLJJbrsMR8QpQYdFYZNZuR2v24hx5w8kjrzKOCgEAIfkEBQcAEQAsAAAAABAAEAAABU9gJI7R85AkBJEmmSSiuoqt+MKxSp/Rjcqlkw8V0Y1exGRSwWQSG1Bo04mKQpXYkcNBYjCSW+5iEfEeUGHRWGTWbkdrNuMcecPJI68yjgoBADs="
}

function getLoadingSrc()
{
	return "data:image/gif;base64,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"
}

function getLoadingImg(txtTmp)
{
	var txt = txtTmp || "正在努力加载";

	return '<div class="loadingImg " align="center"><img src="'+getLoadingSrc()+'" width="109" height="75"><p class="loading-txt font-16" style="color:#999;">'+txt+'</p></div>'
}

loading = {
	is_loading:false,
	text_bak:"",
	btn_obj:null,
	is_btn:false,
	show:function(obj,newTxt) {
		if (this.is_loading)
		{
			return
		}


		this.text_bak = obj.text()
		this.btn_obj = obj;
		this.is_loading = true;

		if (newTxt && newTxt.length > 0)
		{
			this.btn_obj.text(newTxt)
		}

		if (obj.get(0).tagName.toLowerCase() == 'button')
		{
			obj.attr('disabled',"true");
			this.is_btn = true;
		}

		obj.prepend('<img src="'+getBtnLoadingSrc()+'" width="10" height="10">&nbsp;')
	},
	remove:function() {
		$(".loader").remove()
		this.is_loading = false;

		if (this.btn_obj && this.text_bak)
		{
			this.btn_obj.text(this.text_bak)
		}

		if (this.is_btn)
		{
			this.is_btn = false;
			this.btn_obj.removeAttr("disabled");
		}

	}
}

loadingImg = {
	is_loading:false,
	show:function(obj,txtTmp) {
		if (this.is_loading)
		{
			return
		}
		this.is_loading = true;

		txtTmp ? obj.after(getLoadingImg(txtTmp)):obj.after(getLoadingImg());
	},
	remove:function() {
		$(".loadingImg").remove();
		this.is_loading = false;
	}
}

function getNullImg(imgsrc,txtTmp){
	var txt = txtTmp || "您还没有记录哦";
	if(imgsrc){
		return "<div class='nullImg' align='center'><img src='"+imgsrc +"' width=78'height='75'><p style='color:#999;'>"+txt+"</p></div>"
	}else{
		return "<div class='nullImg' align='center'><p style='color:#999;'>"+txt+"</p></div>"
	}

}

nullImg={
	is_null:false,
	show:function(obj,imgsrc,txtTmp){
		if(this.is_null){
			return;
		}
		this.is_null=true;
		imgsrc?obj.after(getNullImg(imgsrc,txtTmp)):obj.after(getNullImg(null,txtTmp));
		//obj.after(getNullImg(imgsrc,txtTmp))
	},
	remove:function(){
		$(".nullImg").remove();
		this.is_null=false;
		return;
	}
};

function getNullButton(imgsrc,txtTmp,href,imgsrc2){
	var txt = txtTmp || "您还没有记录哦";
	var img2=imgsrc2||"img/wu_shai_dan_img_2.png";
	return "<div class='nullButton' align='center'><div style='position: relative'><img src='"+img2+"' width='130' height='50' style='position: absolute; right: 40px; top: -45px;'> <p style='position: absolute; right: 48px;  top: -40px;color: #999'>"
			+txt+"</p> <img src='"+imgsrc+"' width='150' height='150'> <a href='"
			+href+"'><div class='ui-btn ui-btn-danger'>马上去夺宝</div></a> </div> </div>"

}

nullButton={
	is_null:false,
	show:function(obj,imgsrc,txtTmp,href,imgsrc2){
		if(this.is_null){
			return;
		}
		this.is_null=true;
		//imgsrc?obj.after(getNullButton(imgsrc,txtTmp,href)):obj.after(getNullButton(null,txtTmp,href));
		obj.after(getNullButton(imgsrc,txtTmp,href,imgsrc2))
	},
	remove:function(){
		$(".nullButton").remove();
		this.is_null=false;
		return;
	}
};

function getLoadingMark(imgsrc,txtTmp){
	var txt = txtTmp || "正在上传中~";
	if(imgsrc){
		return "<div class='nullImg' align='center'><img src='"+imgsrc +"' width=109' height='75'><p style='color:#999;'>"+txt+"</p></div>"
	}else{
		return "<div class='nullImg' align='center'><img src='"+getBtnLoadingSrc() +"' width=109' height='75'><p style='color:#999;'>"+txt+"</p></div>"
	}

}

loadingMark={
	is_null:false,
	show:function(obj,imgsrc,txtTmp){
		if(this.is_null){
			return;
		}
		this.is_null=true;
		imgsrc?obj.after(getLoadingMark(imgsrc,txtTmp)):obj.after(getLoadingMark(null,txtTmp));
		//obj.after(getNullImg(imgsrc,txtTmp))
	},
	remove:function(){
		$(".nullImg").remove();
		this.is_null=false;
		return;
	}
};



$(".js-anchor-back").click(function(e) {
    //location.replace("")
	//window.history.replaceState(null, null, "");
	$(this).parent().parent().hide();
    window.history.replaceState(null, null, location.href.split("#")[0]);
	// history.go(-1)
	return false
});

$(".js-open-anchor").click(function(e) {
	//window.history.replaceState(null, null, $(this).attr("href"));
    //location.replace($(this).attr("href"))

});

var addEvent = function(elId,listener){
			document.getElementById(elId)
					.addEventListener('click',function(e){
						if(!window.WeixinJSBridge) {
							alert('请确认您是在微信内置浏览器中打开的');
							e.preventDefault();
							return false;
						}
						listener(this,e);
					},false);
		};



function shareFriend(theData,successDo,cancelDo) {
	wx.onMenuShareAppMessage({
    title: theData.title, // 分享标题
    desc: theData.desc, // 分享描述
    link: theData.link, // 分享链接
    imgUrl: theData.cover, // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
        // 用户确认分享后执行的回调函数
        if(successDo){
            successDo();
        }
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
        if(cancelDo){
            cancelDo();
        }
        // alert(JSON.stringify(theData));
        // alert(this.title+"\n"+this.desc+"\n"+this.link+"\n"+this.imgUrl);
        console.log("theData:\n"+theData);
        console.log("wx:\n"+this.title+"\n"+this.desc+"\n"+this.link+"\n"+this.imgUrl);
    }
});

}

function shareTimeline(theData) {
	wx.onMenuShareTimeline({
    title: theData.title, // 分享标题
    desc: theData.desc, // 分享描述
    link: theData.link, // 分享链接
    imgUrl: theData.cover, // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
        // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
        // alert(JSON.stringify(theData));
        // alert(this.title+"\n"+this.desc+"\n"+this.link+"\n"+this.imgUrl);
        console.log("theData:\n"+theData);
        console.log("wx:\n"+this.title+"\n"+this.desc+"\n"+this.link+"\n"+this.imgUrl);
    }
	});
}

function shareQZone(theData){
	wx.onMenuShareQZone({
		title: theData.title, // 分享标题
	    desc: theData.desc, // 分享描述
	    link: theData.link, // 分享链接
	    imgUrl: theData.cover, // 分享图标
	    success: function () { 
	       // 用户确认分享后执行的回调函数
	    },
	    cancel: function () { 
	    	// 用户取消分享后执行的回调函数
	        // alert(JSON.stringify(theData));
	        // alert(this.title+"\n"+this.desc+"\n"+this.link+"\n"+this.imgUrl);
	        console.log("theData:\n"+theData);
	        console.log("wx:\n"+this.title+"\n"+this.desc+"\n"+this.link+"\n"+this.imgUrl);
	    }
	});
}

function shareQQ(theData){
	wx.onMenuShareQQ({
	    title: theData.title, // 分享标题
	    desc: theData.desc, // 分享描述
	    link: theData.link, // 分享链接
	    imgUrl: theData.cover, // 分享图标
	    success: function () { 
	       // 用户确认分享后执行的回调函数
	    },
	    cancel: function () { 
	    	// 用户取消分享后执行的回调函数
	        // alert(JSON.stringify(theData));
	        // alert(this.title+"\n"+this.desc+"\n"+this.link+"\n"+this.imgUrl);
	        console.log("theData:\n"+theData);
	        console.log("wx:\n"+this.title+"\n"+this.desc+"\n"+this.link+"\n"+this.imgUrl);
	    }
	});
}

function shareWeibo(theData){
	wx.onMenuShareWeibo({
		title: theData.title, // 分享标题
	    desc: theData.desc, // 分享描述
	    link: theData.link, // 分享链接
	    imgUrl: theData.cover, // 分享图标
	    success: function () { 
	       // 用户确认分享后执行的回调函数
	    },
	    cancel: function () { 
	    	// 用户取消分享后执行的回调函数
	        // alert(JSON.stringify(theData));
	        // alert(this.title+"\n"+this.desc+"\n"+this.link+"\n"+this.imgUrl);
	        console.log("theData:\n"+theData);
	        console.log("wx:\n"+this.title+"\n"+this.desc+"\n"+this.link+"\n"+this.imgUrl);
	    }
	});
}

function chooseOwnImage(callback,pic_num){
	wx.chooseImage({count: pic_num,
		success: function (res) {
			 var localIds = res.localIds;
			 console.log(localIds);
			 console.log(localIds.length);
			 if (callback){
				 callback(localIds);
			 }
		},
		fail: function (res) {
	         alert(JSON.stringify(res));
	         if (callback){
				 callback(null);
			 }
	    }
	});
}

function uploadOwnImage(localId,isShowProgressTips,callback){
	wx.uploadImage({
		localId: localId.toString(), // 需要上传的图片的本地ID,
		isShowProgressTips: isShowProgressTips,
		success: function (res) {
			 var serverId = res.serverId; // 返回图片的服务器端ID
			 console.log(serverId);
			 if (callback){
				 callback(serverId);
			 }
		 },
		 fail: function (res) {
	         alert(JSON.stringify(res));
	         if (callback){
				 callback(null);
			 }
		 }
	});
}

function previewOwnImage(current,urls){
	wx.previewImage({
	    current: current, // 当前显示图片的http链接
	    urls: urls // 需要预览的图片http链接列表
	});
}

function getNetworkType(callback){
	wx.getNetworkType({
		success:function (res) {
	        var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
	        if (callback){
	        	callback(networkType);
	        }
	    },
	    fail:function (res) {
		    alert(JSON.stringify(res));
		    if (callback){
				 callback(null);
			 }
	    }
	});
}

function openLocation(data){
	wx.openLocation({
	    latitude: data.latitude, // 纬度，浮点数，范围为90 ~ -90
	    longitude: data.longitude, // 经度，浮点数，范围为180 ~ -180。
	    name: data.name, // 位置名
	    address: data.address, // 地址详情说明
	    scale: data.scale, // 地图缩放级别,整形值,范围从1~28。默认为最大
	    infoUrl: data.infoUrl // 在查看位置界面底部显示的超链接,可点击跳转
	});
}

function getLocation(type,callback){
	wx.getLocation({
	    type: type, // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
	    success: function (res) {
	        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
	        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
	        var speed = res.speed; // 速度，以米/每秒计
	        var accuracy = res.accuracy; // 位置精度
	        if (callback){
	        	callback(latitude,longitude,speed,accuracy);
	        }
	    },
	    fail:function (res) {
		    alert(JSON.stringify(res));
		    if (callback){
				 callback(null);
			 }
	    }
	});
}

function wxConfig(data)
{
 wx.config({
      debug: data.debug,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: data.jsApiList
  });
}

//var _wxJsDownload = 0;
function initWxJs(shop_id, cur_url, opts)
{
	var _wxJsDownload = 0;
	if(cur_url.indexOf("#")>=0){
		cur_url=cur_url.substring(0,cur_url.indexOf("#"));
	}
	var url=encodeURIComponent(cur_url)
	if (window._wxReady != true){
		$.ajax({
            type:"get",
            url:'/service/jsapi_service.jsp?act=get_config&shop_id='+shop_id+'&url='+url+'',
            success:function(result){
                console.log(result);
                if (result.errcode == 0){
                    wxConfig(result.config);
                    window._wxReady = true;

                    if (window._wxReady){
            			wx.ready(function () {
            				if(opts){
	            				if(opts['type']=="share"){
	            					shareFriend(opts['data'],opts['successDo'],opts['cancelDo']);
	                				shareTimeline(opts['data']);
	                				shareQZone(opts['data']);
	                				shareQQ(opts['data']);
	                				shareWeibo(opts['data']);
	            				} else if(opts['type']=="chooseImage"){
	            					chooseOwnImage(opts['callback'],opts['count']);
	            				} else if(opts['type']=="uploadImage"){
	            					uploadOwnImage(opts['localId'],opts['isShowProgressTips'],opts['callback']);
	            				} else if(opts['type']=="previewImage"){
	            					previewOwnImage(opts['current'],opts['urls']);
	            				} else if(opts['type']=="getNetworkType"){
	            					getNetworkType(opts['callback']);
	            				} else if(opts['type']=="openLocation"){
	            					openLocation(opts['data']);
	            				} else if(opts['type']=="getLocation"){
	            					getLocation(opts['typeOwn'],opts['callback']);
	            				} else if(opts['type']=="shareFriend"){
	            					shareFriend(opts['data'],opts['successDo'],opts['cancelDo']);
	            				} else if(opts['type']=="shareTimeline"){
	            					shareTimeline(opts['data']);
	            				} else if(opts['type']=="shareQZone"){
	            					shareQZone(opts['data']);
	            				} else if(opts['type']=="shareQQ"){
	            					shareQQ(opts['data']);
	            				} else if(opts['type']=="shareWeibo"){
	            					shareWeibo(opts['data']);
	            				} else{
	            					alert("type参数错误~");
	            				}
            				}
            			});
            		}
                }
                _wxJsDownload++;
            },
            error:function(msg){
            	_wxJsDownload++;
            }
        });
	}
	console.log(opts);
}

function wxJsBridgeReady(wxReadyFunc) {
	if (wxReadyFunc && typeof wxReadyFunc == 'function') {

		if (typeof window.WeixinJSBridge == "undefined"){
			if (document.addEventListener) {
				document.addEventListener('WeixinJSBridgeReady', wxReadyFunc, false);
			} else if (document.attachEvent) {
				document.attachEvent('WeixinJSBridgeReady', wxReadyFunc);
				document.attachEvent('onWeixinJSBridgeReady', wxReadyFunc);
			}
		}else{
			wxReadyFunc();
		}
	}
}


_wx = {
	share: function(data,successDo,cancelDo){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "share",data:data,successDo:successDo, cancelDo:cancelDo});
		}
		console.log(window._wxReady);
		if (window._wxReady){
			wx.ready(function () {
				shareFriend(data,successDo,cancelDo);
				shareTimeline(data);
			});
		}
		console.log(data);
	},
	shareFriend:function(data,successDo,cancelDo){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "shareFriend",data:data,successDo:successDo, cancelDo:cancelDo});
		}
		console.log(window._wxReady);
		if (window._wxReady){
			wx.ready(function () {
				shareFriend(data,successDo,cancelDo);
			});
		}
		console.log(data);
	},
	shareTimeline:function(data,successDo,cancelDo){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "shareTimeline",data:data,successDo:successDo, cancelDo:cancelDo});
		}
		console.log(window._wxReady);
		if (window._wxReady){
			wx.ready(function () {
				shareTimeline(data);
			});
		}
		console.log(data);
	},
	shareQZone:function(data,successDo,cancelDo){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "shareQZone",data:data,successDo:successDo, cancelDo:cancelDo});
		}
		console.log(window._wxReady);
		if (window._wxReady){
			wx.ready(function () {
				shareQZone(data);
			});
		}
		console.log(data);
	},
	shareQQ:function(data,successDo,cancelDo){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "shareQQ",data:data,successDo:successDo, cancelDo:cancelDo});
		}
		console.log(window._wxReady);
		if (window._wxReady){
			wx.ready(function () {
				shareQQ(data);
			});
		}
		console.log(data);
	},
	shareWeibo:function(data,successDo,cancelDo){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "shareWeibo",data:data,successDo:successDo, cancelDo:cancelDo});
		}
		console.log(window._wxReady);
		if (window._wxReady){
			wx.ready(function () {
				shareWeibo(data);
			});
		}
		console.log(data);
	},
	chooseImage:function(callback, pic_num){
		var picNum = 9;
		if (pic_num){
			picNum = pic_num;
		}

		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "chooseImage",count:picNum,callback:callback});
		}
		if (window._wxReady){
			wx.ready(function () {
				chooseOwnImage(callback,pic_num);
			});
		}
	},
	uploadImage:function(localId,isShowProgressTips,callback){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "uploadImage",localId:localId,isShowProgressTips:isShowProgressTips,callback:callback});
		}
		if (window._wxReady){
			wx.ready(function () {
				uploadOwnImage(localId,isShowProgressTips,callback);
			});
		}
	},

	previewImage:function(current,urls){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "previewImage",current:current,urls:urls});
		}
		if (window._wxReady){
			wx.ready(function () {
				previewOwnImage(current,urls);
			});
		}
	},

	getNetworkType:function(callback){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "getNetworkType",callback:callback});
		}
		if (window._wxReady){
			wx.ready(function () {
				getNetworkType(callback);
			});
		}
	},

	openLocation:function(data){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "openLocation",data:data});
		}
		if (window._wxReady){
			wx.ready(function () {
				openLocation(data);
			});
		}
	},

	getLocation:function(type,callback){
		if (!window._wxReady){
			initWxJs("", window.location.href,{type: "getLocation",typeOwn:type,callback:callback});
		}
		if (window._wxReady){
			wx.ready(function () {
				getLocation(type,callback);
			});
		}
	},

	hide_option:function hideOptionMenu() {
        WeixinJSBridge.call('hideOptionMenu');
    },
	show_option:function showOptionMenu() {
        WeixinJSBridge.call('showOptionMenu');
    },
	is_wx:function openInWeixin(){
        return /MicroMessenger/i.test(navigator.userAgent);
    }

};

_wxAddress = {
	initWxAddressJs:function(url, code, callback){
		var _wxJsDownload = 0;
		var ready=false;
		if (ready != true){
			$.ajax({
                type:"get",
                url:'/service/jsapi_address.jsp?act=get_address_config&url='+url+'&code='+code,
                success:function(result){
                	console.log(result);
    				if (result.errcode == 0){
    					ready=true;
    					if (callback){
    						callback(result.config);
    					}
    				}else if(result.errcode ==800){
    					if (callback){
    						callback(result.config);
    					}
    				}
    				_wxJsDownload++;
                },
                error:function(msg){
                	_wxJsDownload++;
                }
            });
		}
	},

	editAddressWx:function(config,callback){
		var callbackFunction=callback;
		WeixinJSBridge.invoke('editAddress',{
	        "appId" : config.appId,
	        "scope" : config.scope,
	        "signType" :config.signType,
	        "addrSign" :config.addrSign,
	        "timeStamp" :config.timeStamp,
	        "nonceStr" :config.nonceStr
	    },function(res){
	    	if (callbackFunction){
	    		callbackFunction(res);
			}
	    });
	}
};

_async_load = {
// Add a script element as a child of the body


 // Check for browser support of event handling capability
 reg:function(path,loadCb){
	 var path = path;
	 var loadJs =function () {
				 var element = document.createElement("script");
				 element.src = path;
				 document.body.appendChild(element);
				 };

	 if (window.addEventListener)
	 window.addEventListener("load", loadCb, false);
	 else if (window.attachEvent)
	 window.attachEvent("onload", loadCb);
	 else window.onload = loadCb;
 }
}

isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i) ? true : false;
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i) ? true : false;
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
	}
};

function getiOSversion() {
    var match = (navigator.userAgent).match(/OS (\d+)_(\d+)_?(\d+)?/);
    //return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	return match ? parseInt(match[1]) : false;
}

function getAndroidVersion(ua) {
    var ua = ua || navigator.userAgent;
    var match = ua.match(/Android\s([0-9\.]*)/);
    return match ? match[1] : false;
};

function isAndroid44()
{
	var versionStr = getAndroidVersion();
	var version = parseFloat(versionStr);

	if (version == 4.4)
	{
		if (versionStr == '4.4.3')
		{
			return false;
		}

		return true
	}

	return false;
}
if(_debug){
	wxJsBridgeReady(_wx.show_option);
}else{
	wxJsBridgeReady(_wx.hide_option);
}


(function($) {
	var defaults = {
        'prompt': "正在处理..",
		'para':'',
		'validate': function(){
			return true
		}

    };

	$.fn.formSubmit = function(options) {
        var opts = $.extend(defaults, options);

        opts['instance'] = $(this);
		opts['btn_txt'] = $(".js-bt-submit").text()
		opts['ele-id'] = $(this).attr("id");

		$("#"+opts['ele-id']).submit(function(e)
{
	var paraTmp = '';
	if (opts['validate']() == false)
		{
			return false;
		}
	//$(".js-bt-submit").text(opts['prompt'])
	loading.show($(".js-bt-submit"), opts['prompt'])


	console.log($(this).serialize())
	$(".js-bt-submit").attr('disabled',"true");

	if(opts['para'])
	{
		paraTmp = opts['para']();
	}

	$.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize()+paraTmp,
            dataType: 'json',
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log("black.....");
        		console.log(XMLHttpRequest.readyState + XMLHttpRequest.status + XMLHttpRequest.responseText);
				loading.remove()

				$(".js-bt-submit").text("再试一次")
				motify.show("网络请求失败,请稍后重试~")
				$(".js-bt-submit").removeAttr("disabled")

				return false;
    		  },
              success:function(data){
            	  console.log("success black.....");
				  $(".js-bt-submit").removeAttr("disabled")
				  console.log(data)
				  loading.remove()

				  if (data.errcode == "undefined")
				  {
					  motify.show("网络异常,请稍后重试")

					  return false;
				  }

				   if (opts['successDo'])
				  {
					  return opts['successDo'](data);
				  }
				  else if (data.errcode != 0)
				  {

					  motify.show(data.errmsg)
					  return false;
				  }
				  else if (typeof data.url !== "undefined")
				  {
					  window.location.href=data.url
				  }
				  else
				  {
					  if (data.errmsg.length > 0)
					  {
					  	motify.show(data.errmsg)
					  }

					  //$(".js-bt-submit").attr('disabled',"true");
				  }

            }
        });

		return false;
		});
	};
})(jQuery);


(function($) {
	var defaults = {
        'prompt': "正在处理..",
		'para':'',
		'url':'',
		'validate': function(){
			return true
		}

    };

	$.fn.miniSubmit = function(options) {

        var opts = $.extend(defaults, options);
        opts['instance'] = $(this);
		//opts['btn_txt'] = $(".js-bt-submit").text()



{
	if (opts['validate']() == false)
		{
			return false;
		}

	if (opts['btn'])
	{
	//opts['btn'].text(opts['prompt'])
	loading.show(opts['btn'],opts['prompt'])



	console.log($(this).serialize())
	opts['btn'].attr('disabled',"true");
	}

	if (!opts['url'])
	{
		opts['url'] = $(this).attr('action')
	}
	$.ajaxSetup({cache: false});
	$.ajax({
            type: 'POST',
            url: opts['url'],
            data: $(this).serialize()+opts['para'],
            dataType: 'json',
            cache:false,
			//dataType : "jsonp",
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log("black.....");
				if (opts['errorDo'])
				{
					return opts['errorDo']();
				}

        		console.log(XMLHttpRequest.readyState + XMLHttpRequest.status + XMLHttpRequest.responseText);
				loading.remove()

				if (opts['btn'])
				{
				opts['btn'].text("再试一次")
				motify.show("网络请求失败,请稍后重试~");
				opts['btn'].removeAttr("disabled")
				}

				return false;
    		  },
              success:function(data){
            	  console.log("success black.....");
				  loading.remove()

				  if (opts['btn'])
				  {
				 opts['btn'].removeAttr("disabled")
				  console.log(data)

				  if (data.errcode == "undefined")
				  {
					  motify.show("网络异常,请稍后重试")

					  //opts['btn'].text("再试一次")
					  return false;
				  }
				  }



				   if (opts['successDo'])
				  {
					  return opts['successDo'](data);
				  }
				  else if (data.errcode != 0 && opts['btn'])
				  {

					  motify.show(data.errmsg)
					  //opts['btn'].text("再试一次")
					  return false;
				  }
					else if (opts['btn'])
				  {
					  motify.show(data.errmsg)
					  //opts['btn'].text(opts['btn_txt'])

					  //$(".js-bt-submit").attr('disabled',"true");
				  }

            }
        })

		return false;
		}
	};
})(jQuery);


function is_weixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
 	} else {
		return false;
	}
}

function setUrlParam(url, param, v)
{
 var re = new RegExp("(\\\?|&)" + param + "=([^&]+)(&|$)", "i");
 var m = url.match(re);
 if (m)
 {
  return (url.replace(re, function($0, $1, $2) { return ($0.replace($2, v)); } ));
 }
 else
 {
  if (url.indexOf('?') == -1)
   return (url + '?' + param + '=' + v);
  else
   return (url + '&' + param + '=' + v);
 }
}
function getPar(par){
    //获取当前URL
    var local_url = document.location.href;
    //获取要取得的get参数位置
    var get = local_url.indexOf(par +"=");
    if(get == -1){
        return "";
    }
    //截取字符串
    var get_par = local_url.slice(par.length + get + 1);
    //判断截取后的字符串是否还有其他get参数
    var nextPar = get_par.indexOf("&");
    if(nextPar != -1){
        get_par = get_par.slice(0, nextPar);
    }
    return get_par;
}

function getHeight(item_width, item_height,scale_width)
{
	var wid_tmp
   var hgt_tmp
   if (item_width > scale_width)
   {
	   wid_tmp = scale_width
	   hgt_tmp = (scale_width*item_height)/item_width
   }
   else if (item_width == scale_width)
   {
	   wid_tmp = scale_width
	   hgt_tmp = item_height
   }
   else
   {
	   wid_tmp = item_width
	   hgt_tmp = item_height
   }

   return hgt_tmp;
}
/*
* 倒计时
* timer是有天的倒计时
* timerHour是没有天的倒计时
* timerminute是毫秒级别的倒计时。两位数
*
* */
countDown = {
	timer:function(intDiff, renderFunc, stopCallback) {

        var interval = window.setInterval(function(){
            if(intDiff == 0){
                clearInterval(interval);
                stopCallback && stopCallback();
				return;
            }
            var day=0,
                hour=0,
                minute=0,
                second=0;//时间默认值
            if(intDiff > 0){
                day = Math.floor(intDiff / (60 * 60 * 24));
                hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
			if (hour <= 9) hour = '0' + hour;
			if (day <= 9) day = '0' + day;
            if (renderFunc)
            {
                renderFunc(day, hour, minute, second)
            }
            else
            {
                $('#day_show').html(day);
                $('#hour_show').html('<s id="h"></s>'+hour);
                $('#minute_show').html('<s></s>'+minute);
                $('#second_show').html('<s></s>'+second);
            }
            intDiff--;
            console.log(intDiff);
        }, 1000);
    },
    
	timerHour:function(intDiff, renderFunc, stopCallback,objId) {

        var interval = window.setInterval(function(){
            if(intDiff == 0){
                clearInterval(interval);
                stopCallback && stopCallback(objId);

            }
            var
                hour=0,
                minute=0,
                second=0;//时间默认值
            if(intDiff > 0){
                hour = Math.floor(intDiff / (60 * 60));
                minute = Math.floor(intDiff / 60) - (hour * 60);
                second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
			if (hour <= 9) hour = '0' + hour;
            if (renderFunc)
            {
                renderFunc(hour, minute, second)
            }
            else
            {
                $('#hour_show').html('<s ></s>'+hour);
                $('#minute_show').html('<s></s>'+minute);
                $('#second_show').html('<s></s>'+second);
            }
            intDiff--;
			return;
        }, 1000);
    },

	timerminute:function(intDiff, renderFunc, stopCallback,objId) {

        var interval = window.setInterval(function(){
            if(intDiff == 0){
                clearInterval(interval);
                stopCallback && stopCallback(objId);

            }
            var
                minute=0,
                second=0,
				msecond=0;//时间默认值
            if(intDiff > 0){
				minute = Math.floor(intDiff /(60*100) );
				second = Math.floor(intDiff/100) - (minute * 60);
				msecond = Math.floor(intDiff)-(minute * 60*100)-second*100;
			}
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
			if (msecond <= 9) msecond = '0' + msecond;
            if (renderFunc)
            {
                renderFunc( minute,second,msecond)
            }
            else
            {
                $('#minute_show').html('<s></s>'+minute);
                $('#second_show').html('<s></s>'+second);
                $('#msecond_show').html('<s></s>'+msecond);
            }
            intDiff--;
			return;
		}, 10);
    }


};




(function($) {
    $.fn.longClick = function(callback, timeout) {
        var timer;
        timeout = timeout || 500;
        $(this).mousedown(function() {
            timer = setTimeout(function() { callback(); }, timeout);
            return false;
        });
        $(document).mouseup(function() {
            clearTimeout(timer);
            return false;
        });
    };

})(jQuery);

changeTwoDecimal= function changeTwoDecimal(floatvar)
{
var f_x = parseFloat(floatvar);
if (isNaN(f_x))
{
alert('function:changeTwoDecimal->parameter error');
return false;
}
var f_x = Math.round(floatvar*100)/100;
return f_x;
}

function f_check_number(obj)
{
if (/^d+$/.test(obj.value))
{
return true;
}
else
{

return false;
}
}

window._once_flag = 0;
once = function once_run(){
	if (window._once_flag == 0)
	{
		window._once_flag = 1;
		return 1;
	}

	return 0;
}

function LOG(json) {
	if (_debug) {
		console.log(json);
		alert(JSON.stringify(json));
	}

}

once_reset = function reset(){
	window._once_flag = 0;
}


/**
 * 数组去重
 * @returns {Array}

Array.prototype.distinct = function () {
	var self = this;
	var _a = this.concat().sort();
	_a.sort(function (a, b) {
		if (a == b) {
			var n = self.indexOf(a);
			self.splice(n, 1);
		}
	});
	return self;
}; */

/**
 * 获取数组中指定值的index
 * @param val
 * @returns {number}

Array.prototype.indexOf = function(val){
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
	}
	return -1;
};
 */
/**
 * 删除指定值,只有删除第一个找到的,如需所有需要进行循环查询
 * @param val
 * @returns {boolean}

Array.prototype.remove = function(val){
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
		return true;
	}
	return false;
}; */

//addby 黄旭晖 投票接口 2015-8-10
/*
* options:数据数组，totle：可不填，默认为数据总和；renderFunc：自定义投票模板;callback:回调函数
*
* */
$.fn.create_vote= function(options,totle,renderFunc,callback){
	var settings=options;
	if(totle!=null)
	{
		if(isNaN(totle))
		{
			alert('参数错误');
			return;
		}
	}
	if(typeof(settings)!='object')
	{
		alert('参数错误');
		return;
	}
	var container = jQuery(this);
	container.html('<div id="vote-content"></div>');
	var vote_Count=0;
	if(totle==null||totle=='')
	{//不规定总票数
		for(i=0;i<settings.length;i++)
		{
			vote_Count += parseInt(settings[i].data);
		}
	}
	else
	{//指定了总票数
		vote_Count = parseInt(totle);
	}
	var vote_str="";
	var vote_results=[];
	for(i=0;i<settings.length;i++)
	{
		var vote_result=settings[i].data/vote_Count*100;
		if(parseInt(vote_result)!=vote_result)
		{
			vote_result=vote_result.toFixed(2);
			vote_results[i]=vote_result;
		}
		if (renderFunc)
		{
			vote_str+=renderFunc(settings[i], vote_result);
		}else{
			vote_str +='<dd class="dd"><div class="fl">'+ settings[i].name+'：</div>'
			+ '<div class="outbar"><div class="inbar" style="width:'+vote_result+'%;background:' +settings[i].color+';"></div></div>' +
			' <div class="fl">'+vote_result+'% </div></dd>';
		}
	}
	container.find('#vote-content').html(vote_str);
	//回调函数
	if(callback){
		callback(settings,vote_results,vote_Count);//传回原数据数组 计算后的百分比数组 和总票数
	};
};


var RE_INT_GT0 = /^[1-9]+[0-9]*]*$/; //大于0的整数
var RE_INT_GTE0 = /^[0-9]+[0-9]*]*$/; //大于或等于0的整数
var RE_FLOAT_GTE0 = /^[0-9]\d*(\.\d+)?$/; //>=0的数
var RE_PHONE=/^1[3|4|5|6|7|8|9][0-9]{9}/;
/**
 * 判断是否为数字
 * @param s
 * @param isnullok
 * @param reg　采用上面定义的正则表达
 * @returns {boolean}
 * @constructor
 */
function IsNum(s, isnullok, reg) {
	if (s == null) {
		return false;
	}
	var _s = s.trim();
	if (isnullok && (_s == "")) {
		_s = 0;
	}
	return reg.test(_s);
}


/**
 * 图片上传接口
 * @param btnid
 * @param callback
 * @param qiniuJsSDK 可选参数
 * @returns {*}
 */
function _fileUploadInit(btnid, callback, qiniuJsSDK, multi){
	var _Qiniu = Qiniu;
	if (qiniuJsSDK){
		_Qiniu= qiniuJsSDK;
	}
	var multi_selection = multi?true:false;
	var uploader = _Qiniu.uploader({
		runtimes: 'html5,html4',    //上传模式,依次退化
		browse_button: btnid,       //上传选择的点选按钮，**必需**
		uptoken_url: '/service/get_qiuniu_token.jsp',
		unique_names: true,
		domain: 'http://wg201505.qiniudn.com/',
//        container: 'container',           //上传区域DOM ID，默认是browser_button的父元素，
		max_file_size: '30mb',           //最大文件体积限制
		//flash_swf_url: 'js/plupload/Moxie.swf',  //引入flash,相对路径
		max_retries: 3,                   //上传失败最大重试次数
		dragdrop: true,                   //开启可拖曳上传
		drop_element: 'container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
		chunk_size: '4mb',                //分块上传时，每片的体积
		auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
		multi_selection: multi_selection,
		init: callback
	});
	return uploader;
}

/**
 *
 * @param btnid
 * @param callback   eg: { 'FileUploaded': function (up, file, info) {
 * 							var domain = up.getOption('domain');
 * 							var res = JSON.parse(info);
 * 							var sourceLink = domain + res.key; //获取上传成功后的文件的Url
 * 							var imageInfoObj = Qiniu.imageInfo(res.key);}}
 * @param multi
 * @returns {*}
 */
function fileUploadInit(btnid, callback, multi){
	return _fileUploadInit(btnid, callback, null, multi);
}

function fileUploadMore(btnid, callback, multi){
	var Qiniu2 = new QiniuJsSDK();
	return _fileUploadInit(btnid, callback, Qiniu2, multi);
}






/**
 * 滚动时显示、隐藏元素
 * @param el        选择器
 * @param speed     毫秒
 */
function scrollSlideToggle(el,speed){
    var $el = $(el),
        speed = speed || "fast",
        lastScroll = 0,
        currentScroll = $(window).scrollTop(),
        scrollDiff = 0;
    
    $(window).scroll(function() {
    
        lastScroll = currentScroll;
        currentScroll = $(this).scrollTop();
        scrollDiff = currentScroll - lastScroll;
        
        console.log("scrollDiff: " + scrollDiff);
       
        (scrollDiff > 0) ? $el.slideUp(speed) : $el.slideDown(speed);

    });
}
/**
 * 滚动到某个高度时显示、隐藏元素
 * @param el        选择器
 * @param speed     毫秒
 */
function scrollSlideToggleNum(el,speed,scrllNum){
	var $el = $(el),
			speed = speed || "fast",
			lastScroll = 0,
			currentScroll = $(window).scrollTop(),
			scrollDiff = 0;

	$(window).scroll(function() {

		lastScroll = currentScroll;
		currentScroll = $(this).scrollTop();
		scrollDiff = currentScroll - lastScroll;

		console.log("scrollDiff: " + scrollDiff);

		(currentScroll <scrllNum) ? $el.slideUp(speed) : $el.slideDown(speed);

	});
}

/**
 * hack在微信等webview中无法修改document.title的情况
 * @param title        标题
 */
function setHtmlTitle(title){

    var $body = $('body');
	var $iframe = $('<iframe src="/static/image/icon_up.png" width="0" height="0" frameborder="no" border="0" ></iframe>');
    document.title = title;
    
    $iframe.on('load',function() {
        setTimeout(function() {
            $iframe.off('load').remove();
        }, 0);
    }).appendTo($body);

}



/**
 * 异步获取数据
 * @param url
 * @param data:json對象
 * @param callback
 * @param errorback
 * @param type :默认post.如需更改就加上get
 */

function getAjax(url,data,callback,errorback,type){
	$.ajax({
		type:type||"post",
		dataType: 'json',
		url: url,
		data:JSON.stringify(data),
		cache:false,
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.readyState + XMLHttpRequest.status + XMLHttpRequest.responseText);
			console.log("XMLHttpRequest.responseText=" + XMLHttpRequest.responseText);
			if (textStatus == 'timeout') {
				//处理超时的逻辑
				alert('这会儿有点堵哦，亲稍后再试下~')
			}
			if (errorback) {
				console.log('errorback')
				errorback(XMLHttpRequest.responseText)
			}
			XMLHttpRequest = null;
			return false;
		},
		success: function (data) {
			console.log(JSON.stringify(data));
			if (callback) {
				console.log('callback');
				callback(data)
			}

			data = null;
			return false
		},
		complete: function (jqXHR) {

			jqXHR = null;
			return false
		}

	});
}

/**
 * 异步跨域获取数据
 * @param url
 * @param data
 * @param callback
 * @param errorback
 */
function getAjaxJsonp(url,data,callback,errorback){
	$.ajax({
		type:type||"post",
		dataType: 'jsonp',
		url: url,
		data:JSON.stringify(data),
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.readyState + XMLHttpRequest.status + XMLHttpRequest.responseText);
			console.log("XMLHttpRequest.responseText=" + XMLHttpRequest.responseText);
			if (textStatus == 'timeout'){
				//处理超时的逻辑
				alert('这会儿有点堵哦，亲稍后再试下~')
			}
			if (errorback) {
				console.log('errorback')
				errorback(data)
			}
			XMLHttpRequest = null;
			return false;
		},
		success: function (data) {
			console.log(JSON.stringify(data));
			if (callback) {
				console.log('callback')
				callback(data)
			}

			return false
		},
		complete: function (jqXHR) {

			jqXHR = null;
			return false
		}

	});
}

/*异步上传文件，可跨域，不过服务器得设置允许跨域*/

function getUploadFile(url,data,callback,errorback,type){
	$.ajax({
		type:type||"post",
		url: url,
		data:data,
		contentType: false,
		processData: false,
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.readyState + XMLHttpRequest.status + XMLHttpRequest.responseText);
			console.log("XMLHttpRequest.responseText=" + XMLHttpRequest.responseText);
			if (textStatus == 'timeout') {
				//处理超时的逻辑
				alert('这会儿有点堵哦，亲稍后再试下~')
			}
			if (errorback) {
				console.log('errorback')
				errorback(data)
			}
			XMLHttpRequest = null;
			return false;
		},
		success: function (data) {
			console.log(JSON.stringify(data));
			if (callback) {
				console.log('callback');
				callback(data)
			}

			data = null;
			return false
		},
		complete: function (jqXHR) {

			jqXHR = null;
			return false
		}

	});
}




/*输入框js*/
var duobao_diy_ipt=$(".duobao-diy-ipt");
duobao_diy_ipt.keyup(function(){
	$(this).val()?$(this).siblings('span').addClass('hidden'):$(this).siblings('span').removeClass('hidden');
});

duobao_diy_ipt.siblings('span').bind("click",function(){
	$(this).siblings('input').val($(this).text());
});

duobao_diy_ipt.siblings('img').bind('click',function(){
	location.href="goods_select.html?search="+duobao_diy_ipt.val();
});