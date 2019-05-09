function cargarPagina(archivoPagina){
    var misCabeceras = new Headers();
    var miInit = { method: 'GET',
                   headers: misCabeceras,
                   mode: 'cors',
                   cache: 'default' };
    fetch(archivoPagina, miInit)
    .then((response)=>{
        response.text()
            .then((source)=>{
                    var template = Handlebars.compile(source);
                    $('#contenido').html(template());
            })
    })
    .catch((error)=>{
        console.log(error);
    });

}