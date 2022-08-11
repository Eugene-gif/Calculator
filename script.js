const calc = document.querySelector(".calc");
const output = document.querySelector("#output");

if (calc) {
  calc.addEventListener("click", function (event) {
    if (!event.target.classList.contains("calc__btn")) return;
    const value = event.target.innerText;
    // output.innerText += value;
    if(value === 'C') {
      output.innerText = '';
    } else if (value === '=') {
      output.innerText = eval(output.innerText);
    } else {
      output.innerText +=value;
    }
  });
}
