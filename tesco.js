let lista = [];

const form = document.querySelector(".iras");
const listaDiv = document.querySelector(".lista");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.elements["name"].value;
    const price = form.elements["price"].value;
    const many = form.elements["many"].value;

    let adat = {
        nev: name,
        ar: price,
        db: many
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
        osszeg += termekOsszeg;

        let div = document.createElement("div");

        let szoveg = document.createElement("span");
        szoveg.textContent =
            lista[i].nev + " - " +
            lista[i].ar + " Ft/pcs - " +
            lista[i].db + "  : " +
            termekOsszeg + " Ft";

        let btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.addEventListener("click", function() {
            lista.splice(i, 1);
            megjelenit();
        });

        div.appendChild(szoveg);
        div.appendChild(btn);

        listaDiv.appendChild(div);
    }

    osszegH3.textContent = "Total: " + osszeg + " Ft";
}