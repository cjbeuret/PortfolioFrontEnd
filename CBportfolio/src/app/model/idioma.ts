export class Idioma {
    //insertar atributos y tipo de datos y el contructor sin id

    id: number; 
    idioma : string;
    porcentaje : number;
    progreso: string;
    comentario : string;
    personaid : number; //esto no sé si va
    
    constructor(/*id: number,*/ idioma : string, porcentaje: number, comentario: string, progreso: string, personaid: number){
        /*this.id = id;*/
        this.idioma = idioma;
        this.porcentaje = porcentaje;
        this.progreso = progreso;
        this.comentario = comentario;
        this.personaid = personaid;
    }

}
