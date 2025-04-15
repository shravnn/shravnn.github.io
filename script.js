document.addEventListener("click", (e) => {
    const timestamp = new Date().toISOString();
    const targetText = e.target.textContent.trim() || e.target.id || e.target.tagName.toLowerCase();
    console.log(`${timestamp} - Action : Click , Target: ${targetText}`);
});

document.addEventListener("input", (e) => {
    const timestamp = new Date().toISOString();
    const targetValue = e.target.value;
    console.log(`${timestamp} - Action : Text Input , Target: ${targetValue}`);
});

document.addEventListener("DOMContentLoaded", () => {
    console.log(`${new Date().toISOString()} - Action : Loaded Doc File`);
});

function gothrutext() {
    const text = document.getElementById("textInput").value.trim();
    const letters = text.replace(/[^a-zA-Z]/g, "").length;
    const words = text.length ? text.split(/\s+/).length : 0;
    const spaces = (text.match(/ /g) || []).length;
    const newlines = (text.match(/\n/g) || []).length;
    const specialChars = text.replace(/[a-zA-Z0-9\s]/g, "").length;
    
    const pronouns = text.match(/\b(he|she|it|they|we|you|I)\b/gi) || [];
    const prepositions = text.match(/\b(in|on|at|by|with|about|against|between|into|through|during|before|after|under|behind|front|over|below|beside|among)\b/gi) || [];
    const articles = text.match(/\b(a|an|the)\b/gi) || [];

    document.getElementById("output").innerHTML = `
        <b>Letters:</b> ${letters}<br>
        <b>Total Words:</b> ${words}<br>
        <b>Space Count:</b> ${spaces}<br>
        <b>Line Breaks:</b> ${newlines}<br>
        <b>Special Chars:</b> ${specialChars}<br>
        <b>Pronoun Frequency:</b> ${JSON.stringify(plscountwords(pronouns))}<br>
        <b>Preposition Frequency:</b> ${JSON.stringify(plscountwords(prepositions))}<br>
        <b>Article Frequency:</b> ${JSON.stringify(plscountwords(articles))}<br>
    `;
}

function plscountwords(wordArray) {
    return wordArray.reduce((count, currentWord) => {
        const word = currentWord.toLowerCase();
        count[word] = (count[word] || 0) + 1;
        return count;
    }, {});
}
