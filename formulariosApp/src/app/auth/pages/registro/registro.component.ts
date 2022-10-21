import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.pattern(this.validationService.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.validationService.emailPattern)]],
    username: ['',[Validators.required, this.validationService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required, Validators.minLength(4)]],
    }, {
      validators: [this.validationService.camposIguales('password','password2')]
    }
  )

  constructor(private fb: FormBuilder,
              private validationService: ValidatorService) { }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'nico',
      email:'algo@hotmail.com'
    })
  }


  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
