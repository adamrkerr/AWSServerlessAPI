import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
});
