export class Experiencia {

    id?: number; 
    empresa: string;
    logo: string;
    url : string;
    cargo : string;
    descPuesto : string;
    inicio : string;
    fin : string;
    personaid : number; //esto no sé si va

    constructor (empresa: string, logo: string, url : string, cargo : string, descPuesto : string, inicio : string, fin : string, personaid : number){
        this.empresa =empresa;
        this.logo = logo;
        this.url = url;
        this.cargo = cargo;
        this.descPuesto = descPuesto;
        this.inicio = inicio;
        this.fin = fin;
        this.personaid = personaid;
    }
        
}
