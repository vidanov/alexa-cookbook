'use strict';
exports.handler  = (event, context, callback) => {
	var https = require('https');
	var options = {
			host: 'api.airtable.com',
			port: 443,
			path: process.env.path,
			method: 'GET',
			 headers:{
					Authorization: ' Bearer ' + process.env.tocken
			 }
	};
	try {
		var req = https.request(options, res => {
		res.setEncoding('utf8');
		var returnData = "";
		
		res.on('data', chunk => {
			returnData = returnData + chunk;
		})
		
		res.on('end', chunk => {
			var wpjson =  JSON.parse(returnData)
			var record=wpjson.records[wpjson.records.length-1].fields
		
			// var record = wpjson.records[Math.floor(Math.random()*wpjson.records.length)].fields // random line
			var mp3 = record.streamUrl 
			if ( mp3===null || mp3==="") { 
			  mp3 = null
			}
			var redirectionUrl = record.redirectionURL	 
			 if ( redirectionUrl===null || redirectionUrl==="") { 
			  redirectionUrl = null
			}
			var currentdate = new Date(); 
			var datetime = currentdate.getFullYear() + "-"  
				+ ((currentdate.getMonth() < 9)?"0":"") + (currentdate.getMonth()+1)  + "-" 
				+ ((currentdate.getDate() < 10)?"0":"") + currentdate.getDate()  + "T" 
				+ ((currentdate.getHours() < 10)?"0":"") + currentdate.getHours() + ":"  
				+ ((currentdate.getMinutes() < 10)?"0":"") + currentdate.getMinutes() + ":" 
				+ ((currentdate.getSeconds() < 10)?"0":"") + currentdate.getSeconds()+".0Z";
			var sendjson ={

					  "uid": 'vd'+record.uid,
					  "updateDate": datetime,
					  "titleText":  record.titleText,
					  "mainText":  record.mainText,
					  "streamUrl":mp3,
					  "redirectionUrl": redirectionUrl  

			}
			const response = {
				statusCode: 200,
				headers: { 'Access-Control-Allow-Origin': '*'},
				body: JSON.stringify(sendjson)
				}
				callback(null, response);
			}
		
		);

  
	  });
	  req.end(); } 
	  catch(e)
		{
			console.log('Exception: '+e);
			callback(false);
		}
}