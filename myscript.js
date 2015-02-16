/**
 * test string
 **/
var mystring = 'hello world';

/**
 * refresh the receiver
 **/
function reload() {
 location.assign("http://192.168.1.4/Test/myreceiver.html"); 
  location.reload(true);
}

function displayConsole(nShow) {
if(nShow==1)
 document.getElementById("con").setAttribute("style", "display: inline;");
else 
 document.getElementById("con").setAttribute("style", "display: none;");
}

function appendMessage(message) {
  var dw = document.getElementById("con");
  dw.innerHTML += '\n' + message;
  dw.scrollTop = dw.scrollHeight;
}

function getPicURLs() {
$.getJSON('http://www.reddit.com/r/earthporn.json?.jsonp?&limit=20', function(data) {
//	window.ticks=0;
	//appendMessage(window.ticks);
    $.each(data.data.children, function(i,item){
	//<img src="http://192.168.1.4/CastHelloText-chrome-master/smiley.gif"/>
		if(item.data.url.indexOf(".jpg")>0)
		{
	//		var last=ticks;
			document.getElementById("message").innerHTML="</DIV><img src=\""+item.data.url+"\"/><DIV>";
			appendMessage("</DIV><img src=\""+item.data.url+"\"/><DIV>");
		//	while(ticks<last+8){
			//	if(ticks>20)
				//	break;
			//}
		}
		
		//window.messageBus.broadcast('hello');
		appendMessage(item.data.url);
    });
});
}

function tryit() {
appendMessage("in tryit()...");

try { 
getPicURLs();
 //$("p").hide();
//	appendMessage(window.navigator.appName); 
	//appendMessage(window.navigator.appCodeName);
	//appendMessage(window.navigator.platform);
} catch(e) { 
	appendMessage(e.stack) 
}

appendMessage("done");
}


