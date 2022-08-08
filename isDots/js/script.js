const logic = () => {

    var blocks = [
        'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 
        'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 
        'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 
        'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 
        'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 
        'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 
        'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 
        'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 
        'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 
    ];

    // assigns elements of the list
    var lock_state = false;

    // Lock
    var lock =()=> {
        if (lock_state) {
            lock_state = false;
        } else {
            lock_state=true;
        }
    }
    btn2.addEventListener("click", lock);
    // Click or Drag
    var mouse_st = true
    var mouse_ev=()=> {
        if (mouse_st) {
            mouse_st = false;
        }else {
            mouse_st = true
        }
    }
    btn3.addEventListener("click", mouse_ev);
    // Toggle labels
    var labled = true 
    var toggle_lab = ()=> {
        if (labled) {
            document.documentElement.style.setProperty("--lables", "rgb(255,255,255,0)");
            document.documentElement.style.setProperty("--lables-sh", "rgb(0,0,0,0)");
            labled = false;
        }else {
            document.documentElement.style.setProperty("--lables", "rgb(255,255,255,0.7)");
            document.documentElement.style.setProperty("--lables-sh", "rgb(0,0,0,0.7)");
            labled = true;
        }
    }
    btn5.addEventListener("click", toggle_lab);

    var assign = (blc) => {
        let clicked = document.getElementById(blc);
        let changed = true;
        
        // Holds the previous clicked element
        
        // Function with logic of move
        var move = () => {
            if (!lock_state) {
                if (changed) {
                    // "radial-gradient(#F00 10%, #00A 50%)"
                    // "radial-gradient(#FFF 10%, #00A 50%)"
                    clicked.style.background = "radial-gradient(#F00 10%, #00A 50%)";
                    changed = false;
                }else {
                    clicked.style.background = "";
                    changed = true;
                }
            }            
        }
        //Clear Button 
        var btn1 = document.getElementById("btn1");
        // clear function
        var clear =()=> {
            clicked.style.background = "";
        }
        btn1.addEventListener("click", clear);
        //btn4.addEventListener("click", color);

        clicked.addEventListener("mouseover", move);
        
        clicked.addEventListener("mousedown", move);
        }
        
        // loops through a list of blocks
        blocks.forEach(assign);
}
logic();