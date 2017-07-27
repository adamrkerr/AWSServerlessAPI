import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Item } from '../../models/item';
import { SharedModule } from '../shared.module';
import { ItemViewComponent } from './item-view.component';

describe('ItemViewComponent', () => {
  let component: ItemViewComponent;
  let fixture: ComponentFixture<ItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //declarations: [ ItemViewComponent ]
      imports: [SharedModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemViewComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display item', () => {
      component.item = new Item({ currentInventory: 10, description: "desc", id : "1234", name : "Name" });

      fixture.detectChanges();

      var idText = fixture.debugElement.query(By.css('div.item-detail-field-id')).nativeElement.textContent;
      var nameText = fixture.debugElement.query(By.css('div.item-detail-field-name')).nativeElement.textContent;
      var descText = fixture.debugElement.query(By.css('div.item-detail-field-desc')).nativeElement.textContent;
      var inventoryText = fixture.debugElement.query(By.css('div.item-detail-field-inventory')).nativeElement.textContent;

      expect(idText).toEqual("1234");
      expect(nameText).toEqual("Name");
      expect(descText).toEqual("desc");
      expect(inventoryText).toEqual("10");
  });
});
