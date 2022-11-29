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
  // _triggers
  let l_trigger = document.getElementById("ltrigger");
  let r_trigger = document.getElementById("rtrigger");
  // sticks
  let l_stick = document.getElementById("lstick");
  let r_stick = document.getElementById("rstick");
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
  let w = document.getElementById("w");
  let d = document.getElementById("d");
  let s = document.getElementById("s");
  let a = document.getElementById("a");

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
  let sc_color_state = true;
  let sc_color_toggle = () => {
    sc_color_state = sc_color_state? !sc_color_state: !sc_color_state
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
    let color_pointer = sc_color_state? "--border-color": "--selector-color"
    document.documentElement.style.setProperty(color_pointer, colors[cur_color]);
    // change screen bg with border color change
    if (color_pointer=="--border-color") document.documentElement.style.setProperty("--screen-bg", colors[cur_color])
  };
  a.addEventListener("click", ()=> sc_color_toggle());

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
  w.addEventListener("click", ()=> border_styler())
  ///////////////////////////////////
  // Pulse effect
  let pulse_rate = 0;
  let pulse_freq = () => {
    pulse_rate += 1.1;
    if (pulse_rate < 0) pulse_rate = 2.2
    else if (pulse_rate > 2.2) pulse_rate = 0;
    document.documentElement.style.setProperty("--pulse-freq", `${pulse_rate}s`);
  }
  s.addEventListener("click", ()=> pulse_freq());

  //////////////////////////////////////////////////
  // Volume 
  let scaled = false
  let scale_hide = () => {
    // switch pointer of color switcher
    scaled = !scaled;
    let scale_to = scaled ? "scale(0)" : "none"
    document.documentElement.style.setProperty("--transf", scale_to)
  }
  volume.addEventListener("click", ()=> scale_hide())

  ////////////////////////////////////////////////////
  // pre set patterns
  let pattern_pos = 0
  let patterns = [[
    [0,0],[0,1], [0,2],[0,3], [0,4],
    [1,0],[1,1], [1,2],[1,3], [1,4],
    [2,0],[2,1], [2,2],[2,3], [2,4],
    [3,0],[3,1], [3,2],[3,3], [3,4],
    [4,0],[4,1], [4,2],[4,3], [4,4]
  ], [
    [0,0], [0,2], [0,4],
    [1,1], [1,3], 
    [2,0], [2,2], [2,4],
    [3,1], [3,3], 
    [4,0], [4,2], [4,4]
  ], [
    [0,0], [0,4],
    [1,1], [1,3], 
     [2,2],
    [3,1], [3,3], 
    [4,0], [4,4]
  ], [
    [0,1], [0,2],[0,3],
    [2,0], [2,2], [2,4],
    [4,1], [4,2],[4,3]
  ], [
    [0,0], [0,4],
    [1,2],
    [2,1], [2,3],
    [3,2],
    [4,0], [4,4]
  ]
]
  let pre_pattern = () => {
    let co = patterns[pattern_pos]
    for (let i = 0; i < co.length; i++) {
      let point = co[i]
      let pix = document.getElementsByClassName(`pixel r${point[0]}`);
      pix[point[1]].classList.toggle("selected");
    }
  }
  d.addEventListener("click", ()=> pre_pattern())
  ////////////////////////////////////
  // pattern matcher
  let pattern_shift = (sign) => {
    // changes the index pointing to a pattern
    sign == "+" ? pattern_pos++:pattern_pos--
    if (pattern_pos < 0) pattern_pos = patterns.length - 1 
    else if (pattern_pos >= patterns.length) pattern_pos = 0
  }
  l_trigger.addEventListener("click", ()=> pattern_shift("-"));
  r_trigger.addEventListener("click", ()=> pattern_shift("+"));

  // key events
  nintendo.focus();
  nintendo.addEventListener("keydown", (e) => {
    // keyboard btn listener
    switch (e.key) {
      case "1":
        power_toggle();
        break;
        case "2":
          scale_hide();
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
        case "w":
          border_styler();
          break;
        case "d":
          pre_pattern();
          break;
        case "s":
          pulse_freq()
          break;
        case "a":
          sc_color_toggle();
          break;
        case "z":
        pattern_shift("-")
        break;
      case "x":
        pattern_shift("+");
        break;
      default:
        break;
    }
  });
}
main();
