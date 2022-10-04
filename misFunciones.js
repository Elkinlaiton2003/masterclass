

function leerClientes(){

   
    $.ajax({
        url:'https://g3e2c7973baac70-idypprmzely38b6j.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type:'GET',
        datatype:'json',

        success: function (clientes) {
            let cs = clientes.items;
            $("#listaClientes").empty();
            for (i=0;i<cs.length;i++) {
                $("#listaClientes").append(cs[i].id+"<b>"+cs[i].name+"</b>"+cs[i].email+""+cs[i].age);
                $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
            }

        },
        error: function (xhr, status) {
            alert("ha sucedido un problema");
        }
    });

}

function guardarCliente(){

    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mailCliente=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    };

    let datatosend=JSON.stringify(data)
    //console.log(datatosend);

    $.ajax({
        url: 'https://g3e2c7973baac70-idypprmzely38b6j.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        //datatype: 'json',
        data:datatosend,
        contenType: 'application/json',
        success: function (respuesta) {

                 ("#idCliente").val("");
                 ("#nombreCliente").val("");
                 ("#mailCliente").val("");
                 ("#edadCliente").val("");

        },
        error: function (xhr, status) {
            // alert("ha sucedido un problema")
        },
        complete: function(){
            leerClientes();
        }

    });

}

function editarCliente(){

    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mailCliente=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idcliente,
        name:nombre,
        email:correo,
        age:edad
    };

    let datatosend=JSON.stringify(data)
    //console.log(datatosend);

    $.ajax({
        url: 'https://g3e2c7973baac70-idypprmzely38b6j.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'PUT',
        //datatype: 'json',
        data:datatosend,
        contenType: 'application/json',

        success: function (respuesta) {
                 ("#idCliente").val("");
                 ("#nombreCliente").val("");
                 ("#mailCliente").val("");
                 ("#edadCliente").val("");

        },
        error: function (xhr, status) {
            // alert("ha sucedido un problema")
        },
        complete: function(){
            leerClientes();
        }
    });

}

function borrarCliente(idCliente){
    let data={
        id:idcliente,
    };

    let datatosend=JSON.stringify(data)
    //console.log(datatosend);

    $.ajax({
        url: 'https://g3e2c7973baac70-idypprmzely38b6j.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'DELETE',
        //datatype: 'json',
        data:datatosend,
        contenType: 'application/json',

        success: function (respuesta) {

                 ("#idCliente").val("");
                 ("#nombreCliente").val("");
                 ("#mailCliente").val("");
                 ("#edadCliente").val("");
        },
        error: function (xhr, status) {
            // alert("ha sucedido un problema")
        },
        complete: function(){
            leerClientes();
        }
    });

}