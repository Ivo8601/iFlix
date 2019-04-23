// Main iFlix JS starts below
// Vanilla JavaScript only starts below

// iFlix TOP NAV
function myFunction() {
    var x = document.getElementById("iFlix_topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
