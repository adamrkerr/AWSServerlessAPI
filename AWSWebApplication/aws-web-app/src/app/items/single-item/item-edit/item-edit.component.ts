import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Item } from '../../models/item';
import { ItemService } from '../../services/item-service.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent{
    currentItem: Item = new Item();
    itemId: Observable<string>;

    constructor(route: ActivatedRoute, private itemService: ItemService) {
        this.itemId = route.params.map(params =>
        {
            return params['id'];
        });

        this.itemId.subscribe(id => this.loadItem(id));
    }

    loadItem(id: string) {
        this.itemService.getItem(id)
            .subscribe(res => {
                this.currentItem = res;
            });
    }

    updateItem() {
        this.itemService.updateItem(this.currentItem)
            .subscribe(res => {
                this.currentItem.currentInventory = res.currentInventory;
                this.currentItem.description = res.description;
                this.currentItem.name = res.name;
            });
    }
}
