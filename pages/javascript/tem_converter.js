const output = document.getElementById("result");

const input = document.getElementById("input");

input.addEventListener("input", function(e) {
    let value = parseFloat(e.target.value);
    output.value = (value * 1.8) + 32;
});