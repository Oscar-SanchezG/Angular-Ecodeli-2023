import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/servicios/api/api.service';
import { LoginI } from 'src/app/modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm = new FormGroup({
    strAccion: new FormControl('', Validators.required),
    strUsuario: new FormControl('', Validators.required),
    strSucursal: new FormControl(''),
    strPeriodo: new FormControl('', Validators.required),
    strEjercicio: new FormControl('', Validators.required),
    strID: new FormControl('')
  })


  constructor( private api:ApiService, private router:Router, ) {

  }

  errorStatus:boolean = false;
  errorMsj:any = "";


  ngOnInit(): void {



  }


  onLogin(form: LoginI){
    this.api.loginByPet(form).subscribe(data =>{
      let dataResponse:ResponseI[] = data;


      if(Object.keys(dataResponse).length != 0){

        this.router.navigate(['dashboard']);

        console.log(data);

      }else{
        this.errorStatus = true;
        this.errorMsj = "Try again, service no conectec"
      }
    });
  }

}
