import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { BodyComponent } from './components/body/body.component';
import { ResultComponent } from './components/result/result.component';
import { ThanksComponent } from './components/thanks/thanks.component';


const routes: Routes = [

  {path: '', component: BodyComponent},
  {path: '#', component: BodyComponent},
  {path: 'body', component: BodyComponent},
  {path: 'result', component: ResultComponent},
  {path: 'form', component: FormComponent},
  {path: 'thanks', component: ThanksComponent},

  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
