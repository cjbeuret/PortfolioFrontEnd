export class Domicilio {

    id: number; 
    calle: string;
    altura: string;
    piso : string;
    localidad : string;
    provincia : string;
    mapa : string;
    personaid : number; //esto no sé si va
    
    constructor (/*id: number,*/ calle: string, altura: string, piso : string, localidad : string, provincia : string, mapa : string, personaid : number){
        /*this.id = id;*/
        this.calle = calle;
        this.altura = altura;
        this.piso = piso;
        this.localidad = localidad;
        this.provincia = provincia;
        this.mapa = mapa;
        this.personaid = personaid; //o personaId?
    }


}
