function toggle() {
    var x = document.getElementById("myTopnav");
    let y=document.getElementById("navbar-imitator");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.style.paddingTop="423.938px";

    } else {
        x.className = "topnav";
        y.style.paddingTop="11.73vh"
    }


}