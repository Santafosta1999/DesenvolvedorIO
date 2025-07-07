import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-produto',
  imports: [NgFor],
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
