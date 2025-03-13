function encrypt() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            result += String.fromCharCode(((code - base + shift) % 26) + base);
        } else {
            result += char;
        }
    }
    document.getElementById("result").innerText = result;
}