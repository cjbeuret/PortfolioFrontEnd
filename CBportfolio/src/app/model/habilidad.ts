export class Habilidad {
    //insertar atributos y tipo de datos y el contructor sin id

    id: number; 
    imagen : string;
    nombreHab : string;
    porcentaje : number;
    personaid : number; //esto no sé si va
    
    constructor(/*id: number,*/ imagen : string, nombreHab: string, porcentaje: number, personaid: number){
        /*this.id = id;*/
        this.imagen = imagen;
        this.nombreHab = nombreHab;
        this.porcentaje = porcentaje;
        this.personaid = personaid;
    }
    
}
