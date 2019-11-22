import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private http: DataService) {}

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'nombre',
      type: 'input',
      templateOptions: {
        placeholder: 'John',
        label: 'Nombre: ',
        description: 'Nombre debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-contact bg-transparent border-primary'
        }
      }
    },
    {
      key: 'apellido',
      type: 'input',
      templateOptions: {
        placeholder: 'Doe',
        label: 'Primer Apellido: ',
        description: 'Apellido debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-bowtie bg-transparent border-primary '
        }
      }
    },
    {
      key: 'cedula',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Cedula',
        description: 'Cedula debe tener 9 digitos',
        required: true,
        min: 100000000,
        max: 999999999,
        addonLeft: {
          class: 'icon ion-ios-finger-print bg-transparent border-primary'
        }
      }
    },
    {
      key: 'nacionalidad',
      type: 'input',
      templateOptions: {
        placeholder: 'tico',
        label: 'Nacionalidad: ',
        description: 'Nacionalidad debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-flag bg-transparent border-primary '
        }
      }
    },{
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        type: 'email',
        placeholder: 'Email debe tener un formato correcto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-mail bg-transparent border-primary '
        }
      },
    },

  ];

  show = false;

  clientes;

  ngOnInit() {
    this.http.getClient().subscribe(data => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

  showForm() {
    this.show = !this.show;
  }

  submit() {

    this.http.postC(this.model).subscribe(
      data => {
        console.log(data);
        alert('Se agregó con éxito la etapa');
      },
      error => {
        console.log(error);
        alert('Ocurrió un error');
      }
    );

    location.reload();


  }
}

