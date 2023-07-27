// All Variable
var calculator = document.getElementById("calculator");
var lightButton = document.getElementById("light");
var darkButton = document.getElementById("dark");
var headingButton = document.getElementById("heading");
var digitButton = document.querySelector(".digits");
var btnButton = document.getElementsByClassName("button");
var digi = document.getElementsByClassName("nrmal");
var display = document.getElementById("display");
// Theme Change Function
function backColor(event, flag) {
  if (flag) {
    calculator.style.background = "black";
    lightButton.style.color = "rgb(196, 187, 187)";
    darkButton.style.color = "white";
    headingButton.style.backgroundColor = "rgb(15, 15, 15)";
    digitButton.style.background = "rgb(15, 15, 15)";
    for (var i = 0; i < btnButton.length; i++) {
      btnButton[i].style.background = "rgb(35, 35, 35)";
    }
    for (var i = 0; i < digi.length; i++) {
      digi[i].style.color = "white";
    }
    display.style.color = "white";
  } else {
    calculator.style.background = "white";
    lightButton.style.color = "black";
    darkButton.style.color = "rgb(196, 187, 187)";
    headingButton.style.backgroundColor = "rgb(216, 216, 216)";
    digitButton.style.background = "rgb(216, 216, 216)";
    for (var i = 0; i < btnButton.length; i++) {
      btnButton[i].style.background = "rgb(202, 199, 199)";
    }
    for (var i = 0; i < digi.length; i++) {
      digi[i].style.color = "black";
    }
    display.style.color = "black";
  }
}
darkButton.addEventListener("click", function (event) {
  backColor(event, 1);
});
lightButton.addEventListener("click", function (event) {
  backColor(event, 0);
});
// Operands1 , operators, Operands2
var operands1 = "0";
var operators = null;
var operands2 = null;
function value() {
  if (operands2 == null) {
    return parseFloat(operands1);
  }
  if (operators == "+") {
    var ans = parseFloat(operands1) + parseFloat(operands2);
  } else if (operators == "-") {
    var ans = parseFloat(operands2) - parseFloat(operands1);
  } else if (operators == "/") {
    var ans = parseFloat(operands2) / parseFloat(operands1);
  } else if (operators == "*") {
    var ans = parseFloat(operands1) * parseFloat(operands2);
  }
  return ans;
}
for (var i = 0; i < btnButton.length; i++) {
  btnButton[i].addEventListener("click", function () {
    var ele = this.getAttribute("data-value");
    if (ele == "equal") {
      operands1 = value();
      if (operands1 == NaN || operands1 == Infinity) {
        display.innerText = "Error";
      } else {
        display.innerText = operands1;
      }
      operands1 = operands1.toString();
      operands2 = null;
      operators = null;
    }
    //for operations
    else if (ele == "+" || ele == "-" || ele == "/" || ele == "*") {
      operands1 = value();
      if (operands1 == NaN || operands1 == Infinity) {
        display.innerText = "Error";
      } else {
        display.innerText = operands1;
      }
      operands1 = operands1.toString();
      operators = ele;
      operands2 = null;
    }
    //for plus-minus
    else if (ele == "plus_minius") {
      operands1 = parseFloat(operands1) * -1;
      display.innerText = operands1.toString();
    }
    //for percentage
    else if (ele == "%") {
      var ans = parseFloat(operands1) / 100;
      display.innerText = parseFloat(ans);
      operands1 = ans.toString();
    }
    //for cancel
    else if (ele == "cancel") {
      display.innerText = "";
      operands1 = "0";
      operands2 = null;
      operators = null;
    }
    //for digits
    else {
      if (operators == null) {
        operands1 += ele;
        if (ele == ".") {
          operands1 = parseFloat(operands1).toString() + ".";
          display.innerText = operands1;
        } else {
          if (operands1.includes(".")) {
            display.innerText = operands1;
          } else {
            display.innerText = parseFloat(operands1);
          }
        }
      } else {
        if (operands2 == null) {
          operands2 = operands1;
          operands1 = "0";
        }
        operands1 += ele;
        if (ele == ".") {
          operands1 = parseFloat(operands1).toString() + ".";
          display.innerText = operands1;
        } else {
          if (operands1.includes(".")) {
            display.innerText = operands1;
          } else {
            display.innerText = parseFloat(operands1);
          }
        }
      }
    }
  });
}
