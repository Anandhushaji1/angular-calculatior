import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SubstractionComponent } from './substraction/substraction.component';

const routes: Routes = [
  {path:"addition",component:AdditionComponent},
  {path:"sub",component:SubstractionComponent},

  {path:"mult",component:MultiplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
