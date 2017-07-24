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

        var itemUpdate = new Item({id: item.id, currentInventory: item.currentInventory + 1, description: item.description, name: item.name});

        this.itemService.updateItem(itemUpdate)
            .subscribe(res => {
                item.currentInventory = res.currentInventory;
            });
    }

    sellInventory(item: Item) {
        var itemUpdate = new Item({ id: item.id, currentInventory: item.currentInventory - 1, description: item.description, name: item.name });

        this.itemService.updateItem(itemUpdate)
            .subscribe(res => {
                item.currentInventory = res.currentInventory;
            });
    }
}
