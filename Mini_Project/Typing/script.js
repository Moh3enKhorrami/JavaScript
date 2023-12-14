const words = ["Moh3en", "Khorrami", "King", "Pouya", "Rohan", "Davood", "Iran", "Ahvaz", "Azade", "sedigh", "Computer", "JAVA", "JavaScript", "06609444951"]
let wordIndex = 0;
let startT, endT;

function game(){
    wordIndex = 0;
    startT = new Date().getTime();
    showWord();
    document.getElementById("user-input").addEventListener("input", checkInput);
}

function showWord(){
    const wordDisplay = document.getElementById("word-display");
    wordDisplay.textContent = words[wordIndex];
}

function checkInput(){
    const userInput = document.getElementById("user-input").value;
    const currentWord = words[wordIndex];

    if(userInput === currentWord){
        if (wordIndex < words.length -1){
            wordIndex++;
            document.getElementById("user-input").value = "";
            showWord();
        } else{
            endT = new Date().getTime();
            const total = (endT - startT) / 2000;
            const message = `You finished in ${total} seconds.`;
            document.getElementById("message").textContent = message;
            document.getElementById("user-input").removeEventListener("input", checkInput);
        }
    }
}

