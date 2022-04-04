function getUsuarios(){
    return [{id, nombre, usuario, rol}]
}

function login(usuario, Campo, pass){
    let Usuario = new Promise((resolve, reject)=> {
          resolve("¡Éxito!"); 
          reject("Usuario o contrasea inválida");
      })
    return Usuario;
}
function guardar(nombre, usuario, rol, password){
    let Usuario = new Promise((resolve, reject)=> {
        if(algo){
            resolve("¡Éxito!"); 
            return Usuario
        }
        else reject("mal");
    })
}
function actualizar(nombre, usuario, rol, password){
    let Usuario = new Promise((resolve, reject)=> {
        if(algo){
            resolve("¡Éxito!"); 
            return Usuario
        }
        else reject("mal");
    })
}
function borrar(id){
    new Promise((resolve, reject)=> {
        if(borrado?){
            resolve("¡Éxito!"); 
        }
        else reject("mal");
    })
}
function getPorId(id){
    new Promise((resolve, reject)=> {
        if(encontrado??){
            resolve("¡Éxito!"); 
            return usuario
        }
        else reject("Usuario no encontrado");
    })
}
function getPerfil(){
    new Promise((resolve, reject)=> {
        if(logueado??){
            resolve("¡Éxito!"); 
            return usuario
        }
        else reject("Usuario no encontrado");
    })
}