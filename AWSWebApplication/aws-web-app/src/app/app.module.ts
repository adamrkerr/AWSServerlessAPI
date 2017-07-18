import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { path: 'item-list', loadChildren: './all-items/all-items.module#AllItemsModule' },
    { path: 'item', loadChildren: './single-item/single-item.module#SingleItemModule' },
    {
        path: '',
        redirectTo: '/item-list',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
