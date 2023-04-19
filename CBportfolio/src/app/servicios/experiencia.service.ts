import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL= 'http://localhost:8080/experiencia/' //si pongo barra al final no debo ponerla en cada método del Controller

  constructor(private httpClient:HttpClient) { }

    //insertar METODOS del controller

    /*@GetMapping ("/lista")
    @ResponseBody
    public List<Experiencia> list(){
       // return listaExperiencias;
       return expeServ.list();
    }*/

    public list(): Observable<Experiencia[]> {
      return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
    }

    /*
    @GetMapping ("/buscar/{id}")
    @ResponseBody
    public Experiencia getById (@PathVariable Long id){
      return expeServ.getById(id); */
    
      public getById(id:number):Observable<Experiencia> {
      return this.httpClient.get<Experiencia>(this.expURL + `buscar/${id}`); //o this.expURL + 'buscar'+ '${id}' 
    }

    /*@PostMapping ("/crear/experiencia")
      public String crearExperiencia (@RequestBody Experiencia expe){
        //listaExperiencias.add(expe);
        expeServ.crearExperiencia(expe);
        return "La experiencia fue creada correctamente";
    }*/
    
    public create(Experiencia: Experiencia):Observable<any>{
      return this.httpClient.post<any>(this.expURL + `crear`, Experiencia); //le pasamos el objeto experiencia para crear nuevo registro en BD
    }
    
    /*@DeleteMapping ("/borrar/{id}")
    public String borrarExperiencia(@PathVariable Long id){
        expeServ.borrarExperiencia(id);
        return "La experiencia fue borrada correctamente";
    }*/
    
    public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
    }

   /* @PutMapping ("/editar/experiencia")
    public String update (@RequestBody Experiencia expe){
        //listaExperiencias.add(expe);
        expeServ.update(expe);
        return "Los datos de la experiencia se modificaron correctamente";
      }*/
   
      public edit(experiencia: Experiencia):Observable<any>{
      return this.httpClient.put<any>(this.expURL + `editar`, experiencia);
    }

    /* este sería editar por id, pero no lo tenemos implem en el FRONTEND

    @PutMapping ("/editar/{id}")
    public String editById (@PathVariable("id") Long id, Experiencia expe){
        expeServ.editById(expe);
        return "Los datos de la experiencia se modificaron correctamente";
      }
    public editById(id:number, Experiencia: Experiencia):Observable<any>{
      return this.httpClient.put<any>(this.expURL + `editar/${id}`, Experiencia);
    }*/
}