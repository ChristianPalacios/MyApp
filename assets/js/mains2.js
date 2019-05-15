let permission;

verifyingNotificationPermission();

loadPage = (arcPage) => {
    var misCabeceras = new Headers();
    var miInit = { method: 'GET',
    headers: misCabeceras,
    mode: 'cors',
    cache: 'default' };
    
    fetch(arcPage, miInit)
    .then((response)=>{
        response.text()
        .then((source)=>{
            var template = Handlebars.compile(source);
            $('#contenidohandlebars').html(template(JSON.parse(localStorage.getItem('tasks'))));
            
            getUbication().then((objeto_position) => {
                console.log(objeto_position);
                showUbication();
                latitud = objeto_position.coords.latitude;
                longitud = objeto_position.coords.longitude;
                document.getElementById('latitud').value = latitud;
                document.getElementById('longitud').value = longitud;
            });
            if(localStorage.getItem("tasks")){
                createCard(); 
            } else {
                console.log("warning");
            }
        });
    })
    .catch((error)=>{
        console.log(error);
    });
}

if(localStorage.getItem("tasks")) {
    var tasks = JSON.parse(localStorage.getItem("tasks"));
} else {
    var tasks = [];
}
btnGuardarClick = () => {
    let title =  document.querySelector('#title').value;
    let description =  document.querySelector('#description').value;
    let date = document.querySelector('#date').value;
    
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    document.getElementById('date').value = "";
    
    //using local storage
    if(typeof(Storage) !== 'undefined') {
        tasks.push({ title: title, description: description, date: date});
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
        document.getElementById('detailStorage').innerHTML = "Sorry, your web browser does not support web storage";
    }
    
}

showDetailsStorage = () => {
    
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    var newDiv = document.getElementById("detailStorage"); 
    
    tasks.map((item) => {
        var newContent = document.createTextNode("titulo:" +  item.title + 'descripcion:' + item.description); 
        newDiv.appendChild(newContent); //aÃ±ade texto al div creado.
    });
}

createRow = (title, description) => {
    const table = document.getElementById('tasks').getElementsByTagName('tbody')[0];
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = title;
    cell2.innerHTML = description;
    row.className="table-primary";
}

createCard = (withSeach = null) => {
    
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    
    if(!tasks) {
        // $('#divParent').empty();
        
        // let title = document.getElementById('title').value;
        
        // let result = tasks.filter((item) => {
        //     return item.title === title;
        // });
        
        // var card = `
        // <div class="container-fluid">
        // <div class="card bg-light mb-3" style="max-width: 50rem;">
        // <div class="card-header">Header</div>
        // <div class="card-body">
        // <h4 class="card-title">${result[0].title}</h4>
        // <p class="card-text">${result[0].description}.</p>
        // </div>
        // </div>
        // </div>`;
        // var div = document.createElement('div');
        // document.getElementById('divParent').appendChild(div);
        // div.innerHTML = card;  
        
    } else {
        document.getElementById('btnFetch').classList.remove('disabled');
        tasks.map((item, index) => {
            var card = `
            <div class="container-fluid">
            <div class="card bg-light mb-3" style="max-width: 50rem;">
            <div class="card-header">${item.date}</div>
            <div class="card-body">
            <h4 class="card-title">${item.title}</h4>
            <p class="card-text">${item.description}.</p>
            </div>
            </div>
            </div>`;
            var div = document.createElement('div');
            document.getElementById('divParent').appendChild(div);
            div.innerHTML = card;
        })
    }
}

function getUbication() {
    return new Promise( (resolve, reject) => {
        if("geolocation" in navigator){
            navigator.geolocation
                .getCurrentPosition(
                    function(coordenadas){ resolve(coordenadas)}, 
                    function(error){ reject(error)}
                )
        }
    })
//    return new Promise((resolve, reject) => {
//        if ('geolocation' in navigator) {
//         navigator.geolocation.getCurrentPosition((coords) => resolve(coords), (error) => reject(error));
//        }
//    });
}

function loaderUnVisible() {
    let loading = document.getElementById('loading');
    loading.classList.remove('visible');
}

function loaderVisible() {
   let loading = document.getElementById('loading');
   loading.classList.add('visible');
}


function verifyingNotificationPermission() {
        loaderVisible();
        Notification.requestPermission().then(permission => {
                loaderUnVisible();
                console.log(permission);
        });  
}

verifyingDate = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if(taks) {
        tasks.map((item) => {
          console.log(item.date);
        });
    }
}

function showUbication() {
    getUbication().then((objeto_position) => {
        latitud = objeto_position.coords.latitude;
        longitud = objeto_position.coords.longitude;
        var divChild = `<div class="jumbotron"><h1 class="display-5">Actual ubication:</h1>
        <p id="platitud">Latitud: ${latitud}</p>
        <hr class="my-4">
        <p id="plongitud">Longitud: ${longitud}</p>
        <p class="lead">
        </p>
        </hr></div>`;
        var div = document.createElement('div');
        document.getElementById('profile').appendChild(div);
        div.innerHTML = divChild;
    });
}

function fetchCall() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
       alert("saved remiders");
    })
    .catch((error) => {
       console.log(error);
    }); 
}
//HANDLEBARS clase 4
// var source   = document.getElementById("entry-template").innerHTML;
// var template = Handlebars.compile(source);
// var context = {
//     people: [
//         {title: "My New Post1", body: "This is my first post!"},
//         {title: "My New Post2", body: "This is my first post!"},
//         {title: "My New Post3", body: "This is my first post!"}
//     ]
// };
// var html    = template(context);
// $('#contenidohandlebars').html(html);


    // https://jsonplaceholder.typicode.com/posts
    // UTILIZAR SYNC ESTA API POR GET y guardar los recordatorios EN LA API.
    // Implementar las notificaciones push MENSAJE PERSONALIZADO.
    // si se encuentran desconectados guardar los recordatorios que no se pudieron enviar.
    // y reintentar 
