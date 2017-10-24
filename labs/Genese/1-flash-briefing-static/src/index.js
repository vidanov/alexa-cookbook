'use strict';

exports.handler = (event, context, callback) => {
const titleText = "Dein täliches Zitat";
		
		var zitates = [
		"Da schied Gott das Licht von der Finsternis und nannte das Licht Tag und die Finsternis Nacht. Da ward aus Abend und Morgen der erste Tag.<break time='200ms'/>  Ein Zitat aus der Bibel für deinen Montag", // Montag
		" Beurteile einen Tag nicht danach, welche Ernte du am Abend eingefahren hast. Sondern danach, welche Samen du gesät hast. <break time='200ms'/>   Ein Zitat von Robert Louis Balfour Stevenson für Dienstag", // Dienstag
		" Gib jedem Tag die Chance, der schönste deines Lebens zu werden.<break time='200ms'/>   Ein Zitat von Mark Twain für Mittwoch ", // Mittwoch
		"Dies ist der Tag, den der Herr macht; lasst uns freuen und fröhlich an ihm sein. <break time='200ms'/> Ein Zitat aus der Bibel für deinen Donnerstag", // Donnerstag
		"Rühme dich nicht des morgigen Tages; denn du weißt nicht, was der Tag bringt.  <break time='200ms'/>   Ein Zitat aus der Bibel für deinen Freitag", // Freitag
		"Ein guter Tag fängt morgens an. <break time='200ms'/>   Ein Deutsches Sprichwort für Samstag ", // Samstag
		"Und also vollendete Gott am siebenten Tage seine Werke, die er machte, und ruhte am siebenten Tage von allen seinen Werken, die er machte. Und Gott segnete den siebenten Tag und heiligte ihn, darum daß er an demselben geruht hatte von allen seinen Werken, die Gott schuf und machte. <break time='200ms'/> Ein Zitat aus der Bibel für deinen Sonntag" // Sonntag
		];

		var currentdate = new Date(); 
        var citateid = 0;
		if (event.queryStringParameters)    {
			 citateid = parseInt(event.queryStringParameters.quoteid) ;
	
		}  else {
			 citateid = currentdate.getDay()-1; 
			 // currentdate.getDay() ist der Tag der Woche; 
			 // 0 - ist für Montag, 1 für Dienstag etc.
		}

		var datetime = currentdate.getFullYear() + "-"  
						+ ((currentdate.getMonth() < 9)?"0":"") + (currentdate.getMonth()+1)  + "-" 
						+ ((currentdate.getDate() < 10)?"0":"") + currentdate.getDate()  + "T" 
						+ ((currentdate.getHours() < 10)?"0":"") + currentdate.getHours() + ":"  
						+ ((currentdate.getMinutes() < 10)?"0":"") + currentdate.getMinutes() + ":" 
						+ ((currentdate.getSeconds() < 10)?"0":"") + currentdate.getSeconds()+".0Z";

		var uid = "uuid_"+citateid;
		var sendjson ={
  
					"uid": uid,
					"updateDate": datetime,
					"titleText": titleText,
					"mainText": zitates[citateid],
				   	"streamUrl":null,
					"redirectionUrl": null // Das musst du anpassen
		  

		 }

		const response = {
			statusCode: 200,
			headers: {
			  'Access-Control-Allow-Origin': '*', // Required for CORS support to work
			},
			body: JSON.stringify( sendjson),
	
		  };
  
		  callback(null, response);
};
