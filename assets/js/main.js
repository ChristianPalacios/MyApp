   

let latitud, longitud;
let permission;

verifyingNotificationPermission();

function verifyingNotificationPermission() {
    loaderVisible();
    Notification.requestPermission().then(permission => {
           loaderInvisible();
            console.log(permission);
    });  
}


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
            getUbicacion().then((objeto_position) => {
                latitud = objeto_position.coords.latitude;
                longitud = objeto_position.coords.longitude;
                document.getElementById('latitud').value = latitud;
                document.getElementById('longitud').value = longitud;
            })
    })
    .catch((error)=>{
        console.log(error);
    });
}

function loaderVisible(){
    let overlay = document.getElementById('loading');
    overlay.classList.add('visible');
}

function loaderInvisible(){
    let overlay = document.getElementById('loading');
    overlay.classList.remove('visible');
}

function solicitarPermisosPush(){
    loaderVisible();
    Notification.requestPermission()
    .then((respuesta_del_usuario) => {
        loaderInvisible();
        //granted
        //default
        //denied
        console.log(respuesta_del_usuario);
    });
}



function getUbicacion(){
    return new Promise( (resolve, reject) => {
        if("geolocation" in navigator){
            navigator.geolocation
                .getCurrentPosition(
                    function(coordenadas){ resolve(coordenadas)}, 
                    function(error){ reject(error)}
                )
        }
    })
}


function llamadaafetch(){
    let promesafetch = fetch('https://jsonplaceholder.typicode.com/posts/1');
    promesafetch
    .then((result)=> result.json())
    .then(json => console.log(json));

}


