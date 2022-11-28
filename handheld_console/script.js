// screen should desplay something
// buttons have function
// buttons mapped to keys
// power button
// ? dettachable joycons

// switch between R&B and B&W

function main() {
  // console
  let nintendo = document.getElementById("console");
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
  let power_toggle = () => {
    if (power_state) {
      screen.style.background = "#000";
      // remove screen elements by setting visibility to none
      document.documentElement.style.setProperty("--screen", "none");
      power_state = !power_state;
    } else {
      screen.style.background = "";
      // resets screen elements
      document.documentElement.style.setProperty("--screen", "unset");
      power_state = !power_state;
    }
  };
  power.addEventListener("click", ()=> power_toggle());

  //////////////////////////////
  // pixels selector axis
  let pix_x = 2;
  let pix_y = 2;

  let movePixel = (btn) => {
    if (!power_state) return alert("Switch system ON first");
    // btn represents direction keystroke
    if ((pix_y <= 0) & (btn == "up")) {
      //if axis < 0 switch to bottom
      pix_y = 4;
    } else if ((pix_x >= 4) & (btn == "right")) {
      // if axis > 4 switch to left
      pix_x = 0;
    } else if ((pix_y >= 4) & (btn == "down")) {
      //if axis > 4 switch to top
      pix_y = 0;
    } else if ((pix_x <= 0) & (btn == "left")) {
      // if axis < 0 switch to right
      pix_x = 4;
    } else {
      // adjust axis by one pixel in relation to btn
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
    // target pixel using grid y axis
    let pix = document.getElementsByClassName(`pixel r${pix_y}`);
    // target pixel using grid x axis and toggle targeted pixel
    pix[pix_x].classList.toggle("selected");
  };
  // Dpad btn to move pixel
  up.addEventListener("click", ()=> movePixel("up"));
  right.addEventListener("click", ()=> movePixel("right"));
  down.addEventListener("click", ()=> movePixel("down"));
  left.addEventListener("click", ()=> movePixel("left"));

  /////////////////////////////
  // color switch toggle
  let volume_state = true;
  let volume_toggle = () => {
    volume_state = volume_state? !volume_state: !volume_state
  };
  // color changer
  let cur_color = 0;
  let colors = ["#FFF", "#F00", "#0F0", "#00F", "#000"];
  
  let color_pick = (sign) => {
    // changes color of border
    if ((cur_color <= 0) & (sign == "-")) cur_color = colors.length - 1;
    else if ((cur_color >= colors.length - 1) & (sign == "+")) cur_color = 0;
    else sign == "+" ? cur_color++ : cur_color--;
    // switch pointer of color switcher
    let color_pointer = volume_state? "--border-color": "--selector-color"
    document.documentElement.style.setProperty(color_pointer, colors[cur_color]);
    // change screen bg with border color change
    if (color_pointer=="--border-color") document.documentElement.style.setProperty("--screen-bg", colors[cur_color])
  };
  volume.addEventListener("click", ()=> volume_toggle());

  minus.addEventListener("click", ()=> color_pick("-"));
  plus.addEventListener("click", ()=> color_pick("+"));
  
  /////////////////////////////////////////////////////
  // Border styler
  let cur_style = 0;
  let styles_list = ["0%", "100% 0%", "100%", "0% 100%"];
  // let styles_list = ["0%", "100% 0% 0% 0%", "100% 0% 100% 0%", "100%", "0% 100% 0% 0%", "0% 100% 0% 100%", "0% 100%"];
  let border_styler = () => {
    // switch border radius of selector
    if (cur_style >= styles_list.length - 1) cur_style = 0;
    else cur_style++;
    document.documentElement.style.setProperty("--border-style", styles_list[cur_style])
  };
  x.addEventListener("click", ()=> border_styler())
  ///////////////////////////////////
  // Pulse effect
  let pulse_rate = 0;
  let pulse_freq = () => {
    pulse_rate += 0.3;
    if (pulse_rate < 0) pulse_rate = 0.6
    else if (pulse_rate > 0.6) pulse_rate = 0;
    document.documentElement.style.setProperty("--pulse-freq", `${pulse_rate}s`);
  }
  s.addEventListener("click", ()=> pulse_freq());
  // key events
  nintendo.focus();
  nintendo.addEventListener("keydown", (e) => {
    // keyboard btn listener
    switch (e.key) {
      case "1":
        power_toggle();
        break;
      case "ArrowUp":
        e.preventDefault();
        movePixel("up");
        break;
      case "ArrowRight":
        e.preventDefault();
        movePixel("right");
        break;
      case "ArrowDown":
        e.preventDefault();
        movePixel("down");
        break;
      case "ArrowLeft":
        e.preventDefault();
        movePixel("left");
        break;
      case "q":
        color_pick("-");
        break;
      case "e":
        color_pick("+");
        break;
      case "r":
        volume_toggle();
        break;
      case "w":
        border_styler();
        break;
      case "s":
        pulse_freq();
        break;
      default:
        break;
    }
  });
}
main();
