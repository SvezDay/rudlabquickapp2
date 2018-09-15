import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DirectivesModule} from '../_directives/_directives.module';
//SERVICE
import {AuthGuard}            from '../_core/auth.guard';

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

  ],
  declarations: [
    GamesComponent
    , RecallComponent
    , RecallCardComponent
  ]
})
export class GamesModule { }
