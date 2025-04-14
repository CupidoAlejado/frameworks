$( "#menu" ).load("./componente/menu.html");
$( "#conteudo" ).load("./componente/conteudo.html");
$( "#rodape" ).load("./componente/rodape.html");

function menu(link) {
    $( "#rodape" ).load("./pages/"+link+".html");
}