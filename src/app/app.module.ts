import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DndModule} from 'ng2-dnd';

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
    BrowserModule,
    DndModule.forRoot()
  ],
  providers: [ListService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
