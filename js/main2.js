
function validacion(){
    
    var run = $("#run").val();
    var nom = $("#name").val();
    var app = $("#paterno").val();
    var apm = $("#materno").val();
    var cel = $("#telefono").val();
    var pass = $("#contrasena").val();
    var confipass = $("#conficontrasena").val();



    

    if(run.length < 9 || run.length > 10){    
        alert('Run invalido');
    }if(nom.length < 3 || nom.length > 20){
        alert('Nombre Invalido');
    }if(app.length < 3 || app.length > 20){
        alert('Apellido Paterno Invalido!')
    }if(apm.length < 3 || apm.length > 20){
        alert('Apellido Materno Invalido!')
    }if(cel.length < 3 || cel.length > 20){
        alert('Telefono Invalido!')
    }if(pass.length < 3 || pass.length > 20){
        alert('Contraseña Invalido!')
    }if(confipass != pass){
        alert('Las Contraseñas No Son Iguales, Tiene 3 intentos hasta que se destruya el dispositivo!')
    }else{
        alert('Registro Creado Con Exito!');
    }

}

function validacionInicio(){
    var usu = $("usuario").val();
    var email = $("email").val();
    var pass = $("password").val();
    var admin = 'admin';

    if(usu == admin && pass == admin){
        alert('Inicio de Sesion Correcto');
    }else{
        alert('Usuario o Contraseña Incorrectos');
    }
        

}

function validacionagenda(){
    
    var run = $("#run").val();
    var cel = $("#telefono").val();
    var nomc = $("nomc").val();



    

    if(run.length < 9 || run.length > 10){    
        alert('Run invalido');
    }if(nomc.length < 3 || nomc.length > 50){
        alert('Nombre Invalido');
   
    }if(cel.length < 3 || cel.length > 20){
        alert('Telefono Invalido!')
    }if(pass.length < 3 || pass.length > 20){
        alert('Contraseña Invalido!')
    }else{
    }alert('Cita Agendada Con Exito!');
}



let year = document.getElementById('year');
let dinamicYear = new Date().getFullYear();
year.innerHTML = dinamicYear;