export class Habilidad {
    //insertar atributos y tipo de datos y el contructor sin id

    id?: number;
    imagen : string;
    nombreHab : string;
    porcentaje : number;
    personaid : number;
    
    constructor(imagen : string, nombreHab: string, porcentaje: number, personaid: number){
        this.imagen = imagen;
        this.nombreHab = nombreHab;
        this.porcentaje = porcentaje;
        this.personaid = personaid;
    }
}
