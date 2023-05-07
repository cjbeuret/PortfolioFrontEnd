export class Red {
 //insertar atributos y tipo de datos y el contructor sin id

 id_red: number; 
 nombreRed : string;
 span : string;
 url : string;
 id_persona : number; //esto no sé si va
 
 constructor(id_red: number, nombreRed : string, span: string, url: string, id_persona: number){
     this.id_red = id_red;
     this.nombreRed = nombreRed;
     this.span = this.span;
     this.url = this.url;
     this.id_persona = id_persona;
 }

}
