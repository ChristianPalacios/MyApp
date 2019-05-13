<form>
    <fieldset>
        <legend>Agregar Recordatorio</legend>
        
        <div class="form-group">
            <label for="titulo">Titulo</label>
            <input 
                type="text" 
                class="form-control" 
                aria-describedby="emailHelp" 
                placeholder="Titulo de la tarea a realizar"
                id="inputTitulo"
                />
            <small id="emailHelp" class="form-text text-muted">Descripción corta de la tarea a realizar</small>
        </div>
        
        <div class="form-group">
            <label for="descripcion">Descripción de nuestra tarea</label>
            <textarea id="textareaDescripcion" class="form-control" id="descripcion" rows="3"></textarea>
        </div>
        
        <div class="form-group">
            <label for="titulo">Coordenadas</label>
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
        </div>

        <button type="button" class="btn btn-primary" id="btnGuardar" >Guardar</button>
    </fieldset>

    <button type="button" onclick="llamadaafetch();" class="btn btn-secondary" id="btnFetch">Llamar a fetch</button>

</form>

