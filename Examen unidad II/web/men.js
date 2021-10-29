let N_banda = [];
let G_banda = [];
let A_banda = [];
let N_album = [];
let B_album = [];
let A_album = [];
let A_Cancion = [];
let N_Cancion = [];
let D_Cancion = [];
let Verificar = "False";
let buscar;
let b = 0;
let a = 0;
let c = 0;

function prueba(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Emos conectado mis amores',
        showConfirmButton: false,
        timer: 1500
      });
}

function registrobanda(){
    N_banda[b] = document.getElementById("Nombre_B").value;
    G_banda[b] = document.getElementById("Genero_B").value;
    A_banda[b] = document.getElementById("Año_B").value;
    b = b+1;

    var Bandas = document.getElementById("Banda_A");
    for(let i = 0;i < b;i++){
        Bandas.options[i] = new Option(N_banda[i]);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se a registrado de manera correcta',
            showConfirmButton: false,
            timer: 1500
          });
    }
}
function registroalbum(){
    if(b>0){
        N_album[a] = document.getElementById("Nombre_A").value;
        B_album[a] = document.getElementById("Banda_A").value;
        A_album[a] = document.getElementById("Año_A").value;
        a = a+1;

        var Albums = document.getElementById("Album_C");
        for(let j = 0;j < a;j++){
            Albums.options[j] = new Option(N_album[j]);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se a registrado de manera correcta',
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tenemos registro de bandas',
            footer: 'Profe lo amoo'
        });
    }
    
}
function registrocancion(){
    if(b>0){
        if(a>0){
            A_Cancion[c] = document.getElementById("Album_C").value;
            N_Cancion[c] = document.getElementById("Nombre_C").value;
            D_Cancion[c] = document.getElementById("Duracion_C").value;
            c = c+1;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se a registrado de manera correcta',
                showConfirmButton: false,
                timer: 1500
            });
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No tenemos registro de albums',
                footer: 'Profe lo amoo'
            });
        }
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tenemos registro de bandas',
            footer: 'Profe lo amoo'
        });
    }
}

function buscarcancion(){
    if(c>0){
        let Buscar = document.getElementById("Buscar").value;
        for(let f = 0;f<N_Cancion.length;f++){
            if(N_Cancion[f] == Buscar){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cansion encontrada',
                    showConfirmButton: false,
                    timer: 1500
                });
                Verificar = "True";
                document.getElementById("tab").innerHTML="";
                document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+ 
                            `<tr>
                                <td> ${"#"}</td>
                                <td> ${"Cancion"}</td>
                                <td> ${"Album"}</td>
                                <td> ${"Duracion"}</td>
                            </tr>`;
                document.getElementById("c1").innerHTML="/";
                document.getElementById("c2").innerHTML=N_Cancion[f];
                document.getElementById("c3").innerHTML=A_Cancion[f];
                document.getElementById("c4").innerHTML=D_Cancion[f];
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Se completo la busqueda',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        if(Verificar == "FaLse"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No Encontramos la cancion solicitada',
                footer: 'Profe lo amoo'
            });
        }
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tenemos ningun dato',
            footer: 'Profe lo amoo'
        });
    }
}
function mostraralbum(){
    document.getElementById("tab").innerHTML="";
    document.getElementById("t1").innerHTML="#";
    document.getElementById("t2").innerHTML="Album";
    document.getElementById("t3").innerHTML="Cancion";
    document.getElementById("t4").innerHTML="Duracion";
    if(a>0){
        let Buscar = document.getElementById("Buscar").value;
        for(let f = 0;f<A_Cancion.length;f++){
            if(A_Cancion[f] == Buscar){
                Verificar = "True";
                document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+ 
                            `<tr>
                                <td> ${"/"}</td>
                                <td> ${A_Cancion[f]}</td>
                                <td> ${N_Cancion[f]}</td>
                                <td> ${D_Cancion[f]}</td>
                            </tr>`;
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Se completo la busqueda',
                                showConfirmButton: false,
                                timer: 1500
                            });
            }
        }
        if(Verificar == "FaLse"){
             Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No encontramos alnum',
                footer: 'Profe lo amoo'
            });
        }
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tenemos ningun dato',
            footer: 'Profe lo amoo'
        });
    }
}
function mostrargenero(){
    document.getElementById("tab").innerHTML="";
    document.getElementById("t1").innerHTML="#";
    document.getElementById("t2").innerHTML="Genero";
    document.getElementById("t3").innerHTML="Banda";
    document.getElementById("t4").innerHTML="Albums";
    if(b>0){
        let Buscar = document.getElementById("Buscar").value;
        for(let f = 0;f<N_banda.length;f++){
            if(G_banda[f] == Buscar){
                Verificar = "True";
                for(let g = 0;g<N_album.length;g++){
                    if(B_album[g] == N_banda[f]){
                        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+ 
                                    `<tr>
                                        <td> ${"/"}</td>
                                        <td> ${G_banda[f]}</td>
                                        <td> ${N_banda[f]}</td>
                                        <td> ${N_album[g]}</td>
                                    </tr>`;
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Se completo la busqueda',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            }
        }
        if(Verificar == "FaLse"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No encontramos alnum',
                footer: 'Profe lo amoo'
            });
        }
    }
    else{
        alert("No hay datos");Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tenemos ningun dato',
            footer: 'Profe lo amoo'
        });
    }
}
function mostrartodo(){
    document.getElementById("tab").innerHTML="";
    document.getElementById("t1").innerHTML="#";
    document.getElementById("t2").innerHTML="Cancion";
    document.getElementById("t3").innerHTML="Album";
    document.getElementById("t4").innerHTML="Duracion";
    if(c>0){
        let Buscar = document.getElementById("Buscar").value;
        for(let f = 0;f<N_Cancion.length;f++){
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+ 
                            `<tr>
                                <td> ${"/"}</td>
                                <td> ${N_Cancion[f]}</td>
                                <td> ${A_Cancion[f]}</td>
                                <td> ${D_Cancion[f]}</td>
                            </tr>`;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se completo la busqueda',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
}
$("#btn-opcion").click(function(){            
    let opc = $("#opcion").val();
    
    switch(opc){
        case "1":
            buscarcancion();
        break;
        case "2":
            mostraralbum();
        break;
        case "3":
            mostrargenero();
        break;
        case "4":
            mostrartodo();
        break;
    }
});