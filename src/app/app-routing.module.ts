import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotersListComponent } from './components/voters/voters-list/voters-list.component';
import { AppComponent } from './app.component';
import { AddVoterComponent } from './components/voters/add-voter/add-voter.component';
import { EditVoterComponent } from './components/voters/edit-voter/edit-voter.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

const routes: Routes = [
  {
    path : 'welcome',
    component : WelcomeComponent
  },
  {
    path : 'voters',
    component : VotersListComponent
  },
  {
    path : 'voters/add',
    component : AddVoterComponent
  },
  {
    path : 'voters/edit/:id',
    component : EditVoterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
