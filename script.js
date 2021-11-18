function validar(){
    var nombre = document.getElementById("name").value;
    var Email = document.getElementById("Email").value;
    var Telefono = document.getElementById("phone").value;
    var Ciudad = document.getElementById("City").value;
    var modelo = document.getElementById("model").value;

    if((Telefono!=null)&&(!isNaN(Telefono))&&(nombre!=null)&&(Email!=null)&&(Ciudad!=null)&&(modelo!=null)){
        alert("Datos Agregados corrrectamente")
    }else{
        alert("Error en los datos, favor verificarlos")
    }
}