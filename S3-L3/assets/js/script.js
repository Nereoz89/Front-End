function aggiungiAllaLista() {
    let nodoInput = document.querySelector("main input");
    let valore = nodoInput.value;

    if (valore.trim() !== "") { 
        let lista = document.querySelector("main ol"); 
        if (!lista) {
            lista = document.createElement("ol");
            document.querySelector("main").appendChild(lista);
        }

        let elementoLista = document.createElement("li");
        elementoLista.textContent = valore;

        
        let bottoneRimozione = document.createElement("button");
        bottoneRimozione.textContent = "Rimuovi";
        bottoneRimozione.addEventListener("click", function() {
            lista.removeChild(elementoLista);
        });

        elementoLista.appendChild(bottoneRimozione);
        lista.appendChild(elementoLista);

        nodoInput.value = ""; 
    }
}

function pulsante() {
    let btn = document.querySelector("main button");
    btn.addEventListener("click", aggiungiAllaLista);
}


pulsante();
