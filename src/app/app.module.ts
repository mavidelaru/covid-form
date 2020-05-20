import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { BodyComponent } from './components/Body/body.component';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';
import { ThanksComponent } from './components/thanks/thanks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FormComponent,
    ResultComponent,
    ThanksComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
