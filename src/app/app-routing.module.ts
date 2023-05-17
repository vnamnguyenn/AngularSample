import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./crud/list/list.component";
import {DetailsComponent} from "./crud/details/details.component";
import {CreateComponent} from "./crud/create/create.component";
import {UpdateComponent} from "./crud/update/update.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create',
    component: CreateComponent,
    pathMatch: 'full'
  },
  {
    path: 'update',
    component: UpdateComponent,
  },
  {
    path: ':id',
    component: DetailsComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
