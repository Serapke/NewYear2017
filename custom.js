/**
 * Created by Mantas on 29/12/2016.
 */

function getHint() {
    var code = document.getElementById("code").value;
    console.debug(code);
    var hint;
    switch (code) {
        case "2017#A0":
            hint = "Kinų drakonas";
            break;
        case "2017#A1":
            hint = "I have a pen, I have an apple! Uh! Apple-Pen!" +
                "I have a pen, I have pineapple! Uh! Pineapple-Pen!";
            break;
        case "2017#A2":
            hint = "Head&Shoulders";
            break;
        case "2017#A3":
            hint = "Slėptuvė po laiptais";
            break;
        case "2017#A4":
            hint = "Žemai ir tamsiai slepiasi pasakų namelio durys...";
            break;
        case "2017#B0":
            hint = "Matrasas = Lova?";
            break;
        case "2017#B1":
            hint = "Jei nori atrasti, tai ko ieškai, ieškok 'Naujosios' Biblijos";
            break;
        case "2017#B2":
            hint = "Rimtai??? Atmerk akis. ANT SIENOS";
            break;
        case "2017#B3":
            hint = "DBZ";
            break;
        case "2017#B4":
            hint = "Žemai ir tamsiai slepiuosi aš, žudysiu ten tave! MUAHAHA!";
            break;
        default:
            hint = "Kažką suvėlėt";
    }
    var hintObj = document.getElementById("hint");
    hintObj.innerHTML = hint;
    hintObj.parentNode.style.visibility = "visible";
}

function getAnotherHint() {
    var code = document.getElementById("code").value;
    console.debug(code);
    var hint;
    switch (code) {
        case "2017#A0":
            hint = "Salionas";
            break;
        case "2017#A1":
            hint = "Virtuvė";
            break;
        case "2017#A2":
            hint = "Tualetas";
            break;
        case "2017#A3":
            hint = "Virtuvė";
            break;
        case "2017#A4":
            hint = "Apačia";
            break;
        case "2017#B0":
            hint = "Kambarys";
            break;
        case "2017#B1":
            hint = "Salionas";
            break;
        case "2017#B2":
            hint = "Kambarys";
            break;
        case "2017#B3":
            hint = "Virtuvė";
            break;
        case "2017#B4":
            hint = "Apačia";
            break;
        default:
            hint = "Muahaha";
    }
    var hintObj = document.getElementById("hint2");
    console.log(hint);
    hintObj.innerHTML = hint;
    hintObj.parentNode.style.visibility = "visible";
}
