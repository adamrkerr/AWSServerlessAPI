import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllItemsModule } from '../all-items.module';
import { ItemListComponent } from './item-list.component';
import { ItemService } from '../../services/item-service.service';

describe('ItemListComponent', () => {
    let component: ItemListComponent;
    let fixture: ComponentFixture<ItemListComponent>;

    beforeEach(async(() => {
        var itemServiceStub = {};

        TestBed.configureTestingModule({
            imports: [AllItemsModule, BrowserAnimationsModule],
            //declarations: [ ItemListComponent ] Don't, because we are importing instead
            providers: [
                { provide: ItemService, useValue: itemServiceStub }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemListComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges(); //don't because we don't want onInit to happen yet
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should load a list of items', () => {
        expect(component).toBeTruthy();

        var itemService = TestBed.get(ItemService);

        itemService.getAllItems = () => { };

        var spy = spyOn(itemService, 'getAllItems')
            .and.returnValue(Promise.resolve([
                {
                    "id": "12345",
                    "name": "Widgeywidgywidgy",
                    "description": "A generic widget that does  cool stuff",
                    "currentInventory": 107
                },
                {
                    "id": "12346",
                    "name": "Widget B",
                    "description": "Another generic widget that does stuff",
                    "currentInventory": 50
                },
            ]));

        fixture.detectChanges(); //causes onInit

        fixture.whenStable().then(() => {

            fixture.detectChanges(); //bind data

            expect(fixture
                .debugElement
                .queryAll(By.css('app-item-view'))
                .length)
                .toEqual(2);
            expect(spy.calls.any()).toBeTruthy();
        });

    });
});
