import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Item } from '../models/item';
import { environment } from '../../../environments/environment';

@Injectable()
export class ItemService {

    constructor(private http: Http) { }

    getAllItems() {
        return this.http.get(environment.dataApi + '/items')
            .map(res => {
                var items: Item[] = res.json().map(obj => {
                    return new Item({
                        id: obj.id,
                        currentInventory: obj.currentInventory,
                        description: obj.description,
                        name: obj.name
                    });
                });

                return items;
            });
    }

    getItem(id: string) {
        return this.http.get(environment.dataApi + '/items/' + id)
            .map(res => {
                var obj = res.json();

                return new Item({
                    id: obj.id,
                    currentInventory: obj.currentInventory,
                    description: obj.description,
                    name: obj.name
                });
            });
    }

    addItem(item: Item) {
        return this.http.post(environment.dataApi + '/items', item)
            .map(res => {
                var obj = res.json();

                return new Item({
                    id: obj.id,
                    currentInventory: obj.currentInventory,
                    description: obj.description,
                    name: obj.name
                });
            });
    }

    deleteItem(id: string) {
        return this.http.delete(environment.dataApi + '/items/' + id)
            .map(res => {
                return true;
            });
    }

    updateItem(item: Item) {
        return this.http.put(environment.dataApi + '/items/' + item.id, item)
            .map(res => {
                var obj = res.json();

                return new Item({
                    id: obj.id,
                    currentInventory: obj.currentInventory,
                    description: obj.description,
                    name: obj.name
                });
            });
    }

}
