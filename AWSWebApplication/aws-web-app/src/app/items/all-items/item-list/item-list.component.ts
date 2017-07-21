import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Item } from '../../models/item';
import { ItemService } from '../../services/item-service.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

    itemList: Observable<Item[]>;

    newItem: Item;

    constructor(private itemService: ItemService) {
        this.newItem = new Item();
    }

    ngOnInit() {
        this.itemList = this.itemService.getAllItems();
    }

    addNewItem() {
        this.itemService.addItem(this.newItem)
            .subscribe(res => {
                this.newItem = new Item();
                this.itemList = this.itemService.getAllItems();
            });
    }

    clearNewItem() {
        this.newItem = new Item();
    }

    deleteItem(item: Item) {
        this.itemService.deleteItem(item.id)
            .subscribe(res => {
                this.itemList = this.itemService.getAllItems();
            });
    }

    buyInventory(item: Item) {
        item.currentInventory++;

        this.itemService.updateItem(item)
            .subscribe(res => {
                this.itemList = this.itemService.getAllItems();
            });
    }

    sellInventory(item: Item) {
        item.currentInventory--;

        this.itemService.updateItem(item)
            .subscribe(res => {
                this.itemList = this.itemService.getAllItems();
            });
    }
}
