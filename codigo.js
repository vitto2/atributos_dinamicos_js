//1- Adicione ao cartão, o atributo "classe" com o valor "cartão"
let elemento = document.querySelector("#tarjeta"); 
elemento.setAttribute("class","card");

//2- Adicione à imagem, o atributo "src" com o valor "https://www.youtube.com/img/desktop/yt_1200.png"
let img = document.querySelector("#logo");
img.setAttribute("src","https://www.youtube.com/img/desktop/yt_1200.png");

//3- Retire do título a classe que está dando um formato feio
let titulofeio = document.querySelector(".titulo-feo"); 
titulofeio.removeAttribute("class");

//4- Verifique se o link para o youtube tem o atributo href ou não
let link_youtube = document.querySelector("#link_youtube"); 
console.log(link_youtube.hasAttribute("href"));


//5- Obtenha o href do link para a wikipedia e exiba-o no console
let href_link = document.querySelector("#link_wikipedia");
console.log(href_link.getAttribute("href"));