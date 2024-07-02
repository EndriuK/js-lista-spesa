// INIZIALIZZO L'ARRAY
const ingredienti = ["guanciale", "pepe", "pecorino", "uova", "spaghetti"];

// RECUPERO LA MIA LISTA SPESA DAL DOM

const listaSpesa = document.getElementById("lista-spesa");

// INIZIALIZZO LA VARIABILE DI INDICE
let i = 0;

// CICLO L'ARRAY CON UN CICLO WHILE
while (i < ingredienti.length) {
  const li = document.createElement("li");
  li.innerText = ingredienti[i];
  listaSpesa.append(li);
  i++; // INCREMENTO LA VARIABILE DI INDICE
}
