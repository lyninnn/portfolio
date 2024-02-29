
const sec = document.querySelector('.main2');
const toggle = document.querySelector('.boton');
const toggleicon = document.getElementById('toggleicon')
let showMenu = false
toggle.onclick = function () {
    sec.classList.toggle('dark')
    if (showMenu) {
        toggleicon.src = './img/luna.png'
        showMenu = false
    } else {
        toggleicon.src = './img/sol.png'
        showMenu = true
    }
}






const datos = {
    nombre: "",
    email: "",
    mensaje: "",
    telefono:""
}
const nombre = document.querySelector('#nombre')
const email= document.querySelector('#email')
const telefono=document.querySelector('#telefono')
const mensaje=document.querySelector('#mensaje')
const form = document.querySelector('.formulario')

function leerTexto(e){
   datos[e.target.id]=e.target.value;
    console.log(datos)
}
nombre.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)
telefono.addEventListener('input',leerTexto)



form.addEventListener('submit',function(e){
    e.preventDefault()
    //Comprobar que no haya campos en datos vacio
    const {nombre,email,mensaje,telefono}=datos;
    // console.log(nombre)

    if(nombre==="" || email===""|| mensaje==="" || telefono=== null){
        //si esta vacio algun campo mostrar error
        // mostrarError("Todos los campos son obligatorio")
        mostrarInfo("error, introduce informacion",'error')
        console.log('error')
        // return 
    }else{
        console.log('correcto')
        console.log("ahora si para")
        // mostrarMensaje("mensaje enviado correctamente")
        mostrarInfo("enviado correctamente",'correcto')
    }

    //si todo esta correcto enviar y mostrar mensaje de enviado

    
})
function mostrarInfo(mensaje,clase){
    const alerta = document.createElement('p')
    alerta.textContent=mensaje
    alerta.classList.add(clase)
    form.appendChild(alerta)

    desaparecer(alerta)
    // setTimeout(()=>{
    //     alerta.remove();
    // },2000)

}

function desaparecer(e){
    var efecto = setInterval(function(){
        if(!e.style.opacity){
            e.style.opacity=1;
        }
        if(e.style.opacity>0){
            e.style.opacity-=0.01
        }else{
            clearInterval(efecto)
        }},50)

        setTimeout(()=>{
        e.remove()
        },5000)
    }
