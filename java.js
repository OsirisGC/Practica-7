const cont = document.getElementById("cont");
const textoNuevaEntrada = document.getElementById("textoNuevaEntrada");
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const datos = new FormData(formulario);
    console.log(datos);
    console.log(datos.get("nuevoLi"));
    console.log(datos.getAll("nuevoLi"));
    agregarLi();
})

    const agregarLi = () => {
        if (textoNuevaEntrada.value.trim() == "") {
            alert("Error, Llena Los campos faltantes");
        }
        else {
            
            // Boton para crear tareas
            const nuevoLi =  document.createElement("li");
            nuevoLi.innerText = textoNuevaEntrada.value;
            
            // Boton para Eliminar tareas
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "x";
            deleteBtn.addEventListener("click", () => { eliminarLi(nuevoLi) });
            nuevoLi.appendChild(deleteBtn);
            cont.appendChild(nuevoLi);
            
            // Boton para editar tareas
            const addEdition = document.createElement("button");
            const editInput = document.createElement("input");
            const editButton = document.createElement("button");
            addEdition.innerText = "Añadir Edicion";
            editButton.innerText = "Edit";
            nuevoLi.appendChild(editButton);
            let stop = 1;

            editButton.addEventListener("click", () => { 
                if(stop == 1){
                    const editInput = document.createElement("input");
                    nuevoLi.appendChild(addEdition);
                    nuevoLi.appendChild(editInput);

                    addEdition.addEventListener("click", () => {
                        nuevoLi.innerText =editInput.value;
                        addEdition.nuevoLi;
                    });


                    stop=2;

                  
                }
                
            });
            textoNuevaEntrada.value = "";
        }
    }
    const eliminarLi = (li) => {
        li.remove();
    }
    const getter = (li) => {

        li.agregarLi();
    }