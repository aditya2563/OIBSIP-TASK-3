var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

cel.addEventListener('input', function(){
    let c = parseFloat(this.value);
    let f = (c*9/5) + 32;
    let k = c + 273.15;
    fah.value = f;
    kel.value = k;
})

fah.addEventListener('input', function(){
    let f = parseFloat(this.value);
    let c = (f-32)*5/9;
    let k = c + 273.15;
    cel.value = c;
    kel.value = k;
})

kel.addEventListener('input', function(){
    let k = parseFloat(this.value);
    let c = k - 273.15;
    let f = (c*9/5) + 32;
    cel.value = c;
    fah.value = f;
})