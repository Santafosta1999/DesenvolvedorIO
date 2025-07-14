import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-lista-produto',
  imports: [
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    RouterModule,
    TitleCasePipe,
    CurrencyPipe
  ],
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {
  
  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[] | undefined;

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos)
        },
        error => console.log(error)
      );
  }
}
