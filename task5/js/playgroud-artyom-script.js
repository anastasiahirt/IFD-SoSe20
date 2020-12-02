    
window.addEventListener("load", function () {
  document.querySelector('button').addEventListener("click", function () {

    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    var noCommandMatched = "NOT_COMMAND_MATCHED";
    artyom.when(noCommandMatched,function(){
        artyom.say("Sorry, ich befürchte damit kann ich dir leider nicht helfen.");
        document.getElementById('sagen').innerHTML = "Sorry, ich befürchte damit kann ich dir leider nicht helfen.";
    });
    
    artyom.addCommands([
      {
          indexes: ["Hey Ira", "Ira", "Hallo Ira", "Hallo"],
          action: function(i){
            console.log ("Hey Ana!")
            document.getElementById('sagen').innerHTML ="Hi Ana!";
            artyom.say("Hey Ana!");
          }
      },
      {
        indexes: ["um wie viel Uhr ist *"],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Deine Vorlesung " + wildcard + " ist heute um 9 Uhr");
            document.getElementById('sagen').innerHTML = "Deine Vorlesung " + wildcard + " ist heute um 9 Uhr";
        }
      },
      {
          indexes: ["habe ich heute eine Veranstaltung", "Veranstaltung"],
          action: function(i){
              document.getElementById('sagen').innerHTML ="Ja, du hast heute eine Vorlesung und ein Projektmeeting.";
              artyom.say("Ja, du hast heute eine Vorlesung und ein Projektmeeting.");
          }
      },
      {
          indexes: ["was für eine Vorlesung", "Vorlesung"],
          action: function(i){
              document.getElementById('sagen').innerHTML = "Du hast Streaming Anwendungen mit Prof. Hottong";
              artyom.say("Du hast Streaming Anwendungen mit Professor Hottong");
          }
      },
      {
          indexes: ["Danke Ira", "Danke"],
          action: function(i){
              document.getElementById('sagen').innerHTML = "Kann ich dir noch bei was anderem helfen?";
              artyom.say("Kann ich dir noch bei was anderem helfen?");
          }
      },
      {
          indexes: ["Habe ich neue Mails", "Mail", "Mails"],
          action: function(i){
              document.getElementById('sagen').innerHTML = "Ja, eine neue Mail vom Lagezentrum." ;
              artyom.say("Ja, eine neue Mail vom Lagezentrum.");
          }
        },
      {
          indexes: ["Kannst du mir die Mail vorlesen", "Vorlesen"],
          action: function(i){
              document.getElementById('sagen').innerHTML = "INFO Rektor: Einstellung Präsenz-Studienbetrieb ab...";
              artyom.say("INFO Rektor: Einstellung Präsenz-Studienbetrieb ab...");
          }
      },
      {
          indexes: ["Was steht auf meiner To-Do-Liste", "To-Do"],
          action: function(i){
              document.getElementById('sagen').innerHTML = "Du musst die Abgabe für Interface heute bis 18 Uhr fertig machen.";
              artyom.say("Du musst die Abgabe für Interface heute bis 18 Uhr fertig machen.");
          }
      },
      {
          indexes: ["Was muss ich für Interface machen"],
          action: function(i){
              document.getElementById('sagen').innerHTML ="Du musst Aufgabe 4 machen - einen Dialog Flow erstellen." ;
              artyom.say("Du musst Aufgabe 4 machen - einen Dialog Flow erstellen.");
          }
      },
      {
          indexes: ["Wurden neue Dateien hochgeladen","neue Dateien"],
          action: function(i){
              document.getElementById('sagen').innerHTML = "Ja, in Interface wurden 3 neue Videos von Prof. Rausch hochgeladen.";
              artyom.say("Ja, in Interface wurden drei neue Videos von Professor Rausch hochgeladen.");
          }
      },
]);

artyom.redirectRecognizedTextOutput(function(text,isFinal) {
  var span = document.getElementById ('output');
    span.innerHTML = text;

});
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
});
function show_elements()
 {
  var elementNames = show_elements.arguments;
  for (var i=0; i<elementNames.length; i++)
   {
     var elementName = elementNames[i];
     document.getElementById(elementName).style.display='block';
   }
 }
function hide_elements()
 {
  var elementNames = hide_elements.arguments;
  for (var i=0; i<elementNames.length; i++)
   {
     var elementName = elementNames[i];
     document.getElementById(elementName).style.display='none';
   }
 }