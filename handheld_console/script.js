// screen should desplay something
// buttons have function
// buttons mapped to keys
// power button
// ? dettachable joycons

// switch between R&B and B&W

id = `
id="power"
id="volume"
id="ltrigger"
id="minus"
id="lstick"
id="up"
id="right"
id="down"
id="left"
id="sys-rec"
id="screen"
id="rtrigger"
id="plus"
id="rstick"
id="x"
id="a"
id="b"
id="y"
id="sys-home"
`;
function main() {
  // sys btn
  let power = document.getElementById("power");
  let volume = document.getElementById("volume");
  let screen = document.getElementById("screen");
  // triggers
  let lTrigger = document.getElementById("ltrigger");
  let rTrigger = document.getElementById("rtrigger");
  // sticks
  let lStick = document.getElementById("lstick");
  let rStick = document.getElementById("rstick");
  // face btns
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let sysRec = document.getElementById("sys-rec");
  let sysHome = document.getElementById("sys-home");
  // D-pad
  let up = document.getElementById("up");
  let right = document.getElementById("right");
  let down = document.getElementById("down");
  let left = document.getElementById("left");
  // Action btns
  let x = document.getElementById("x");
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let y = document.getElementById("y");


  ////////////////////////////////////
  // Screen Power
  let power_state = true;
  let switched = () => {
      if (power_state) {
        screen.style.background = "#000";
        power_state = !power_state;
    } else {
        screen.style.background = "";
        power_state = !power_state;
    }
  };
  power.addEventListener("click", switched);
  
  //////////////////////////////
  // pixels selector
  let selected = document.getElementsByClassName("selected")
  let pix_x = (0, 5);
  let  pix_y = (0, 5);

  let rw = document.getElementsByClassName("row");
  let r1 = rw[0].document.getElementsByClassName("pixel");


  let pix = document.getElementsByClassName("pixel");
  pix[0].classList.toggle("selected");
}
main();
