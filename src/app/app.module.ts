import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/list/list.component';
import { TileComponent } from './components/tile/tile.component';

import { ListService } from './services/list-service.service';
import { UtilsService } from './services/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    TileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
