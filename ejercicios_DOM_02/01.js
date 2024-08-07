/*
Tareas a realizar
Guarda en localStorage el arreglo con la clave 'users'
Crea una tabla que muestre los datos de todos los usuarios incluida una imagen de su avatar.
Crea una función que te permita agregar un usuario nuevo. La carga de los datos se debe hacer a través de un
formulario sencillo y la función se debe llamar en el evento submit del formulario.
Agrega un botón en la tabla, por cada usuario, que permita borrar el registro. Debes crear la función que realice
esa acción y agregar el evento al botón.
Usa bootstrap para los estilos de la web.
IMPORTANTE
Todo cambio en los registros de usuarios debe guardarse en localStorage.
*/


let usuarios = [
    {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
];

let usuariosJson = JSON.stringify(usuarios);

localStorage.setItem('users', 'usuariosJson');

function agregarUsuario (
    email,
    first_name,
    last_name,
    avatar) {

    const id = usuarios.length + 1;
        
    const nuevoUsuario = {
        id,
        email,
        first_name,
        last_name,
        avatar

    }
    
    usuarios.push(nuevoUsuario);
    usuariosJson = usuarios;
    
}





