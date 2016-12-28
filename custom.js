/**
 * Created by Mantas on 29/12/2016.
 */

function getHint() {
    console.debug("hit");

    var code = document.getElementById("code").value;
    console.debug(code);
    var hint;
    switch (code) {
        case "2017#A1":
            hint = "Super duper";
            break;
        default:
            hint = "Wrong code";
    }
    var hintObj = document.getElementById("hint");
    hintObj.innerHTML = hint;
    hintObj.parentNode.style.display = "block";
}