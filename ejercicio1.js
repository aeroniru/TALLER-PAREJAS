
let clientes = [
    {nombre:"Ana Lopez", correos:"analopez@gmail.com", edad:25},
    {nombre:"Pedro Medez", correos:"pedro@email.com", edad:30},
    {nombre:"Zaira Ortiz", correos:"zaira@hotmail.com", edad:35}
]

function agregarCliente(){
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let correos = parseFloat(prompt(`Ingrese el correo de ${nombre}: `));
    let edad = parseInt(prompt(`Ingrese la edad ${nombre}: `));

    clientes.push({nombre,correos,edad})
    console.log("Estudiante agregado");
}

function eliminarCliente(){
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let index = clientes.findIndex(cliente=>
        cliente.nombre.toLowerCase()== nombre.toLowerCase())
    
        if(index !== -1){
            clientes.splice(index,1)
            console.log("Cliente eliminado")
        
        }else{
            console.log("Cliente no encontrado")
        }
}

function mostrarCliente(){

    if(clientes.length===0){
        console.log("No hay clientes registrados")
        return;
    }
    console.log("Lista de clientes");
    clientes.forEach(cliente=>{
        console.log(`-${cliente.nombre}: ${cliente.correos.edad}`)
    })
}

function mostrarClientesOrd(){
    clientes.sort((a,b)=>a-b) //Ordena ASC
    console.log(clientes)
}

function calcularPromedio(){
    if(clientes.length===0){
        console.log("No hay edades registradas")
        return
    }

    let sum = clientes.reduce((total,cliente)=>total + cliente.edad,0)
    console.log(`Promedio de edades: ${(sum/clientes.length).toFixed(2)}`)
}

band = true;
while (band) {

    console.log("\n Bienvenido al Gestor de Clientes")
    console.log("1. Agregar cliente")
    console.log("2. Eliminar cliente ")
    console.log("3. Buscar cliente")
    console.log("4. Mostrar clientes ordenados ")
    console.log("5. Calcular edad promedio")
    console.log("6. Salir")
    
    let menu = parseInt(prompt("Seleccione una opcion: "))

    switch (menu) {
        case 1:
            agregarCliente();
            break;
        case 2:
            eliminarCliente();
            break;
        case 3:
            mostrarCliente();
            break;
        case 4:
            mostrarClientesOrd();
            break;
        case 5:
            calcularPromedio();
            break;
        case 6:
            console.log("Saliendo.")
            band = false;
            break;
        default:
            console.log("Opción no valida.")
    }
}
