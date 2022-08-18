var display = document.getElementById("display");
buttons = document.querySelectorAll("button");
var string = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    value = e.target.innerHTML;
    try {
      //for valid input
      // to multiply
      if (value == "X") {
        string += "*";
        display.innerHTML = string;
      }
      // to clear
      else if (value == "AC") {
        string = "";
        display.innerHTML = string;
      }
      // for result
      else if (value == "=") {
        string = eval(string);
        display.innerHTML = string;
      }
      // for percentage
      else if (value == "%") {
        string += "*1/100";
        string = eval(string);
        display.innerHTML = string;
      }
      //other keys
      else {
        string += value;
        display.innerHTML = string;
      }
    } catch (error) {
      //for invalid input
      display.innerHTML = "Enter a valid input";
      string="";
    }
  });
};

//********************************************************* */
//keyboard events====
// for (item of buttons) {
//   item.addEventListener("keyup", (event) => {
//     console.log(event);
//     value = e.keyCode;
//     // console.log("Button text is ", value);
//     if (value == "AC") {
//       string = "";
//       display.innerHTML = string;
//     } else if (value == 187) {
//       //   eval(string);
//       string = eval(string);
//       display.innerHTML = string;
//     }
//     else if(value == "%"){
//         string+="*1/100";
//         string = eval(string);
//         display.innerHTML = string;
//     }
//     else {
//       string += value;
//       display.innerHTML = string;
//     }
//   });
// }
