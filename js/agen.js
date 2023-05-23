
function validacion(){
    
    var run = $("#run").val();
    var nom = $("#name").val();
    var app = $("#paterno").val();
    var apm = $("#materno").val();
    var cel = $("#telefono").val();
    var pass = $("#contrasena").val();
    var confipass = $("#conficontrasena").val();
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
