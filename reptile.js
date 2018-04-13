var https = require("https");
var http = require("http");
var qs = require("querystring");
//var $ = require("jquery");



var cc =sendURL('https://www.baidu.com');

function sendURL(url){
	var resdata="";
	https.get(url,function(req,res){
		req.on("data",function(data){
			resdata+=data;
		});
		req.on("end",function(){
			console.info(resdata);
		});
	});
}

