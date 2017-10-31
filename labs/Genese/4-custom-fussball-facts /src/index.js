'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
const APP_ID = undefined;

const SKILL_NAME = "Fußball Fakten";
const INTRO_TEXT =  ['Moin! Moin! Ich kann dir einen Fußballfakt erzählen.',
'Hallo!  Frage mich nach einen Fakt.'];
const FAKT_INTRO_TEXT = "Hier ist dein Fakt: ";
const HELP_MESSAGE = "Du kannst du mir sagen, gebe mir einen Fakte oder du kannst sagen Stop... Kann ich dir helfen?";
const HELP_REPROMPT = "Wie kann ich dir helfen?";
const STOP_MESSAGE = "Tschüss!";
const FAKT = "Alle Fußballtore sind gleich groß: 2,44 Meter hoch und 7,32 Meter breit. "





/*
const FAKTEN = [
	"Fakt Nummer 1. Alle Fußballtore sind gleich groß: 2,44 Meter hoch und 7,32 Meter breit.",
	"Fakt Nummer 2. Die Pfosten und Querlatte dürfen zudem nicht breiter und tiefer als 12 cm sein. ",
	"Fakt Nummer 3. Bis 1875 gab es übrigens noch keine Querlatte und das Tor bestand lediglich aus zwei Pfosten.",
	"Fakt Nummer 4. Fußballfeld ist 68 Meter breit und 105 Meter lang.",
	"Fakt Nummer 5. Deutschland stellt die einzige Mannschaft, die in allen WM-Endrunden seit 1954 mindestens das Viertelfinale erreicht hat.",
	"Fakt Nummer 6. Die rote Karte wurde im Jahr 1970 zu WM Mexico eingeführt.",
	"Fakt Nummer 7. Der Spitzname von Hamburg S.V. ist die Rothosen.",
	"Fakt Nummer 8. Deutschland hat 4 Mal Fußball WM gewonnen."
]
const FAKT_NOT_FOUND_TEXT = "Den Fakt haben wir nicht gefunden. Hier ist ein anderer Fakt"
*/

/* const ZITAT_INTRO_TEXT = "Hier ist dein Zitat: "; 

const ZITAT_NOT_FOUND_TEXT = "Das Zitat haben wir nicht gefunden. Hier ist ein zufälliges Zitat"
const ZITATE = [
	"Zitate Nummer 1. Helmut Schulte sagte: Ball rund muß in Tor eckig! ",
	"Zitate Nummer 2. Oliver Kahn sagte: Das einzige Tier bei uns zu Hause bin ich. ",
	"Zitate Nummer 3. Heinrich Lübke sagte: Es war ein Tor. Ich habe es genau gesehen, meine Herren. ",
	"Zitate Nummer 4. Heribert Fassbender sagte: Es steht 1:1, genauso gut könnte es umgekehrt stehen. ",
	"Zitate Nummer 5. Erich Ribbeck sagte: Es ist egal, ob ein Spieler bei Bayern München spielt oder sonst wo im Ausland. ",
	"Zitate Nummer 6. Jürgen Wegmann sagte: Erst hatten wir kein Glück, dann kam auch noch Pech hinzu. ",
	"Zitate Nummer 7. Juri Sawitschew sagte: Elfmeterschießen, das ist irgendwie wie mit Frauen und Autos - reine Glückssache! "
]
*/


//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
    	var speechOutput = randomPhrase(INTRO_TEXT);
        this.response.speak(speechOutput).listen(reprompt);
		this.emit(':responseReady');
    },
    'GetNewFactIntent': function () {
        var speechOutput = FAKT_INTRO_TEXT + FAKT;
        this.response.cardRenderer(SKILL_NAME, FAKT);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    /*
      'GetNewFactIntent': function () {
        var factArr = FAKTEN;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = FAKT_INTRO_TEXT + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    }, */
    
    
    /*
 
      'GetNewZitatIntent': function () {
        var ZitateArr = ZITATE;
        var ZitateIndex = Math.floor(Math.random() * ZitateArr.length);
        var randomZitate = ZitateArr[ZitateIndex];
        var speechOutput = ZITAT_INTRO_TEXT + randomZitate;

        this.response.cardRenderer(SKILL_NAME, randomZitate);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    }, 
    */
    
       /*
      'GetNewFactWithNumberIntent': function () {
        var factArr = FAKTEN;
        var theNumber = this.event.request.intent.slots.number.value;
        if (theNumber > factArr.length) {
	        var factIndex = theNumber-1;
	        var Fact = factArr[factIndex];
	        var speechOutput = FAKT_INTRO_TEXT + Fact;
	    }  else {
	    	var factIndex = Math.floor(Math.random() * factArr.length);
	        var Fact = factArr[factIndex];
	        var speechOutput = FAKT_NOT_FOUND_TEXT + Fact;
	    }
	        
        this.response.cardRenderer(SKILL_NAME, Fact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    }, */
    
      /*
      'GetNewZitateWithNumberIntent': function () {
        var zitateArr = ZITATE;
        var theNumber = this.event.request.intent.slots.number.value;
        if ( theNumber > zitateArr.length) {
        	var ZitateIndex = theNumber-1;
        	var Zitate = zitateArr[ZitateIndex];
	        var speechOutput = ZITAT_INTRO_TEXT + Zitate; 
	    } else {
        	var ZitateIndex = Math.floor(Math.random() * ZitateArr.length);
        	var Zitate = ZitateArr[ZitateIndex];
        	var speechOutput = ZITAT_NOT_FOUND_TEXT + Zitate;
    	 }
        

        this.response.cardRenderer(SKILL_NAME, Zitate);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    }, */
    
    
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    }
};


function randomPhrase(myData) { // randomPhrase from the array function
    // the argument is an array [] of words or phrases

    var i = 0;
    i = Math.floor(Math.random() * myData.length);
    return(myData[i]+" ");
}