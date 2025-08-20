import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit{
  title = 'RXJS';

  ngOnInit(): void {
    /*this.minhaPromise('Eduardo')
    .then(result => console.log(result))
    .catch(erro => console.log(erro))*/

    /*this.minhaObservable('') -- Maneira antiga
      .subscribe(
        result => console.log(result),
        erro => console.log(erro)
      );*/

    /*const observer = { // Observer manual
      next: (valor : any) => console.log('next : ', valor),
      error: (erro : any) => console.log('erro : ', erro),
      complete: () => console.log('FIM!') 
    }

    this.minhaObservable('') 
      .subscribe(observer);*/

    /*this.minhaObservable('Eduardo') // Maneira nova, com o observer já no subscribe
      .subscribe({
        next: (next) => {
          console.log(next);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.info('Observable Completo');
        }
      });*/   

      const obs = this.usuarioObservable('Admin', 'admin@admin.com');

      const subs = obs.subscribe({
        next: (next) => {
          console.log(next);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.info('Observable Completo');
        }
      });

      setTimeout(() => {
        subs.unsubscribe();        
        console.log('Conexão fechada: ' + subs.closed)
      }, 3500);
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

  minhaObservable(nome: string) : Observable<string>{
    return new Observable(subscriber => {
      if(nome === 'Eduardo'){
        subscriber.next('Olá ' + nome);
        subscriber.next('Olá de novo ' + nome);
        setTimeout(() => {
          subscriber.next('Resposta com delay ' + nome);
        }, 5000);
        subscriber.complete();
      }
      else{
        subscriber.error('Ops! Deu erro!');
      }
    })
  }

  usuarioObservable(nome: string, email: string) : Observable<Usuario>{
    return new Observable(subscriber => {
      if(nome === 'Admin'){
        let usuario = new Usuario(nome, email);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);

        setTimeout(() => {
          subscriber.complete();
        }, 5000);
      }
      else{
        subscriber.error('Ops! Deu erro!');
      }
    })
  }
}

export class Usuario {
  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  nome: string;
  email: string;
}