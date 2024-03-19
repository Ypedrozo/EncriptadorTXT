function processText() {
    var inputText = document.getElementById("inputText").value.toLowerCase();
    var outputText = "";
    var option = document.querySelector('input[name="option"]:checked').value;
  
    if (option === "encrypt") {
      outputText = encryptText(inputText);
    } else {
      outputText = decryptText(inputText);
    }
  
    document.getElementById("outputText").value = outputText;
  }
  
  function encryptText(text) {
    return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }
  
  function decryptText(text) {
    return text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }
  
  function copyText() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
  }
  