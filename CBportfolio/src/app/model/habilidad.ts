export class Habilidad {
    //insertar atributos y tipo de datos y el contructor sin id

    id_habilidad: number; 
    span : string;
    nombreHab : string;
    porcentaje : number;
    progreso : string;
    id_persona : number; //esto no sé si va
    
    constructor(id_habilidad: number, span : string, nombreHab: string, porcentaje: number, progreso: string, id_persona: number){
        this.id_habilidad = id_habilidad;
        this.span = span;
        this.nombreHab = nombreHab;
        this.porcentaje = porcentaje;
        this.progreso = progreso;
        this.id_persona = id_persona;
    }
    
}
