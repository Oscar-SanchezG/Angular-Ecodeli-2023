import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string ="https://www.ecodeli.mx/ApiRest/ApiEcodeliComercial/v2/PaginaEcodeli/get_Proveedores"

  constructor(private http:HttpClient) { }

  loginByPet(form:LoginI):Observable<ResponseI[]>{
    let direccion = this.url;
    return this.http.post<ResponseI[]>(direccion,form);

  }

}
