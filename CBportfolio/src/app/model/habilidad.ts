export class Habilidad {
    //insertar atributos y tipo de datos y el contructor sin id

    id: number; 
    span : string;
    nombreHab : string;
    porcentaje : number;
    progreso : string;
    personaid : number; //esto no sé si va
    
    constructor(id: number, span : string, nombreHab: string, porcentaje: number, progreso: string, personaid: number){
        this.id = id;
        this.span = span;
        this.nombreHab = nombreHab;
        this.porcentaje = porcentaje;
        this.progreso = progreso;
        this.personaid = personaid;
    }
    
}
