// this is for the click tracker in console

document.addEventListener("click", (event) => {
    console.log(`${new Date().toISOString()} - Event: Click - Element: ${event.target.tagName.toLowerCase()}`);
});

document.addEventListener("DOMContentLoaded", () => {
    console.log(`${new Date().toISOString()} - Event: Page Load`);
});

// this is for the chceking text from a textbox

function textcheck() {
    let inputText = document.getElementById("textInput").value;
    let letterCount = inputText.replace(/[^a-zA-Z]/g, "").length;
    let wordCount = inputText.trim().split(/\s+/).length;
    let spaceCount = (inputText.match(/ /g) || []).length;
    let newlineCount = (inputText.match(/\n/g) || []).length;
    let specialCharCount = inputText.replace(/[a-zA-Z0-9\s]/g, "").length;
    
    let pronounMatches = inputText.match(/\b(he|she|it|they|we|you|I)\b/gi) || [];
    let prepositionMatches = inputText.match(/\b(in|on|at|by|with|about|against|between|into|through|during|before|after)\b/gi) || [];
    let articleMatches = inputText.match(/\b(a|an|the)\b/gi) || [];

    document.getElementById("output").innerHTML = `
        <strong>Letter Count:</strong> ${letterCount}<br>
        <strong>Word Count:</strong> ${wordCount}<br>
        <strong>Spaces:</strong> ${spaceCount}<br>
        <strong>Newlines:</strong> ${newlineCount}<br>
        <strong>Special Characters:</strong> ${specialCharCount}<br>
        <strong>Pronouns:</strong> ${JSON.stringify(countOccurrences(pronounMatches))}<br>
        <strong>Prepositions:</strong> ${JSON.stringify(countOccurrences(prepositionMatches))}<br>
        <strong>Articles:</strong> ${JSON.stringify(countOccurrences(articleMatches))}<br>
    `;
}

function countOccurrences(words) {
    return words.reduce((acc, word) => {
        word = word.toLowerCase();
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}

