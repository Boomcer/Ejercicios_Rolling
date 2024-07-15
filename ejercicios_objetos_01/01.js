/*
Tarea: Sistema de pacientes

1 - Crea una clase para crear objetos con datos de pacientes. 
Los datos serían:
- Nombre
- Fecha de nacimiento
- Género
- DNI
- Dirección
- Teléfono
- email
- número de historia clínica
- Enfermedad pre-existente
La clase debe tener las siguientes funciones:
- mostrarDatosPersonales: Lista en pantalla los datos nombre, DNI, dirección, telefono e email.
- mostrarDatosClinicos: Lista en pantalla los datos nombre, DNI, número de historia clínica y enfermedad pre-existente.

2 - Escribe una función que te permita agregar pacientes a un array y al finalizar muestre los datos clínicos de los mismos.

3 - Escribe una función que permita eliminar un paciente por su DNI

4 - Escribe una función que permita buscar pacientes por DNI y otra que permita hacer la búsqueda por nombre (puede devolver más de un paciente que coincida con la búsqueda)

5 - Escribe una función que ordene la lista de pacientes por nombre

*/

let pacientes = [];

class paciente {
    constructor(nombre, fechaNacimiento, genero, dni, direccion, telefono, email = "", num_historia_clinica = 0, enfermedad_preExistente = "Ninguna"){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
        this.dni = dni;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.num_historia_clinica = num_historia_clinica;
        this.enfermedad_preExistente = enfermedad_preExistente;
    }

    datosPersonales(){
        document.write(`Nombre: ${this.nombre}<br>
            DNI: ${this.dni}<br>
            Direccion: ${this.direccion}<br>
            Telefono: ${this.telefono}<br>
            Email: ${this.email}<br>
            -------------------------- <br>`);
    }

    datosClinicos(){
        document.write(`Nombre: ${this.nombre} <br>
        DNI: ${this.dni} <br>
        Numero de historial clinico: ${this.num_historia_clinica} <br>
        Enfermedad pre-existente: ${this.enfermedad_preExistente} <br>
        -------------------------- <br>`);
    }

}


function agregarPaciente(
    nombre,
    fechaNacimiento,
    genero,
    dni,
    direccion,
    telefono,
    email,
    enfermedad_preExistente) {

        const num_historia_clinica = pacientes.length;

        let nuevoPaciente = new paciente(
            nombre,
            fechaNacimiento,
            genero,
            dni,
            direccion,
            telefono,
            email,
            num_historia_clinica,
            enfermedad_preExistente
        )
    pacientes.push(nuevoPaciente);
    console.log(pacientes.at(-1).datosClinicos())
}

function mostrarDatosPersonasles(pacientes) {
    pacientes.forEach(paciente => {
        paciente.datosPersonales();
    });
}

function mostrarDatosClinicos(pacientes) {
    pacientes.forEach(paciente => {
        paciente.datosClinicos();
    });
}

function eliminarPaciente(pacientes, dni) {
    const index = pacientes.findIndex(paciente => paciente.dni === dni);
    if (index !== -1) {
        let pacienteEliminado = pacientes[index].nombre;
        pacientes.splice(index, 1);
        console.log(`El paciente ${pacienteEliminado} ha sido eliminado.`);
    } else {
        console.log(`No se encontró el paciente con dni ${dni}.`);
    }
}

function buscarPorDni(pacientes, dni) {
    const index = pacientes.findIndex(paciente => paciente.dni === dni);
     document.write(pacientes[index].datosPersonales);
}

agregarPaciente('Nicolas Gallardo',
    '19/06/98',
    'masculino',
    '41299976',
    'Necochea 461',
    '381440057');

    agregarPaciente('María López',
    '1985/04/12',
    'Femenino',
    '12345678A',
    'Calle Falsa 123',
    '+34 600 123 456',
    'maria.lopez@example.com',
    'Hipertensión')
