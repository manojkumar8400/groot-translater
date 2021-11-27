var btnTranslate = document.querySelector("#Translate-button");
var textinput = document.querySelector("#Translate-input");
var outputDiv = document.querySelector("#Translate-output");

var serverURl = "https://api.funtranslations.com/translate/jive.json"

// https://api.funtranslations.com/translate/jiva.json

function getTranslationURl(serverURL) {
    return serverURL + "?" + "text=" + textinput.value
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something is wrong")
}

function clickEventHandler(){
    fetch(getTranslationURl(serverURl))
    .then (response=>response.json())
    .then (json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler)