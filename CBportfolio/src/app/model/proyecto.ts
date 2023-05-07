export class Proyecto {

    id_proyecto: number; 
    tituloProyecto: string;
    imagen: string;
    url : string;
    destinatario : string;
    descProyecto : string;
    periodoDesarrollo : string;
    id_persona : number; //esto no sé si va

    constructor (id_proyecto: number, tituloProyecto: string, imagen: string, url : string, destinatario : string, descProyecto : string, periodoDesarrollo : string, id_persona : number){
        this.id_proyecto = id_proyecto;
        this.tituloProyecto = tituloProyecto;
        this.imagen = imagen;
        this.url = url;
        this.destinatario = destinatario;
        this.descProyecto = descProyecto;
        this.periodoDesarrollo = periodoDesarrollo;
        this.id_persona = id_persona; 
    }

}
