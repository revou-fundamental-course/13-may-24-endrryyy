function cekluas() {
    if (document.luasform.alas.value === "" || document.luasform.tinggi.value === "") {
        alert("angka kosong");
        return false;
    }
    return true;
}

function hitungluas() {
    if (cekluas()) {
        var a = parseInt(document.luasform.alas.value);
        var t = parseInt(document.luasform.tinggi.value);
        var luas = a * t / 2;
        document.luasform.hasilLuas.value = luas;
        document.getElementById('resultLuas')
        .innerText = ' Luas Segitiga: ' + ' ( ½ ) ' + ' x ' +  a  + ' x ' + t + ' = ' + luas;
    }
}

function cekkeliling() {
    if (document.kelilingform.ab.value === "" || 
        document.kelilingform.bc.value === "" || 
        document.kelilingform.ca.value === "") {
        alert("angka kosong");
        return false;
    }
    return true;
}

function hitungkeliling() {
    if (cekkeliling()) {
        var ab = parseInt(document.kelilingform.ab.value);
        var bc = parseInt(document.kelilingform.bc.value);
        var ca = parseInt(document.kelilingform.ca.value);
        var keliling = ab + bc + ca;
        document.kelilingform.hasilkeliling.value = keliling;
        document.getElementById('resultKeliling')
        .innerText = ' Keliling Segitiga :  ' + ab + ' + ' + bc + ' + ' + ca + ' = ' + keliling;
    }
}
