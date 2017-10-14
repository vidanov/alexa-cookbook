/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills Kit
 * using the nodejs SDK.  It's intended to be used at an Alexa Workshop
 **/

// Include the Alexa Library.
const Alexa = require('alexa-sdk');

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  // Create an instance of the Alexa library and pass it the requested command.
    var alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
  'LaunchRequest': function () {
      this.emit('HelloWorldIntent');
  },

  'HelloWorldIntent': function () {
      this.response.speak('Die Verwendung des Textes „Hello World!“, der auch durch einen beliebigen Text ersetzt werden kann, aber dennoch gerne unverändert benutzt wird, ist eine Tradition und geht auf ein internes Programmierhandbuch der Bell Laboratories über die Programmiersprache C zurück, das Brian Kernighan 1974 verfasste, nachdem er dort schon ein Jahr zuvor die Wörter „hello“ und „world“ in einer Einführung in die Programmiersprache B verwendet hatte.')
      // aus https://de.wikipedia.org/wiki/Hallo-Welt-Programm
      this.emit(':responseReady');
  }
};
