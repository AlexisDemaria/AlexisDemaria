import Swal from 'sweetalert2'  

export const alert = () => {
    Swal.fire({
        title: '¡Listo!',
        text: 'Su compra fue realizada con exito. ¡Muchas Gracias!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
    return alert
}