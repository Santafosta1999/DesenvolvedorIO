import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  imports: [
    FormsModule,
    NgClass
  ]
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  /*KeyUp(event: any){
    this.nome = event.target.value;
  }*/
}
