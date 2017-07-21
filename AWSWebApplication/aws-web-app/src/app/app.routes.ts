import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
    { path: 'item-list', loadChildren: './items/all-items/all-items.module#AllItemsModule' },
    { path: 'item', loadChildren: './items/single-item/single-item.module#SingleItemModule' },
    {
        path: '',
        redirectTo: '/item-list',
        pathMatch: 'full'
    }
];

const config: ExtraOptions = {
    enableTracing: true
};

export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, config);