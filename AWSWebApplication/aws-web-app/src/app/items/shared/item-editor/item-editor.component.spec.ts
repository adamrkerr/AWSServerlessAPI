import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Item } from '../../models/item';
import { SharedModule } from '../shared.module';
import { ItemEditorComponent } from './item-editor.component';

describe('ItemEditorComponent', () => {
    let component: ItemEditorComponent;
    let fixture: ComponentFixture<ItemEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            //declarations: [ ItemEditorComponent ]
            imports: [SharedModule, BrowserAnimationsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemEditorComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    //it('should display item for edit', () => {
    //    //component.item = new Item({
    //    //    currentInventory: 10,
    //    //    description: "desc",
    //    //    id: "1234",
    //    //    name: "Name"
    //    //});

    //    //fixture.detectChanges();

    //    //////fixture.whenStable().then(() => {

    //    //////    fixture.detectChanges(); //bind data

    //    ////    var idText = fixture.debugElement.query(By.css('.item-detail-field-id')).nativeElement.value;
    //    ////    var nameText = fixture.debugElement.query(By.css('div.item-detail-field-name')).nativeElement.value;
    //    ////    var descText = fixture.debugElement.query(By.css('div.item-detail-field-desc')).nativeElement.value;
    //    ////    var inventoryText = fixture.debugElement.query(By.css('div.item-detail-field-inventory')).nativeElement.numericValue;

    //    ////    expect(idText).toEqual("1234");
    //    ////    expect(nameText).toEqual("Name");
    //    ////    expect(descText).toEqual("desc");
    //    ////    expect(inventoryText).toEqual(10);
    //    //////});
    //});
});
