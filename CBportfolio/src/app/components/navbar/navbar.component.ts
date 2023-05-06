import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/servicios/auth.service';
//import { DataService } from 'src/app/servicios/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

//redesList : any = [];

//isLogged = false;
//modoEdit: any;

logindatos:any;
esta_logueado: boolean = false;


constructor(
  private datosLogin: LoginService,
  private router:Router
){}

ngOnInit(): void {

  if (localStorage.getItem("estado_login"))
      {
        this.esta_logueado=true;
      }
      else
        {
         this.esta_logueado=false;
        }
 
}
     
onlogin() {
  this.router.navigate(['/login']);
}

onlogout(){
  //localStorage.setItem('estado_login','no_logueado');
  localStorage.removeItem('estado_login')
  console.log('tiene que cerrar');
  window.location.reload();
}
  

  /*
  constructor(private router:Router, private authService: AuthService) {}
  
   este está en MGB Computación
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this,isLogged = false;
    }  
  }

  //este sería el adaptado
  ngOnInit(): void {
    if(sessionStorage.getItem('currentUser') == "null") {
       this.modoEdit = false;
    } else if(sessionStorage.getItem('currentUser') == null) {
       this.modoEdit = false;
    } else {
       this.modoEdit = true;
    } 
  }  

  onLogOut(): void {
    this.authService.logOut();
    window.location.reload();
  }

  login(): void{
    //this.authService.iniciarSesion(){
      this.router.navigate(['/iniciar-sesion'])
    }
*/
  

  
}

   /* esto es cuando teníamos el servicio del JSON 
  
  el constructor está trayendo datos del servicio, datos es un alias
  
  constructor(private datos: DataService) {} 

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data); 
      this.redesList = data.redes      
    })
  }
*/

  

