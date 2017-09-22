import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';

RouterModule.forRoot([
    {
        path: 'heroes',
        component: HeroesComponent
    }
])

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
    title = 'Tour of heroes!';
}