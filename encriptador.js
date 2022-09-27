//let blockText = document.querySelector("#mensagem");
    
let blockText = "Estou trabalhandona barbearia";

    let rules = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }

    let result = "";
    for (let index = 0; index < blockText.length; index++) {
        const element = blockText.charAt(index);
        
        const existsRules = rules[element];
        if(typeof existsRules !== "undefined") {
            result += existsRules;
        } else {
            result += element;
        }
    }

    
    console.log(result);
