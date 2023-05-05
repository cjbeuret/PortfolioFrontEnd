export class Domicilio {

    id_domicilio: number; 
    calle: string;
    altura: string;
    piso : string;
    localidad : string;
    provincia : string;
    mapa : string;
    id_persona : number; //esto no sé si va
    
    constructor (id_domicilio: number, calle: string, altura: string, piso : string, localidad : string, provincia : string, mapa : string, id_persona : number){
        this.id_domicilio = id_domicilio;
        this.calle = calle;
        this.altura = altura;
        this.piso = piso;
        this.localidad = localidad;
        this.provincia = provincia;
        this.mapa = mapa;
        this.id_persona = id_persona; 
    }


}
