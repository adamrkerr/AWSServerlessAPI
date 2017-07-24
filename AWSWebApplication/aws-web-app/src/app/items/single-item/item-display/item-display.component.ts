import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Item } from '../../models/item';
import { ItemService } from '../../services/item-service.service';

@Component({
    selector: 'app-item-display',
    templateUrl: './item-display.component.html',
    styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

    currentItem: Item = new Item();
    itemId: Observable<string>;

    constructor(private route: ActivatedRoute, private itemService: ItemService) {
        
    }

    loadItem(id: string) {
        this.itemService.getItem(id)
            .subscribe(res => {
                this.currentItem = res;
            });
    }

    ngOnInit() {
        this.itemId = this.route.params.map(params => {
            return params['id'];
        });

        this.itemId.subscribe(id => this.loadItem(id));
    }

}
