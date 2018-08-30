import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// LIB
import {ClickOutsideModule} from 'ng4-click-outside';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner'; //loading spinner
import {DndModule} from 'ng2-dnd'; //Drag and drop
import {ContextMenuModule, ContextMenuService, ContextMenuComponent} from 'ngx-contextmenu';

// MODULES
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';


// SERVICES
import {ApiService} from './_core/api.service';
import {AuthenticationService} from './_core/authentication.service';
import {AuthGuard} from './_core/auth.guard';
import {UtilsService} from './_core/utils.service';
import {IntercomService} from './_core/intercom.service';
import {NavigationService} from './_core/navigation.service';

// COMPONENTS
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AuthenticateComponent} from './authenticate/authenticate.component';
import {DocumentComponent} from './document/document.component';
import { DocRootComponent } from './doc-root/doc-root.component';
import {FreeComponent} from './free/free.component';
import {DicoComponent} from './dico/dico.component';
import { BookComponent } from './book/book.component';
import { TableComponent } from './table/table.component';
import {GamesComponent} from './games/games.component';
import {GamesRecallOneComponent} from './games-recall-one/games-recall-one.component';
import { AdminComponent } from './admin/admin.component';

// DIRECTIVES
import {AutosizeDirective} from './_directives/autosize.directive';
import {TabulationDirective} from './_directives/tabulation.directive';
import {ClickOutsideDirective} from './_directives/clickOutside.directive';
import {LabelComponent} from './_directives/label.directive';
import {ModelIconComponent} from './_directives/model-icon.component';
import { ActivityComponent } from './activity/activity.component';


@NgModule({
  imports: [
    BrowserModule
    , HttpClientModule
    , FormsModule
    , ReactiveFormsModule
    , BrowserAnimationsModule
    , AppRoutingModule
    , MaterialModule
    // LIBS
    , ClickOutsideModule
    , Ng4LoadingSpinnerModule.forRoot()
    , DndModule.forRoot()
    // , ContextMenu
    , ContextMenuModule.forRoot()
  ]
  ,declarations: [
    AppComponent
    , HomeComponent
    , AuthenticateComponent
    , DocRootComponent
    , FreeComponent
    , DocumentComponent
    , BookComponent
    , TableComponent
    , DicoComponent
    , GamesComponent
    , GamesRecallOneComponent
    , AdminComponent
    // DIRECTIVES
    , AutosizeDirective
    , TabulationDirective
    , ClickOutsideDirective
    , LabelComponent
    , ModelIconComponent, ActivityComponent
    // LIBS
    // , ContextMenuComponent
  ]
  ,exports:[
    AutosizeDirective
    , TabulationDirective
    , ClickOutsideDirective
  ]
  ,providers: [AuthenticationService, AuthGuard, UtilsService, IntercomService
    ,{provide:APP_BASE_HREF, useValue:'/'}
    // ,{provide:ContextMenuService}
    // ,{ provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ]
  ,bootstrap: [AppComponent]
  // ,schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {}
