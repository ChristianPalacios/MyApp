<form>
    <fieldset>
        <legend>Agregar Recordatorio</legend>
        
        <div class="card border-success mb-3" style="max-width: 20rem;">
        <div class="card-body">
            <h4 class="card-title">Titulo</h4>
            <p class="card-text">
            <input 
                type="text" 
                class="form-control" 
                aria-describedby="emailHelp" 
                placeholder="Titulo de la tarea a realizar"
                id="inputTitulo"
                />
            <small id="emailHelp" class="form-text text-muted">Descripción corta de la tarea a realizar</small>
            
            <div class="form-group">
            <label for="descripcion">Descripción de nuestra tarea</label>
            <textarea id="textareaDescripcion" class="form-control" id="descripcion" rows="3"></textarea>
            </div>

            <center><button type="button" class="btn btn-primary" id="btnGuardar" >Guardar</button></center>
        
            </p>
        </div>
        </div>
        
        <div class="card border-success mb-3" style="max-width: 20rem;">
        <div class="card-body">
            <h4 class="card-title">Coordenadas</h4>
            <p class="card-text">
            <input 
                type="text" 
                class="form-control" 
                id="latitud"
                />
            <input 
                type="text" 
                class="form-control" 
                id="longitud"
                />
            </p>
        </div>
        </div>
    </fieldset>

    <button type="button" onclick="llamadaafetch();" class="btn btn-secondary" id="btnFetch">Llamar a fetch</button>

</form>

