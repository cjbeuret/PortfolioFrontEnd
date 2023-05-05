export class Educacion {

    id_educacion: number; 
    institucion: string;
    logo: string;
    url : string;
    titulo : string;
    alcanceTitulo : string;
    fechaObt : string;
    comentario : string;
    id_persona : number; //esto no sé si va

    constructor (id_educacion: number, institucion: string, logo: string, url : string, titulo : string, alcanceTitulo : string, fechaObt : string, comentario : string, id_persona : number){
        this.id_educacion = this.id_educacion;
        this.institucion = institucion;
        this.logo = logo;
        this.url = url;
        this.titulo = titulo;
        this.alcanceTitulo = alcanceTitulo;
        this.fechaObt = fechaObt;
        this.comentario = comentario;
        this.id_persona = id_persona; 
    }

}
