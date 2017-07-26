import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SingleItemModule } from '../single-item.module';
import { ItemEditComponent } from './item-edit.component';
import { ItemService } from '../../services/item-service.service';
import { ActivatedRouteStub } from '../../../../testing/router-stubs';

describe('ItemEditComponent', () => {
    let component: ItemEditComponent;
    let fixture: ComponentFixture<ItemEditComponent>;

    beforeEach(async(() => {

        var stub = new ActivatedRouteStub();
        stub.testParamMap = { id: "5" };

        var serviceStub = {};
        TestBed.configureTestingModule({
            //declarations: [ ItemDisplayComponent ]
            imports: [SingleItemModule, RouterTestingModule],
            providers: [
                { provide: ActivatedRoute, useValue: stub },
                { provide: ItemService, useValue: serviceStub }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemEditComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should load an item', () => {
        expect(component).toBeTruthy();
    });
});
