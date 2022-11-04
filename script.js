function osszeadas() {
    var elso = document.getElementById("bevitelegy").value;
    var masodik = document.getElementById("bevitelketto").value;
    ///console.log(elso+"-"+bszam);
    var eredmeny = parseFloat(elso) + parseFloat(masodik);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}

function kivonas() {
    var elso = document.getElementById("bevitelegy").value;
    var masodik = document.getElementById("bevitelketto").value;
    var eredmeny = parseFloat(elso) - parseFloat(masodik);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
function szorzas() {
    var elso = document.getElementById("bevitelegy").value;
    var masodik = document.getElementById("bevitelketto").value;
    var eredmeny = parseFloat(elso) * parseFloat(masodik);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
function osztas() {
    var elso = document.getElementById("bevitelegy").value;
    var masodik = document.getElementById("bevitelketto").value;
    var eredmeny = parseFloat(elso) / parseFloat(masodik);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}

function szamolj(muvelet) {
    var elso = document.getElementById("bevitelegy").value;
    var masodik = document.getElementById("bevitelketto").value;
    var eredmeny;
    if (muvelet == "+") {
        var eredmeny = parseFloat(elso) + parseFloat(masodik);
    }
    else if (muvelet == "-") {
        var eredmeny = parseFloat(elso) - parseFloat(masodik);
    }
    else if (muvelet == "*") {
        var eredmeny = parseFloat(elso) * parseFloat(masodik);
    }
    else if (muvelet == "/") {
        var eredmeny = parseFloat(elso) / parseFloat(masodik);
    }
    document.getElementById("eredmeny").innerHTML = eredmeny;
}