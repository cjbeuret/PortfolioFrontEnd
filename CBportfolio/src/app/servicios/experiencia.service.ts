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
    public List<DtoExperiencia> list(){
       // return listaExperiencias;
       return expeServ.listDto();
    }
    SERIA
    public listDto(): Observable<DtoExperiencia[]> {
      return this.httpClient.get<DtoExperiencia[]>(this.expURL + 'lista');
    }
    */

    public list(): Observable<Experiencia[]> {
      return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
    }

    /*
    @GetMapping ("/detalle/{id}")
    @ResponseBody
    public Experiencia getById (@PathVariable Long id){
      return expeServ.getById(id); 
    */
    
    public getById(id:number):Observable<Experiencia> {
      return this.httpClient.get<Experiencia>(this.expURL + `detalle/${id}`); //o this.expURL + 'buscar'+ '${id}' 
    }

    /*
    @PostMapping ("/alta")
    public String create (@RequestBody Experiencia experiencia){
      //listaExperiencias.add(expe);
      expeServ.create(experiencia);
      return "La experiencia fue creada correctamente";
    }
    */
    
    public create(experiencia: Experiencia):Observable<any>{
      return this.httpClient.post<any>(this.expURL + `alta`, experiencia); //le pasamos el objeto experiencia para crear nuevo registro en BD
    }
    
    /*@DeleteMapping ("/baja/{id}")
    public String delete(@PathVariable Long id){
        expeServ.delete(id);
        return "La experiencia fue borrada correctamente";
    }*/
    
    public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.expURL + `baja/${id}`);
    }

    /* 
    @PutMapping ("/edicion")
    public String edit (@RequestBody Experiencia experiencia){
        //listaExperiencias.add(expe);
        expeServ.edit(experiencia);
        return "Los datos de la experiencia se modificaron correctamente";
      }*/
   
    public edit(experiencia: Experiencia):Observable<any>{
      return this.httpClient.put<any>(this.expURL + `edicion`, experiencia);
    }
   
    /* 
    @PutMapping ("/editar/{id}")
    public String editById (@PathVariable("id") Long id, @RequestBody Experiencia expe){
        expeServ.editById(expe);
        return "Los datos de la experiencia se modificaron correctamente";
      }
    */

    public editById (id:number, experiencia: Experiencia): Observable<any>{
      return this.httpClient.put<any>(this.expURL + `edicion/${id}`, experiencia);
    } 
}