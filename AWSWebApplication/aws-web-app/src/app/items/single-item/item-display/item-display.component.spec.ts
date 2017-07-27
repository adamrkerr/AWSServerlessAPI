import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SingleItemModule } from '../single-item.module';
import { ItemDisplayComponent } from './item-display.component';
import { ItemService } from '../../services/item-service.service';
import { ActivatedRouteStub } from '../../../../testing/router-stubs';

describe('ItemDisplayComponent', () => {
    let component: ItemDisplayComponent;
    let fixture: ComponentFixture<ItemDisplayComponent>;

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
        fixture = TestBed.createComponent(ItemDisplayComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
