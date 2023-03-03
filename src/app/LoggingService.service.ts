export class LogginService{
    enviarMensajeAConsola({ mensaje }: { mensaje: string; }){
        console.log(mensaje)
    }
}