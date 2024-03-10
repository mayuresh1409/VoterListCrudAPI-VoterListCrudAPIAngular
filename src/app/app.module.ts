import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotersListComponent } from './components/voters/voters-list/voters-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddVoterComponent } from './components/voters/add-voter/add-voter.component';
import { FormsModule } from '@angular/forms';
import { EditVoterComponent } from './components/voters/edit-voter/edit-voter.component';

@NgModule({
  declarations: [
    AppComponent,
    VotersListComponent,
    AddVoterComponent,
    EditVoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
