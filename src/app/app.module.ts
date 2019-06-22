import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FormsModule } from '@angular/forms';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { LinkParserComponent } from './link-parser/link-parser.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { PlayerComponent } from './player/player.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { ResultGridComponent } from './search-engine/result-grid/result-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkParserComponent,
    SearchEngineComponent,
    PlayerComponent,
    AppContainerComponent,
    ResultGridComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxYoutubePlayerModule.forRoot(),
    VirtualScrollerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PlayerComponent]
})
export class AppModule { }
