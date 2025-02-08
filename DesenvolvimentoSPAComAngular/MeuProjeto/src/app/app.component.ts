import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./navegacao/menu/menu.component";
//import { HomeComponent } from "./navegacao/home/home.component";
import { FooterComponent } from "./navegacao/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    MenuComponent,
    //HomeComponent,
    FooterComponent]  
})
export class AppComponent {
  title = 'MeuProjeto';
}
