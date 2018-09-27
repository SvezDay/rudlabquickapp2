import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DirectivesModule} from '../_directives/_directives.module';
// import { SocketIoModule} from 'ng-socket-io';

//SERVICE
import {AuthGuard}            from '../_core/auth.guard';
// import {GamesSocketService} from './games.component'

import {GamesComponent} from './games.component';
import { RecallComponent } from './recall/recall.component';
import { RecallCardComponent } from './recall-card/recall-card.component';

const routes: Routes = [
  { path: '',component: GamesComponent,canActivate: [AuthGuard] }
  ,{ path: 'recall', component: RecallComponent,canActivate: [AuthGuard] }
];
@NgModule({
  imports: [
    CommonModule
    , DirectivesModule
    , RouterModule.forChild(routes)
    , FormsModule
    // , SocketIoModule

  ],
  declarations: [
    GamesComponent
    , RecallComponent
    , RecallCardComponent
  ]
  // , providers:[GamesSocketService]
})
export class GamesModule { }
