document.getElementById("page-title").innerText = "Filme Os outros";

document.getElementById("subtitle").innerHTML = "Aprendi a mexer no DOM";



//usando class

document.getElementsByClassName("paragraph")[1].innerText = "Usando class, mudei o nome. Nesse caso precisa dizer o local do array. O class não funciona como o innerText ou innerHTML";

let paragraph = document.getElementsByClassName("paragraph");
for (let i = 0; i < paragraph.length; i += 1) {
  paragraph[i].innerText = "modifiquei usando class name. Nesse caso é necessário criar um FOR para modificar todos os nomes de uma só vez. Pode mudar as imagens de uma página também.";
}


