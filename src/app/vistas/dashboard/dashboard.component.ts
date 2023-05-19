import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms'
import { ResponseI } from 'src/app/modelos/response.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { LoginI } from 'src/app/modelos/login.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

petForm = new FormGroup({
  strAccion: new FormControl('1'),
  strUsuario: new FormControl('rnazario'),
  strSucursal:new FormControl(''),
  strPeriodo:new FormControl('5'),
  strEjercicio:new FormControl('2023'),
  strID:new FormControl(''),
})

  pett!: ResponseI[];

constructor( private api:ApiService,  ) {

}

  ngOnInit(): void {

      //this.api.loginByPet(this.petFormpett)


  }
  onLogin2(form: LoginI){
    this.api.loginByPet(form).subscribe(data =>{
      let dataResponse:ResponseI[] = data;
      this.pett=data;


      if(Object.keys(dataResponse).length != 0){



        console.log(data);

      }
    });
  }


}
