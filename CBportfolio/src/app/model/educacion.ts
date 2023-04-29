export class Educacion {

    id: number; 
    institucion: string;
    logo: string;
    url : string;
    titulo : string;
    alcanceTitulo : string;
    comentario : string;
    personaid : number; //esto no sé si va

    constructor (/*id: number,*/ institucion: string, logo: string, url : string, titulo : string, alcanceTitulo : string, comentario : string, personaid : number){
        /*this.id = id;*/
        this.institucion = institucion;
        this.logo = logo;
        this.url = url;
        this.titulo = titulo;
        this.alcanceTitulo = alcanceTitulo;
        this.comentario = comentario;
        this.personaid = personaid; //o personaId?
    }

}
