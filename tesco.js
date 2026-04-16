let lista = [];

const form = document.querySelector(".iras");
const listaDiv = document.querySelector(".lista");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.elements["name"].value;
    const price = parseFloat(form.elements["price"].value) || 0;
    const many = parseInt(form.elements["many"].value, 10) || 0;

   let adat = {
    nev: name,
    ar: price,
    db: many,
    vasarolva: false,
    selected: false
};

    lista.push(adat);

    megjelenit();
    form.reset();
});

function megjelenit() {
    const osszegH3 = document.getElementById("osszeg");
    listaDiv.innerHTML = "";
    

    let osszeg = 0;

    for (let i = 0; i < lista.length; i++) {

        let termekOsszeg = lista[i].ar * lista[i].db;
        if (lista[i].selected) {
            osszeg += termekOsszeg;
        }

        let div = document.createElement("div");

        // checkmark span (☐ / ☑) to include item in total
        let checkSpan = document.createElement("span");
        checkSpan.textContent = lista[i].selected ? "☑" : "☐";
        checkSpan.style.cursor = "pointer";
        checkSpan.style.fontSize = "1.6rem";
        checkSpan.style.marginRight = "8px";
        checkSpan.addEventListener("click", function() {
            lista[i].selected = !lista[i].selected;
            megjelenit();
        });

        let szoveg = document.createElement("span");
        szoveg.style.fontSize = "1.2rem";
szoveg.textContent =
    lista[i].nev + "  -  " +
    lista[i].ar + " Ft/db  -  " +
    lista[i].db + " db  :  " +
    termekOsszeg + " Ft";

if (lista[i].vasarolva) {
    szoveg.style.textDecoration = "line-through";
}


szoveg.addEventListener("click", function() {
    lista[i].vasarolva = !lista[i].vasarolva;
    megjelenit();
});

        let btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.addEventListener("click", function() {
            lista.splice(i, 1);
            megjelenit();
        });

        div.appendChild(checkSpan);
        div.appendChild(szoveg);
        div.appendChild(btn);

        listaDiv.appendChild(div);
    }

    osszegH3.textContent = "Total: " + osszeg + " Ft";
}