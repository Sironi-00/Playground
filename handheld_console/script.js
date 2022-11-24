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
      document.documentElement.style.setProperty("--screen", "none");
      power_state = !power_state;
    } else {
      screen.style.background = "";
      document.documentElement.style.setProperty("--screen", "unset");
      power_state = !power_state;
    }
  };
  power.addEventListener("click", switched);

  //////////////////////////////
  // pixels selector
  let pix_x = 2;
  let pix_y = 2;

  let movePixel = (btn) => {
    if (pix_y <= 0 & btn == "up") {
      pix_y = 4;
    } else if (pix_x >= 4 & btn == "right") {
      pix_x = 0;
    }else if (pix_y >= 4 & btn == "down") {
      pix_y = 0;
    }else if (pix_x <= 0 & btn == "left") {
      pix_x = 4;
    } else {
      switch (btn) {
        case "up":
          pix_y--;
          break;
        case "right":
          pix_x++;
          break;
        case "down":
          pix_y++;
          break;
        case "left":
          pix_x--;
          break;
      }
    }

    console.log(btn, pix_x, pix_y)
    let pix = document.getElementsByClassName(`pixel r${pix_y}`);
    pix[pix_x].classList.toggle("selected");
    console.log("*", pix_x, pix_y)
  };

  up.addEventListener("click", () => movePixel("up"));
  right.addEventListener("click", () => movePixel("right"));
  down.addEventListener("click", () => movePixel("down"));
  left.addEventListener("click", () => movePixel("left"));
}
main();
