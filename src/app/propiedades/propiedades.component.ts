import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent implements OnInit {

  constructor(private http: DataService) {}

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'Precio',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Precio',
        description: 'Precio debe ser un numero',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-tag bg-transparent border-primary'
        }
      }
    },
    {
      key: 'Direccion_Exacta',
      type: 'input',
      templateOptions: {
        placeholder: 'ITCR',
        label: 'Direccion Exacta: ',
        description: 'Direccion Exacta debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-map bg-transparent border-primary'
        }
      }
    },
    {
      key: 'Titulo',
      type: 'input',
      templateOptions: {
        placeholder: 'Doe',
        label: 'Titulo: ',
        description: 'Titulo debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-bowtie bg-transparent border-primary '
        }
      }
    },
    {
      key: 'Niveles',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Niveles: ',
        description: 'Niveles debe ser un numero',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-tag bg-transparent border-primary'
        }
      }
    },
    {
      key: 'Tamano_Construccion',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Tamano Construccion: ',
        description: 'Tamano Construccion debe ser un numero',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-tag bg-transparent border-primary'
        }
      }
    },
    {
      key: 'Cant_Habitaciones',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Cantidad Habitaciones: ',
        description: 'Cantidad Habitaciones debe ser un numero',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-tag bg-transparent border-primary'
        }
      }
    },
    {
      key: 'Cant_Banos',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Cant Banos: ',
        description: 'Cantidad Banos debe ser un numero',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-tag bg-transparent border-primary'
        }
      }
    },
    {
      key: 'Cant_Parqueos',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Cantidad Parqueos: ',
        description: 'Cant_Parqueos debe ser un numero',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-tag bg-transparent border-primary'
        }
      }
    },
    {
      key: 'Cedula_Cliente',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Cedula Cliente',
        description: 'Cedula Cliente debe tener 9 digitos',
        required: true,
        min: 100000000,
        max: 999999999,
        addonLeft: {
          class: 'icon ion-ios-finger-print bg-transparent border-primary'
        }
      }
    },
  ];

  show = false;

  clientes;

  ngOnInit() {
    this.http.getPropiedades().subscribe(data => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

  showForm() {
    this.show = !this.show;
  }

  submit() {

    this.http.postP(this.model).subscribe(
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

