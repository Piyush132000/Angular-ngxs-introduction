import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_ui/home/home.component';
import {NgxsModule} from '@ngxs/store';
import {TutorialState} from './_store/Satates/tutorial.state';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([TutorialState]),
    NgxsStoragePluginModule.forRoot({
      key: 'tutorial'
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
