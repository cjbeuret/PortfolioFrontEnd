export class Persona {
    
    id: number; 
    nombre: string; 
    apellido: string;
    especialidad1: string;
    especialidad2 : string;
    sobreMi : string;
    banner : string;
    imagen : string;
    telefono : string;
    email : string;
    password : string;
    fechaNac : string;
    
    

    constructor (id: number, nombre: string, apellido: string, especialidad1 : string, especialidad2 : string, 
    sobreMi : string, banner : string, imagen : string, telefono : string, email : string, password : string, fechaNac : string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad1 = especialidad1;
        this.especialidad2 = especialidad2;
        this.sobreMi = sobreMi;
        this.banner = banner;
        this.imagen = imagen;
        this.telefono = telefono;
        this.email = email;
        this.password = password;
        this.fechaNac = fechaNac;
        
    }
    
  
   
}
