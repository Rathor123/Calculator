let calValue = document.getElementById("calValue");

let btns = document.querySelectorAll(".btns");
let cal = document.querySelectorAll(".cal")[0];

calValue.value = "";
let result;
cal.addEventListener("click", (e) => {
  if (calValue.value == result || calValue.value == "NaN") {
    calValue.value = "";
  }
  if (e.target.className == "btns") {
    if (e.target.innerHTML == "=") {
      result = parseInt(eval(calValue.value));
      calValue.value = result;
      return;
    }
    calValue.value += e.target.innerHTML;
  }
});

let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  calValue.value = "0";
});
let p;
let m;
calValue.addEventListener("keypress", (e) => {
  if (calValue.value == m || calValue.value == "NaN") {
    calValue.value = "";
  }
  if (e.key <= 9) {
    p += e.key;
  }
  if (e.key == "Enter") {
    m = parseInt(eval(calValue.value));
    calValue.value = m;
  }
});
