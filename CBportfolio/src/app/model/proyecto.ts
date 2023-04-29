export class Proyecto {

    id: number; 
    tituloProyecto: string;
    imagen: string;
    url : string;
    destinatario : string;
    descProyecto : string;
    periodoDesarrollo : string;
    personaid : number; //esto no sé si va

    constructor (/*id: number,*/ tituloProyecto: string, imagen: string, url : string, destinatario : string, descProyecto : string, periodoDesarrollo : string, personaid : number){
        /*this.id = id;*/
        this.tituloProyecto = tituloProyecto;
        this.imagen = imagen;
        this.url = url;
        this.destinatario = destinatario;
        this.descProyecto = descProyecto;
        this.periodoDesarrollo = periodoDesarrollo;
        this.personaid = personaid; //o personaId?
    }

}
