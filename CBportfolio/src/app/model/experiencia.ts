export class Experiencia {

    id_experiencia: number; 
    empresa: string;
    logo: string;
    url : string;
    cargo : string;
    descPuesto : string;
    inicio : string;
    fin : string;
    id_persona : number; //esto no sé si va

    constructor (id_experiencia: number, empresa: string, logo: string, url : string, cargo : string, descPuesto : string, inicio : string, fin : string, id_persona : number){
        this.id_experiencia = id_experiencia;
        this.empresa = empresa;
        this.logo = logo;
        this.url = url;
        this.cargo = cargo;
        this.descPuesto = descPuesto;
        this.inicio = inicio;
        this.fin = fin;
        this.id_persona = id_persona; 
    }
        
}
