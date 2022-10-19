import { Component, OnInit } from '@angular/core';




interface Persona{
  nombre:string,
  favoritos:Favorito[]
}

interface Favorito{
  id:number,
  nombre:string
}




@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('dsfds');
  }


  persona: Persona = 
              { 'nombre': 'Marcos',
                'favoritos': [
                        {id:1, 'nombre':'death note'},
                        {id:1, 'nombre':'spy x family'},
                ]
              }
  

}
