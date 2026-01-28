import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoRoutingModule } from "./produto.route";
import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./componentes/produto-count.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent
    ],
    imports: [
        [CommonModule],
        [ProdutoRoutingModule]
    ],
})
export class ProdutoModule{}