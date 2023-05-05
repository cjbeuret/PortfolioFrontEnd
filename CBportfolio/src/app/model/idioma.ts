export class Idioma {
    //insertar atributos y tipo de datos y el contructor sin id

    id_idioma: number; 
    idioma : string;
    porcentaje : number;
    progreso: string;
    comentario : string;
    id_persona : number; //esto no sé si va
    
    constructor(id_idioma: number, idioma : string, porcentaje: number, comentario: string, progreso: string, id_persona: number){
        this.id_idioma = id_idioma;
        this.idioma = idioma;
        this.porcentaje = porcentaje;
        this.progreso = progreso;
        this.comentario = comentario;
        this.id_persona = id_persona;
    }

}
