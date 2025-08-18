import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'RXJS';

  ngOnInit(): void {
    this.minhaPromise('Eduardo')
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
  }

  minhaPromise(nome: string) : Promise<string>{
    return new Promise((resolve, reject) => {
      if(nome == 'Eduardo'){
        setTimeout(() => {
          resolve('Seja bem vindo ' + nome);
        }, 1000);
      } else {
        reject('Ops! Você não é o Eduardo')
      }      
    })
  }
}
