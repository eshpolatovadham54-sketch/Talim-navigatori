
function matematika() {
    window.location.href = "matematika.html";
}

function boshSahifa() {
    window.location.href = "index.html";
}

function darsniOchish(raqam) {

    let darslar = document.querySelectorAll(".dars");

    darslar.forEach(function(dars) {
        dars.style.display = "none";
    });

    document.getElementById("dars" + raqam).style.display = "block";
}

function javobniTekshir(javob) {

    if (javob === 12) {
        alert("Barakalla! Javobingiz to'g'ri!");
    } else {
        alert("Javob noto'g'ri. Yana urinib ko'ring!");
    }

}
