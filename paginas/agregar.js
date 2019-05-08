<br>
<center>
<div class="card border-danger mb-3" style="max-width: 20rem;">
  <div class="card-header"></div>
  <div class="card-body">
    
    <p class="card-text">
    
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
            <small id="emailHelp" class="form-text text-muted">Descripcion corta de la tarea a realizar</small>
        </div>
        
        <div class="form-group">
            <label for="descripcion">Descripcion de nuestra tarea</label>
            <textarea id="textareaDescripcion" class="form-control" id="descripcion" rows="3"></textarea>
        </div>
        
        <button type="button" class="btn btn-primary" id="btnGuardar" >Guardar</button>
    </fieldset>
    </form> 

    </p>
  </div>
</div>
</center>