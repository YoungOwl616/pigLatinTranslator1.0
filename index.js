const userInput = document.querySelector("#user-input");
const translateBtn = document.querySelector("#translate-btn");
const outputPara = document.querySelector("#output-para");

translateBtn.addEventListener("click", function() {
    var regEx = /^[A-Za-z\s]+$/;

    if (userInput.value.match(regEx)) {
        outputPara.textContent = "";

        let userInputString = `${userInput.value}`.match(/\b(\w+)\b/g);
    
        for (let i in userInputString) {
            let tempString = userInputString[i];
            let firstLetter = tempString[0];
            let endWord = tempString.slice(1, tempString.length);
            let translatedWord = endWord + firstLetter + "ay" + " ";
            outputPara.textContent += translatedWord;
        }
        
        userInput.value = "";
    } else {
        alert("Please type something... Only include letters and spaces...");
        userInput.value = "";
    }

})