import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory.service';

import { HeroService } from './services/hero.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroesComponent }     from './list/heroes.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroSearchComponent } from './search/hero-search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {}

